const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

// - User registration controller
// - Post /api/auth/register
async function userRegisterController(req, res) {
    const { email, name, password } = req.body;

    try {
        const isExistingUser = await userModel.findOne({
            email: email.toLowerCase(),
        });
    
        if (isExistingUser) {
            return res.status(422).json({
                message: "User already exists with this email",
                status: "failed"
            })
        }
        
        const user = await userModel.create({
            email, name, password
        })
        
        const token = jwt.sign({ userId:user._id }, process.env.JWT_SECRET,
            { expiresIn: "3d" }
        )

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
            status: "failed"
        })
    }

}

module.exports = { userRegisterController }