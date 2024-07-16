import React from 'react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const HomeButton = () => {
  const avatarImgPath = '../../public/avatar-256.png'
  return (
    <Avatar>
      <AvatarImage src={avatarImgPath} />
      <AvatarFallback>WD</AvatarFallback>
    </Avatar>
  )
}