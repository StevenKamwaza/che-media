import { useRef, useState} from "react"
import {useSession } from "next-auth/react"
import Image from "next/image"
import { EmojiHappyIcon} from "@heroicons/react/outline"
import { VideoCameraIcon, CameraIcon} from "@heroicons/react/solid"
import { db, storage } from "../database"
import { collection, addDoc,serverTimestamp } from "firebase/firestore"; 
import { async } from "@firebase/util"
import {ref, uploadBytes } from "firebase/storage";
// import { updateDoc, serverTimestamp } from "firebase/firestore";

function DataEntry() {
  const { data: session} = useSession()
  const inputt = useRef(null)
  const filePicker = useRef(null)
  const [postImage, setPostImage] = useState(null)

  const subBtn =(e)=>{
    e.preventDefault();
    if(!inputt.current.value){
      return
    } 

    try{
      const docRef =  addDoc(collection(db, "posts"), {
        message: inputt.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        // timestamp:serverTimestamp()
        // born: 1912
      });
      // if (postImage){
      //   const storageRef = ref(storage, postImage);
      //   uploadBytes(storageRef, file).then((snapshot) => {
      //     console.log('Uploaded to storage!');
      //   });
      // }
      inputt.current.value= "";
      
    }
    catch (e){
      // console.error("Error in sending docu: ", e);
    }
  }

  const addImage =(e)=>{
    //reading file
    const read = new FileReader();
    if(e.target.files[0]){
      read.readAsDataURL(e.target.files[0]);
    }
    read.onload =(readevent) =>{ 
      setPostImage(readevent.target.result);
    }
  }
  const removeImg=()=>{
    setPostImage(null)
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
        {postImage && (
          <div onClick={removeImg} className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
            <img src={postImage} alt=""  className="h-10 object-contain"/>
          </div>
        )}
        </form>
      </div>
      <div className=" flex justify-evenly p-3 border-1"> 
        <div  className="flex item-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 text-gray-800 cursor-pointer">
          <VideoCameraIcon className="h-7 text-red-500"/>
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div >
        <div onClick={() => {
           return filePicker.current.click()
        }} 
        className="flex item-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 text-gray-800 cursor-pointer">
          <CameraIcon className="h-7 text-green-400"/>
          <p className="text-xs sm:text-sm xl:text-base">Photo Video</p>
          <input ref={filePicker} hidden onChange={addImage} type ="file"/>
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