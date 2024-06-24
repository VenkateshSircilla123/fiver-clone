import User from '../models/User.model.js'
// import jwt from 'jsonwebtoken'
// import createError from '../utils/createError.js'
export const getUsers = async (req,res)=>{
    try {
        res.send('jkjkjkjkj')
    } catch (error) {
        res.status(501).send('something went wrong!')
    }
}

export const getUser = async (req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        res.status(200).send(user)
    } catch (error) {
        res.status(501).send('something went wrong!')

    }
}

export const deleteUser = async (req,res,next)=>{
    try {
        const user = await User.findById(req.params.id)
        if(req.userId !== user._id.toString()){
        return next(createError(403,"you can delete only your account"))
        }
        await User.findByIdAndDelete(req.params.id)
        res.status(200).send('user deleted')

    } catch (error) {
        next(error)
    }
}