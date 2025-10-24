import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'
import { formatDate } from '../../../utils/formatDate'

function Message({message}) {
  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()
  const sentBy = message.senderId === authUser._id;
  return (
    <article
     className={`${sentBy ? "chat-end" : "chat-start"} chat`}>
      <div className='chat-image avatar'>
        <figure className='size-10 rounded-full overflow-hidden'>
          <img src={sentBy ? authUser.profilePic : selectedConversation.profilePic} alt={"user avatar"} />
        </figure>
      </div>
      <div className={`${sentBy ? "bg-blue-500" : "bg-blue-900"}  chat-bubble text-white `}>{message.message}</div>
      <div className='chat-footer text-xs flex gap-1 items-center text-gray-500'>{formatDate(message.createdAt)}</div>
    </article>
  )
}

export default Message