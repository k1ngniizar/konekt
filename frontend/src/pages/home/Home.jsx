import { BiChat } from "react-icons/bi"
import MessageContainer from "../../components/messages/MessageContainer"
import Sidebar from "../../components/sidebar/Sidebar"
import { useState } from "react"

function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <main className="flex sm:h-[450px] h-full md:h-[550px] w-full sm:max-w-3xl sm:rounded-lg overflow-hidden bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      
        <BiChat 
        onClick={()=>setIsNavOpen(!isNavOpen)}
        className="size-6 absolute sm:hidden right-3 top-2 hover:cursor-pointer shadow-sm hover:text-gray-400 active:text-gray-700"
        />
      
      <Sidebar setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen}/>
      <MessageContainer/>
    </main>
  )
}

export default Home