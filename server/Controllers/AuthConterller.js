const bcrypt = require('bcrypt');
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
module.exports = {
  signup,
};
