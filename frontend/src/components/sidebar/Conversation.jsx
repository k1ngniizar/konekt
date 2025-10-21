import React from 'react'

function Conversation() {
  return (
    <>
    <section className='flex gap-2 items-center hover:bg-sky-500 rounded px-2 py-1 cursor-pointer'>
      <div className='avatar avatar-online'>
        <figure className='size-12 rounded-full overflow-hidden'>
          <img src="/k2ng.jpg" alt="user avatar" className='object-cover' />
        </figure>
      </div>
      <div className='flex flex-col flex-1'>
        <div className='flex gap-3 justify-between'>
          <p className='font-bold text-gray-300'>John Doe</p>
          <span className='text-xl'>😒</span>
        </div>
      </div>
    </section>

    <div className='divider my-0 py-0 h-1'/>
    </>
  )
}

export default Conversation