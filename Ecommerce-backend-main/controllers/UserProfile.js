const User = require("../model/User");

const updateProfile = async (req, res) => {
    const { username, email, phoneNumber, description } = req.body;
    const profilePhoto = req.file ? req.file.filename : '';

  try {

    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    user.username = username;
    user.email = email;
    user.profilePhoto = profilePhoto;
    user.phoneNumber = phoneNumber;
    user.description = description;
    await user.save();
    res.json({ message: 'Profile updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile', error: error.message });
  }
};

const getUserProfile = async (req, res) => {
  try {

    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user profile', error: error.message });
  }
};

const uploadProfilePhoto = async (req, res) => {
  try {

    console.log(req.file);

    const profilePhoto = req.file ? req.file.filename : null;
    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    user.profilePhoto = profilePhoto;
    await user.save();

    res.json({ message: 'Profile photo uploaded successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading profile photo', error: error.message });
  }
};

module.exports = { updateProfile, getUserProfile ,uploadProfilePhoto};
