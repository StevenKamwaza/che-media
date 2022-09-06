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
          <Image src="/stela.png" objectFit="cover" layout="fill"/>
        </div>
      {/* )} */}
    </div>
  )
}

export default Post