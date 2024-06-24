import User from '../models/User.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import createError from '../utils/createError.js'
export const getAuth = async (req,res,next)=>{
    res.send('akjg')
}

export const register = async (req,res,next)=>{
    try {
        const hash = bcrypt.hashSync(req.body.password, 5)
        const newUser = new User({
            ...req.body,
            password: hash
        })
        await newUser.save()
        res.status(201).send('user created')
    } catch (error) {
        createError(501,"something went wrong")
        next(error);
    }
}
export const login = async (req,res,next)=>{

    try {
        const user = await User.findOne({username: req.body.username})
        if (!user) return next(createError(404,"user not found"))
        const isPassCorrect = bcrypt.compareSync(req.body.password, user.password)
        if(!isPassCorrect) return next(createError(400,"wrong password"))

        //jwt config
        const token = jwt.sign({
            id: user._id,
            isSeller: user.isSeller
        },process.env.JWT_KEY)
        const {password, ...other} = user._doc

        //sending cookie to client's browser and storing
        res.cookie("accessToken", token,{
            httpOnly: true
        }).status(200).send(other)
        
    } catch (error) {
        next(err)
    }
}
export const logout = async (req,res)=>{
    res.clearCookie("accessToken",{
        sameSite: "none",
        secure: true
    }).status(200).send('User has been logged out')
}
        