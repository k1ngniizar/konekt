import React from 'react'
import { BiSend } from 'react-icons/bi'

function MessageInput() {
  return (
    <form className='px-4 my-3 '>
      <div className='w-full relative'>
        <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white' placeholder='Type a message' />
        <button className='absolute inset-y-0 end-2 flex items-center pe-0 cursor-pointer'>
          <BiSend size={20}/>
        </button>
      </div>
    </form>
  )
}

export default MessageInput