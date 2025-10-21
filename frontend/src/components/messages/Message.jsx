import React from 'react'

function Message() {
  return (
    <article className='chat chat-end'>
      <div className='chat-image avatar'>
        <figure className='size-10 rounded-full overflow-hidden'>
          <img src={"/k2ng.jpg"} alt={"user avatar"} />
        </figure>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>Hi! What's up?</div>
      <div className='chat-footer text-xs flex gap-1 items-center text-gray-500'>12:42</div>
    </article>
  )
}

export default Message