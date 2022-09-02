import Image from "next/image"
import {BetllIcon, CashIcon, ChatIcon, ChevronDownIcon,HomeIcon,
    UserGroupIcon,ViewGridIcon,} from "@heroicons/react/solid"
import {FlagIcon, PlayIcon, SearchIcon,ShoppingCartIcon} from "@heroicons/react/outline"
// import { BeakerIcon, } from '@heroicons/react/24/solid'
import {useSession, signOut } from "next-auth/react"

function Header() {
  
  const { data: sessionData } = useSession()
  const myname =sessionData.user.name;
  const myimg = sessionData.user.image;
  return (
   <div className="sticky top-o z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
    
    <div className="flex items-center">
      <Image
        src="/cool.png"
        width={40}
        height={40}
        layout="fixed"
      />
      <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
        <SearchIcon className="h-5 group-hover:text-blue-500 text-center sm:h-7 mx-auto text-gray-600"/>
        <input type ="text"placeholder ="search on facebook" className=" hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"/>
        
      </div>

    </div>

    <div className="flex justify-center flex-grow">
      <div className="flex space-x-8  md:space-c-2">
        <div className=" flex items-center cursor-pointer md:px-10 sm:h-14  md:hover:bg-gray-100 rounded-xl active:border-b-2
         active:border-blue-500  group">
          <HomeIcon className="h-5 group-hover:text-blue-500 text-center sm:h-7 mx-auto "/>
        </div>
        <div className=" flex items-center cursor-pointer md:px-10 sm:h-14  md:hover:bg-gray-100 rounded-xl active:border-b-2
         active:border-blue-500  group">
          <FlagIcon className="h-5 group-hover:text-blue-500 text-center sm:h-7 mx-auto  "/>
        </div>
        <div className=" flex items-center cursor-pointer md:px-10 sm:h-14  md:hover:bg-gray-100 rounded-xl active:border-b-2
         active:border-blue-500  group">
         <PlayIcon className="h-5 group-hover:text-blue-500 text-center sm:h-7 mx-auto "/>
        </div>
        <div className=" flex items-center cursor-pointer md:px-10 sm:h-14  md:hover:bg-gray-100 rounded-xl active:border-b-2
         active:border-blue-500  group">
          <ShoppingCartIcon className="h-5 group-hover:text-blue-500 text-center sm:h-7 mx-auto "/>
        </div>
        <div className=" flex items-center cursor-pointer md:px-10 sm:h-14  md:hover:bg-gray-100 rounded-xl active:border-b-2
         active:border-blue-500  group">
          <UserGroupIcon className="h-5 group-hover:text-blue-500 text-center sm:h-7 mx-auto  "/>
        </div>
        
      </div>
    </div>
    <div className="flex items-center sm:space-x-7 justify-end">
        {/* Profile Pic */}
        <div className="flex items-center">
          <Image
            className="rounded-full  h-6 cursor-pointer"
            src={myimg}
            width={40}
            height={40}
            layout= "fixed"
          />
        </div>
        <p className="whitespace-nowrap font-semibold pr-3">{myname}</p>
        <ViewGridIcon className="icon"/>
        <ChatIcon className="icon"/>
        <ChevronDownIcon className="icon"/>
        {/* <CashIcon className="h-5 text-red-600"/> */}

      </div>
   </div>
  )
}

export default Header