import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

function Sidebar({isNavOpen, setIsNavOpen}) {
  return (
    <>
    {
      isNavOpen && (
        <section className='border-r border-slate-500 p-4 absolute top-0 bottom-0 left-0 sm:hidden z-20 bg-gray-900 flex flex-col'>
          <SearchInput setIsNavOpen={setIsNavOpen} />
          <div className='divider px-3'/>
          <Conversations setIsNavOpen={setIsNavOpen} />
          <LogoutButton />
        </section>
      )
    }
    <section className='relative border-r border-slate-500 p-4 hidden sm:flex flex-col'>
      <SearchInput />
      <div className='divider px-3'/>
      <Conversations />
      <LogoutButton />
    </section>
    </>
  )
}

export default Sidebar