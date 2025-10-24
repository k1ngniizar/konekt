import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import { FaSpinner } from 'react-icons/fa6'
import { TiMessages } from 'react-icons/ti'
import { useEffect, useRef } from 'react'
import useListenMessages from '../../hooks/useListenMessages'

function Messages() {
  // const {messages} = useConversation()
  const {loading, messages} = useGetMessages()
  useListenMessages()
  const lastMessageRef = useRef()

  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({
        behavior: "smooth"
      })
    }, 100)
  }, [messages])

  // console.log(messages)

  if(loading){
    return (
       <section className='px-4 flex-1 overflow-auto flex items-center justify-center'>
        <FaSpinner className='animate-spin size-10'/>
    </section>
    )
  }

  if(!loading && messages.length === 0){
    return (
       <section className='px-4 flex-1 overflow-auto flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-gray-400 font-bold'>Please send a message to start a conversation!</p>
        <TiMessages className="text-3xl md:text-6xl text-gray-400 text-center" />
        </div>
    </section>
    )
  }

  return (
    <section className='px-4 flex-1 overflow-auto'>
      {
        messages.map((message) => {
        return (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message}/>
          </div>
        )
        })  
      }
    </section>
  )
}

export default Messages