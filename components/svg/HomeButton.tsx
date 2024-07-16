import React from 'react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import HatLogo from './HatLogo'

const HomeButton = () => {
  const avatarImgPath = '../../public/avatar-256.png'
  return (
    <Avatar>
      <HatLogo />
      {/* <AvatarImage src={avatarImgPath} /> */}
      <AvatarFallback>WD</AvatarFallback>
    </Avatar>
  )
}