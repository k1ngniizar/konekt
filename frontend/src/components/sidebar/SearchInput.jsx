import React, { useState } from 'react'
import {IoSearchSharp} from "react-icons/io5"
import useGetConversations from '../../hooks/useGetConversations'
import useConversation from '../../zustand/useConversation'
import toast from 'react-hot-toast'

function SearchInput() {
  const [search, setSearch] = useState("")
  const {conversations} = useGetConversations()
  const {setSelectedConversation} = useConversation()

  const handleSearch = (e) => {
    e.preventDefault()
    if(!search) {
      return 
    }

    if(search.length < 3){
      return toast.error("Enter at least three characters")
    }

     const conversation = conversations.find(c => c.fullName.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

     if(conversation) {
      setSelectedConversation(conversation)
     } else {
      toast.error("No user found")
     }

    setSearch("")
  }

  return (
    <form onSubmit={handleSearch} className='flex items-center gap-2'>
      <input onChange={(e) => setSearch(e.currentTarget.value)} type="text" placeholder='Search...' className='input  rounded-full' />
      <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <IoSearchSharp className='outline-none w-6 h-6'/>
      </button>
    </form>
  )
}

export default SearchInput