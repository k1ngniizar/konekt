import React, { useState } from 'react'
import { BiSend } from 'react-icons/bi'
import useSendMessage from '../../hooks/useSendMessage'
import { FaSpinner } from 'react-icons/fa6'

function MessageInput() {
  const {loading, sendMessage} = useSendMessage()
  const [message, setMessage] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!message) return
    await sendMessage(message)
    setMessage("")
  }
  return (
    <form onSubmit={handleSubmit} className='px-4 my-3 '>
      <div className='w-full relative'>
        <input onChange={(e)=> setMessage(e.currentTarget.value)} value={message} autoComplete="off" name='message' type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white' placeholder='Type a message' />
        <button className='absolute inset-y-0 end-2 flex items-center pe-0 cursor-pointer'>
          {loading ? <FaSpinner className='animate-spin'/> : <BiSend size={20}/>}
        </button>
      </div>
    </form>
  )
}

export default MessageInput