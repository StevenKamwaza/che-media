import Image from "next/image"

function Post({name, message, id, image}){
  return(
    <div className="flex flex-col">
      <div className="p-2 bg-white mt-5 rounded-t-2xl shadow-xl ">
        <div className="flex items-center space-x-2">
          <img src={image} className="rounded-full" width={40} height={40} alt= ""/>
          <div>
            <p className="font-large">{name}</p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {/* { postImage &&( */}
        <div className="relative h-56 md: h-96 bg-white"> 
          <Image src="/stela.jpg" objectFit="cover" layout="fill"/>
        </div>
      {/* )} */}
      <div>
      <div className=" flex justify-evenly p-3 border-1 bg-white rounded"> 
        <div  className="flex item-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 text-gray-800 cursor-pointer">
          {/* <VideoCameraIcon className="h-7 text-red-500"/> */}
          <p className="text-xs sm:text-sm xl:text-base">Like</p>
        </div >
        <div className="flex item-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 text-gray-800 cursor-pointer">
          {/* <CameraIcon className="h-7 text-green-400"/> */}
          <p className="text-xs sm:text-sm xl:text-base">Comment</p>
          
        </div>
        <div className="flex item-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 text-gray-800 cursor-pointer">
          {/* <EmojiHappyIcon className="h-7 text-yellow-300"/> */}
          <p className="text-xs sm:text-sm xl:text-base">Share</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Post