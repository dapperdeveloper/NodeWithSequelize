const bcryptjs = require("bcryptjs");
const User = require("../model/Users");
const { QueryTypes } = require('sequelize');
const DB = require("../config/DB")
exports.getData = async (req, res) => {
  // try {
  //   const users = await User.findAll();
  //   if (!users)
  //     return res
  //       .status(404)
  //       .json({ success: false, message: "users not found" });

  //   return res
  //     .status(200)
  //     .json({ success: true, message: "users list", users });
  // } catch (error) {
  //   console.log(error);
  // }


const users = await DB.query("SELECT * FROM `users`", { type: QueryTypes.SELECT });

   return res
      .status(200)
      .json({ success: true, message: "users list here", users });
  
  
};



exports.deleteData = async (req, res) => {

  const users = await DB.query("DELETE FROM `users` WHERE id = :id AND name = :name", {
    replacements:{id: req.body.id,
    name:req.body.name},
    type: QueryTypes.DELETE });

  // const deleteData = await User.destroy({
  //   where: {
  //     id: req.body.id
  //   },
  // });

  if (users) {
    res.json({ status: 200, message: "Data is deletet" });
  } else {
    res.json({ status: 404, message: "Data not delete!" });
  }


};

exports.update = async (req, res) => {
  const { id, name,  } = req.body

    if(!id) return res.status(404).json({ status:404, message: "id is required!" })

    
    const updateData = await DB.query("Update `users` SET name = :name WHERE id = :id", {
      replacements:{id: req.body.id,
      name:req.body.name},
      type: QueryTypes.UPDATE });


    // const updateData = await User.update({name:name},{
    //   where: {
    //     id
    //   },
    // });
    if (updateData) {
      res.json({ status: 200, message: "Data is updated" });
    } else {
      res.json({ status: 200, message: "Data not updated!" });
    }
  };

  exports.addData = async(req, res) =>{

    const updateData = await DB.query("INSERT INTO `users` (name, email, address, mobile, password) VALUES (:name, :email,  :address, :mobile, :password )", {
      replacements:{name: req.body.name,
      email:req.body.email,
      address:req.body.address,
      mobile:req.body.mobile,
      password:req.body.password
    },
      type: QueryTypes.INSERT });
      return res.status(200).json({ success: true, message: "user added!" });
  }
  
// exports.addData = async (req, res) => {
//   let { name, email, address, mobile, password } = req.body;

//   // if (!name && !email && !address && !mobile && !password) {
//   //   return res.status(404).json({
//   //     success: false,
//   //     message: "[name, email, address, mobile, password] fields are required",
//   //   });
//   // }

//   try {
//     // email check
//     // password encryption
//     var salt = bcryptjs.genSaltSync(10);
//     req.body.password = bcryptjs.hashSync(password, salt);

//     const users = await User.create(req.body);
//     if (users) {
//       return res.status(200).json({ success: true, message: "user added!" });
//     } else {
//       return res
//         .status(404)
//         .json({ success: false, message: "user not added!" });
//     }
//   } catch (error) {
//     console.log(error);
//     return res
//       .status(404)
//       .json({ success: false, message: "something went wrong" });
//   }
// };


