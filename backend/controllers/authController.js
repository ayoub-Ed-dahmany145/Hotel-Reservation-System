const bcrypt = require("bcryptjs");
const { createUser, findUserByEmail } = require("../models/userModel");


// ================= REGISTER =================

const register = async (req, res) => {

    const { name, email, password } = req.body;

    const role = "user";

    try {

        const hashedPassword = await bcrypt.hash(password, 10);

        createUser(

            name,
            email,
            hashedPassword,
            role,

            (err, result) => {

                if (err) {

                    return res.status(500).json({
                        message: "Error creating user",
                        error: err
                    });

                }

                res.status(201).json({
                    message: "User registered successfully"
                });

            }

        );

    } catch (error) {

        res.status(500).json({
            message: "Server Error"
        });

    }

};



// ================= LOGIN =================

const login = (req, res) => {

    const { email, password } = req.body;

    findUserByEmail(email, async (err, result) => {

        if (err) {

            return res.status(500).json({
                message: "Server Error"
            });

        }

        if (result.length === 0) {

            return res.status(404).json({
                message: "User not found"
            });

        }

        const user = result[0];

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {

            return res.status(401).json({
                message: "Invalid password"
            });

        }

        res.status(200).json({

            message: "Login successful",

            user: {

                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role

            }

        });

    });

};


module.exports = {

    register,
    login

};