import React from 'react'
import {useSession, } from "next-auth/react"
import {CheveronIcon, ShoppingBagIcon, UserGroupIcon} from "@heroicons/react/outline"
import {CalendarIcon, ClockIcon, DesktopComputerIcon, UsersIcon} from "@heroicons/react/solid"
import SideNavIcon from './SideNavIcon';

function SideNav() {
  
  const { data: session } = useSession()

  return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px}'>
      <SideNavIcon src= {session.user.image} title ={session.user.name}/>
      <SideNavIcon Icon ={UsersIcon} title ="Friends"/>
      <SideNavIcon Icon ={UserGroupIcon} title ="Groups"/>
      <SideNavIcon Icon ={ShoppingBagIcon} title ="MarketPlace"/>
    </div>
  )
}

export default SideNav