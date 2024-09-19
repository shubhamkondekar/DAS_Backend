const userModel = require("../modals/userModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }

    const exisitingUser = await userModel.findOne({ email: email });
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "User already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(500).send({
        success: false,
        message: "User not found",
      });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(200).send({
        success: false,
        message: `Invalid Email or Password`,
      });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRETE, {
      expiresIn: "1d",
    });
    res.status(200).send({
      success: true,
      message: "Login Success",
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: `Error In Login API ${error.message}`,
    });
  }
};

const authController = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    if (!user) {
      return res.status(200).send({
        message: `user not found`,
        success: false,
      });
    } else {
      res.status(200).send({
        success: true,
        data: {
          name: user.name,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: `Auth Error  `,
      success: false,
      error,
    });
  }
};

module.exports = { loginController, registerController, authController };
