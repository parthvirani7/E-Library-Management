const User = require('../models/user.model'); 
const jwt = require('jsonwebtoken');

// User Registration
exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = new User({ username, password });
        await newUser.save();

        console.log(`User Registered: ${newUser.username}`); // Log user registration
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error during registration:', error); // Log errors
        res.status(500).json({ message: 'Registration failed' });
    }
};

// Login User

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Create JWT token
        const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Set token in cookie
        res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' }); // Use secure cookies in production

        // Send response
        res.status(200).json({ message: 'Login successful', user: { id: user._id, username: user.username } });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

//get all user
exports.getAllUsers = async (req, res) => {
  try {
      const users = await User.find();
      res.status(200).json(users);
  } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ message: 'Failed to fetch users' });
  }
};

// Get User by ID
exports.getUserById = async (req, res) => {
  try {
      const user = await User.findById(req.params.id);
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
  } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ message: 'Failed to fetch user' });
  }
};

//update user

// Update User
exports.updateUser = async (req, res) => {
  try {
      const { username, password } = req.body;
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
          username,
          ...(password && { password }), // Update password only if provided
      }, { new: true });

      if (!updatedUser) {
          return res.status(404).json({ message: 'User not found' });
      }
      
      console.log(`User Updated: ${updatedUser.username}`);
      res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ message: 'Failed to update user' });
  }
};

//delete user
// Delete User
exports.deleteUser = async (req, res) => {
  try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      
      console.log(`User Deleted: ${user.username}`);
      res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Failed to delete user' });
  }
};
