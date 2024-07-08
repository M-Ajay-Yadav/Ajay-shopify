const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const UserModel = require("../Modules/User");
const signup = async (req, res) => {
  try {
    const { name, email, password } =  req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({ msg: "user is alredy exist , you can login", success: false });
    }
    const userModel = new UserModel({name, email, password})
    userModel.password = await bcrypt.hash(password,10)
    await userModel.save();
    res.status(200).json({msg:"signupSuccessful",success:true})
  } catch (err) {
    res
    .status(500)
    .json({ msg:"internal server error", success: false });
  }
};
const login = async (req, res) => {
  try {
    const {email, password } =  req.body;
    const user = await UserModel.findOne({ email });
    // console.log('user',user)

    const errorMsg = "incorrect creditintiol"
    if (!user) {
      return res
        .status(403)
        .json({ msg: errorMsg, success: false });
    }
    const isPassUser = await bcrypt.compare(password,user.password)
    // console.log('isPassUser',isPassUser)
    if (!isPassUser) {
        return res
          .status(403)
          .json({ msg: errorMsg, success: false });
      }
      const jwtToken = jwt.sign(
        {email:user.email,id:user._id},
        process.env.JWT_TOKEN,
        {expiresIn:'24h'}
      )
    // console.log('jwtToken',jwtToken)

    res.status(200).json({msg:"signupSuccessful",success:true,jwtToken,email,name:user.name})
  } catch (err) {
    res
    .status(500)
    .json({ msg:"internal server error", success: false });
  }
};
module.exports = {
  signup,login
};
