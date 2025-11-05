import React from 'react'
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';
import { BiChat } from 'react-icons/bi';

function Conversation({conversations, setIsNavOpen}) {
  const {selectedConversation, setSelectedConversation} = useConversation()
  const {onlineUsers} = useSocketContext();

  

  return (
    <>
    {
      conversations.map((conversation, index) => {
        const isLastIdx = index === conversations.length - 1;
        const isSelected = selectedConversation?._id === conversation._id;
        const isOnline = onlineUsers.includes(conversation._id)
        return (
          <section key={conversation._id} className='w-full'>
          <button onClick={()=>{
             setSelectedConversation(conversation)
             if(setIsNavOpen){
              setIsNavOpen(false)
             }
          }}  className={`flex gap-2 items-center  rounded w-full px-2 py-1 transition-all cursor-pointer ${isSelected ? "bg-sky-600 ":"hover:bg-sky-900"}`}>
            <div className={`avatar ${isOnline? "avatar-online":"avatar-offline"}`}>
              <figure className='size-12 rounded-full overflow-hidden'>
                <img src={conversation.profilePic} alt="user avatar" className='object-cover' />
              </figure>
            </div>
            <div className='flex flex-col flex-1'>
              <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-300'>{conversation.fullName.split(" ")[0]}</p>
                <BiChat className={` ${isOnline? "text-sky-300":"text-gray-600"}`}/>
              </div>
            </div>
          </button>

          {
            isLastIdx ? null : <div className='w-full divider my-0 py-0 h-1'/>
          }
          </section>
        )
      })
    }
    </>
  )
}

export default Conversation