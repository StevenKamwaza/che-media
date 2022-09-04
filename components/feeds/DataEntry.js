import { useRef} from "react"
import {useSession } from "next-auth/react"
import Image from "next/image"
import { EmojiHappyIcon} from "@heroicons/react/outline"
import { VideoCameraIcon, CameraIcon} from "@heroicons/react/solid"

function DataEntry() {
  const { data: session} = useSession()
  const inputt = useRef(null)

  const subBtn =(e)=>{
    e.preventDefault();
    if(!inputt.current.value){
      return
    }
  }
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500
     font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12  bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            ref={inputt}
            placeholder={`What's on your brain, ${session.user.name} ?`}/>
        <button hidden type="submit" onClick={subBtn}>Submit</button>
        </form>
      </div>
      <div className=" flex justify-evenly p-3 border-1">
        <div  className="flex item-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 text-gray-800 cursor-pointer">
          <VideoCameraIcon className="h-7 text-red-500"/>
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div >
        <div className="flex item-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 text-gray-800 cursor-pointer">
          <CameraIcon className="h-7 text-green-400"/>
          <p className="text-xs sm:text-sm xl:text-base">Photo Video</p>
        </div>
        <div className="flex item-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 text-gray-800 cursor-pointer">
          <EmojiHappyIcon className="h-7 text-yellow-300"/>
          <p className="text-xs sm:text-sm xl:text-base">Mafeel Activity</p>
        </div>
      </div>
    </div>
  )
}

export default DataEntry