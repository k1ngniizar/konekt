import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'
import { FaSpinner } from 'react-icons/fa6'

function Conversations({setIsNavOpen}) {
  const {loading, conversations} = useGetConversations()

  // console.log(conversations)

  return (
    <div className='py-2 flex flex-col overflow-auto '>
      {
        loading ? (
          <div className='min-h-[400px] my-auto w-full items-center justify-center flex'>
            <FaSpinner className=' size-10 animate-spin' />
          </div>
        ) :
      <Conversation conversations={conversations} setIsNavOpen={setIsNavOpen}/>
      }
    </div>
  )
}

export default Conversations