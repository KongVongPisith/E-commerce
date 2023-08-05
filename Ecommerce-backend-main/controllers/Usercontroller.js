const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

const register =  async (req, res) => {
  const { username, email, password,role,phoneNumber, description,profilePhoto  } = req.body;
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
      phoneNumber,
        description,
      profilePhoto,
    });
    await newUser.save();
    return res.json({ message: "User created successfully", newUser });
  } catch (err) {
    return res.status(500).json({ message: "Error creating user, Username or email already exist", error: err });
  }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: "Email not found"
            });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({
                message: "Passwords do not match"
            });
        }
        const token = jwt.sign({ userId: user._id, userEmail: user.email, role: user.role, profilePhoto: user.profilePhoto,phoneNumber: user.phoneNumber, description: user.description  }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "24h" });
        return res.json({
            message: "Login successful",
            username: user.username,
            email: user.email,
            role: user.role,
            profilePhoto: user.profilePhoto,
            phoneNumber: user.phoneNumber,
            description: user.description,
            token
        });
    } catch (err) {
        return res.status(500).json({
            message: "An error occurred while processing the login",
            error: err
        });
    }
};


const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: 'Error fetching users', message: error.message });
  }
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json({ message: 'User deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting user', error });
  }
};

module.exports = { register, login, getAllUsers,deleteUser };