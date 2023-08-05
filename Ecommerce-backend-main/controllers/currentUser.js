const User = require("../model/User");
const current_user = async (req, res) => {
  try {
    const user = await User.findById(req.user._id); 
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      profilePhoto: user.profilePhoto,
      phoneNumber: user.phoneNumber,
      description: user.description,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
}

module.exports = current_user;