import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Login from '../components/Login'
import {getSession, useSession, signOut } from "next-auth/react"
import SideNav from '../components/SideNav'
import MediaFeed from '../components/MediaFeed'

export default function Home({session}) {
  const { data: sessionData } = useSession()
  if(!sessionData){
    return <Login/>;
  }
  else{
    // console.log(sessionData)
    
    return (
      <div className="container">
        <Head>
          <title>Che Media</title>
          <meta name="description" content="developed by steven kamwaza" />
          
        </Head> 
        {/* Header */}
        <Header/> 
        <main className='flex bg-gray-200'>

          <SideNav className="bg-white"/>
          <MediaFeed/>
          {/* <button className='btn bg-blue-600 text-white roundend-full' onClick={() => signOut()}>Sign out</button> */}
        </main>
        
      </div>
    )
  }
  
}

export async function getServerSideProps(context){
  //get the user
  const session = await getSession(context);
  return{
    props:{
      session
    }
  }
}
