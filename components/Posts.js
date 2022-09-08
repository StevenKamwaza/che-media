import React, { useEffect, useState } from 'react'
import { collection,query, getDocs,doc, getDoc  } from "firebase/firestore"; 
import { db } from "../database"
import Post from './Post';

function Posts() {
  const [dataa, setData] = useState([]);
  const [posts, setPost] = useState([])
  
  useEffect(()=>{
      async function fetchData() {
          const postRef = collection(db, `posts`);
          const snapsh = await getDocs(postRef);
          const docs = snapsh.docs.map(doc => {
            const data = doc.data();
            data.id = doc.id;
            return data
          })
          setPost(docs)
          console.log(docs)
        
        }
        fetchData();
  },[])

  return (
    <div>
      
      {posts.map(item => {
        return (
          <Post
            key={item.id}
            name ={item.name}
            message={item.message}
            image= {item.image}
          />
        )
      })}
    </div>
  )
}

export default Posts