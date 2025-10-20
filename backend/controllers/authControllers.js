import bcrypt from "bcryptjs"
import User from "../models/userModel.js"
import genTokenSetCookie from "../utils/generateToken.js"


const login = async (req,res) => {
  try {
    const {username, password} = req.body
    const user = await User.findOne({username})
    const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")

    if(!user || !isPasswordCorrect) {
      return res.status(400).json({
        error: "Invalid username or password"
      })
    }

    genTokenSetCookie(user._id, res)

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic
    })

  } catch (error) {
    console.log("Error logging in:: ", error.message)
    res.status(500).json({
      error: "Internal server error!"
    })
  }
}

const signin = async (req,res) => {
  try {
    const {fullName, username, password, confirmPassword, gender} = req.body

    // CHECK IF PASSWORD MATCH
    if(password !== confirmPassword) {
      return res.status(400).json({
        error: "Password don't match"
      })
    }
    
    // CHECK IF USER ALREADY EXISTS
    const user = await User.findOne({username})

    if(user){
      return res.status(400).json({
        error: "Username already exists"
      })
    }
    
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    
    // https://avatar-placeholder.iran.liara.run/
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic : gender === "male" ? boyProfilePic : girlProfilePic 
    })
    
    
    if(newUser){
      genTokenSetCookie(newUser._id, res)
      
      await newUser.save()

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic
      })
    } else {
      res.status(400).json({
        error: "Invalud user data!"
      })
    }
  } catch (error) {
    console.log("Error creating user:: ", error.message)
    res.status(500).json({
      error: "Internal server error!"
    })
  }
}

const logout = (req,res) => {
try {
  res.cookie("jwt", "", {
    maxAge: 0
  })

  res.status(200).json({
    message: "Logged out successfully!"
  })
  
} catch (error) {
  console.log("Error logging out:: ", error.message)
    res.status(500).json({
      error: "Internal server error!"
    })
}
}

export {
  login, logout, signin
}