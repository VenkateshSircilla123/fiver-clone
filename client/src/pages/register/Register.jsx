import React, { useState } from "react";
import upload from "../../utils/upload.js";
import "./Register.scss";
import newRequest from "../../utils/newRequest.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user,setUser]= useState({
    username:'',
    email:"",
    password:"",
    img:"",
    country:"",
    isSeller: false,
    desc: ""
  })
  const [file,setFile]= useState(null)

  const navigate = useNavigate()

  const handlechange = (e)=>{
    e.preventDefault()
    setUser(prev=>{
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const url = await upload(file)
    try {
      await newRequest.post('/auth/register', {
        ...user,
        img: url
      })
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  const handleSeller = (e)=>{
    e.preventDefault()
    setUser((prev)=>{
      return {
        ...prev,
        isSeller: e.target.checked
      }
    })
  }

  // console.log(user)
  
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="">Username</label>
          <input
            name="username"
            type="text"
            placeholder="johndoe"
            onChange={handlechange}
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={handlechange}
          />
          <label htmlFor="">Password</label>
          <input name="password" type="password"  onChange={handlechange}/>
          <label htmlFor="">Profile Picture</label>
          <input type="file"  onChange={(e)=>setFile(e.target.files[0])}/>
          <label htmlFor="">Country</label>
          <input
            name="country"
            type="text"
            placeholder="Usa"
            onChange={handlechange}
          />
          <button type="submit">Register</button>
        </div>
        <div className="right">
          <h1>I want to become a seller</h1>
          <div className="toggle">
            <label htmlFor="">Activate the seller account</label>
            <label className="switch">
              <input type="checkbox" onChange={handleSeller}/>
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="">Phone Number</label>
          <input
            name="phone"
            type="text"
            placeholder="+1 234 567 89"
            onChange={handlechange}
          />
          <label htmlFor="">Description</label>
          <textarea
            placeholder="A short description of yourself"
            name="desc"
            id=""
            cols="30"
            rows="10"
            onChange={handlechange}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default Register;