import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'

const HomeButton = () => {
  const avatarImgPath = 'img/avatar-256.png'
  return (
    <Avatar>
      <Link href='/'>
        <AvatarImage src={avatarImgPath} />
        <AvatarFallback>WD</AvatarFallback>
      </Link>
    </Avatar>
  )
}

export default HomeButton