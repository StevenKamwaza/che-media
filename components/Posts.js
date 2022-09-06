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
      <h1>Posts</h1>
      {posts.map(item => {
        return (
          <Post
            key={item.id}
            name ={item.name}
            message={item.message}
            image= {item.image}
          />
        )
        // /* Returning the data from the database. */
        // return (
        //   <div key={item.id}>
        //     <h2>name: {item.name}</h2>
        //     <h2>message: {item.message}</h2>

        //     <hr />
        //   </div>
        // );
      })}
    </div>
  )
}

export default Posts