import Image from 'next/image'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

function Login() {
  const { data: session } = useSession()
  if (session) {}
  return (
    <div className='grid place-items-center'>
      <Image
        src="/cool.png"
        height={100}
        width={100}
        objectFit="contain"
      />
      <button onClick={() => signIn()} className="p-5 bg-blue-500 rounded-fill text-white text-center cursor-pointer">Sign in</button>
     
    </div>
  )
}

export default Login