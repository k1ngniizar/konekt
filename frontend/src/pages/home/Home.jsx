import MessageContainer from "../../components/messages/MessageContainer"
import Sidebar from "../../components/sidebar/Sidebar"

function Home() {
  return (
    <main className="flex sm:h-[450px] md:h-[550px] w-full sm:max-w-3xl rounded-lg overflow-hidden bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar/>
      <MessageContainer/>
    </main>
  )
}

export default Home