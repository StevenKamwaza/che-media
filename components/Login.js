import Image from 'next/image'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

function Login() {
  const { data: session } = useSession()
  if (session) {}
  return (
    <div className='grid place-items-center justify-items-center pt-10'>
      <Image
        src="/cool.png"
        height={100}
        width={100}
        className="rounded-full h-10"
        objectFit="contain"
      />

      <button onClick={() => signIn()} className="p-10 mt-3 bg-gray-600 hover:bg-blue-500 rounded-3xl rounded-full-fill text-white text-center cursor-pointer">Sign in</button>
    </div>
  )
}

export default Login