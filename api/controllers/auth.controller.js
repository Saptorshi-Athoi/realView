import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js";

export const register = async (req, res) =>{
    const {username , email, password, avatar} = req.body
    // console.log(hashedPassword)
    // res.send("Hashed")
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                avatar
            } 
        })
        console.log(newUser)
        res.status(201).json({message: "User created successfully"})
    } catch (error) {
        res.status(500).json({message:error.message})
        console.log(error)
    }

}
export const login = (req, res) =>{
    res.send("login")
}
export const logout = (req, res) =>{
    res.send("logout")
}