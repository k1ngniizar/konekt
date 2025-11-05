import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import useConversation from '../../zustand/useConversation'
import { useAuthContext } from '../../context/AuthContext'
import { BiChat } from 'react-icons/bi'

function MessageContainer({setIsNavOpen}) {
  const {selectedConversation, setSelectedConversation} = useConversation()
  const {authUser} = useAuthContext()
  const noChatSelected = selectedConversation? false : true;
  useEffect(()=>{
    return ()=>{
      setSelectedConversation(null)
    }
  },[setSelectedConversation])

  return (
    <>
    {
      noChatSelected ? (
        <section className='md:min-w-[450px] flex flex-col flex-1'>
          <NoChatSelected user={authUser} setIsNavOpen={setIsNavOpen} />
        </section>
      ) : (
        <section className='md:min-w-[450px] flex flex-col flex-1'>
      {/* header */}
      <header className='bg-slate-500 px-4 py-2 mb-2'>
        <span className='text-gray-900 font-bold'>
          {selectedConversation.fullName}
        </span>
      </header>
      {/* messages */}
      <Messages/>
      {/* message input */}
      <MessageInput/>
    </section>
      )
    }
    </>
  )
}


function NoChatSelected({user, setIsNavOpen}) {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 {user.username}</p>
        <div onClick={()=>setIsNavOpen(true)}  className='flex items-center justify-center flex-col'>
          <p>Click here to select a chat</p>
          <BiChat className="text-3xl md:text-6xl text-center" />
        </div>
      </div>
    </div>
  )
}

export default MessageContainer