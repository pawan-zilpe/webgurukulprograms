const jwt = require("jsonwebtoken");
const User = require("../models/user");
// register user
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    // create token
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    const response = {
      message: "Login successful",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        city: user.city,
      },
      token,
    };
    res.status(200).json(response);
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = { registerUser, loginUser };
