const express = require('express');
const { register, loginUser, getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/auth.controller');
const router = express.Router();    
// Register User
router.post('/register', register);

// Login User
router.post('/login', loginUser);

// Get All Users
router.get('/users', getAllUsers);

// Get User by ID
router.get('/users/:id', getUserById);

// Update User
router.put('/users/:id', updateUser);

// Delete User
router.delete('/users/:id', deleteUser);

module.exports = router;
