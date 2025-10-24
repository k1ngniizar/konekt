import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

export const useSignup = () => {
  const [loading, setLoading] = useState(false)
  const {setAuthUser} = useAuthContext()

  const signup =  async ({fullName, username, password, confirmPassword, gender}) => {

    setLoading(true)
    const success = handleInputErrors(fullName,username, password,confirmPassword, gender)
    if(!success) {
      setLoading(false)
      return
    };

    try {
      const res = await fetch("/api/auth/signup", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender
        })
      })

      const data = await res.json()

      if(data.error){
        throw new Error(data.error)
      }

      localStorage.setItem("chat-user", JSON.stringify(data))

      setAuthUser(data)
      console.log(data)

    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }

  }

  return {loading, signup}
}

const handleInputErrors = (fullName,username, password,confirmPassword, gender)=>{

  if(!fullName || !username || !password || !confirmPassword || !gender){
    toast.error("All fields are required!")
    return false
  }

  // console.log(password, confirmPassword)
  if(password !== confirmPassword){
    toast.error("Passwords don't macth")
    return false
  }

  if(password.length < 6){
    toast.error("Password must be longer than 6 characters")
    return false
  }

  return true
}

export default useSignup