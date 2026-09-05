'use client'

import { avatarPlaceholderUrl, navItems } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Props {
  fullName: string,
  avatar: string,
  email: string
}

const Sidebar = ({ fullName, avatar, email }: Props) => {
  const pathname = usePathname()

  return (
    <aside className='sidebar'>
      <Link href="/">
        <Image src="/assets/icons/logo-full-brand.svg" alt="logo" width={160} height={50}  className="hidden h-auto lg:block" />
        <Image src="/assets/icons/logo-brand.svg" alt="logo" width={52} height={52} className="lg:hidden" />
      </Link>

      <nav className='sidebar-nav'>
        <ul className='flex flex-1 flex-col gap-6'>
          {
            navItems.map( ({ url, name, icon }) => (
              <Link key={name} className='lg:w-full' href={url}>
                <li className={ cn("sidebar-nav-item", pathname === url && "shad-active") }>
                  <Image className={ cn("nav-icon", pathname === url && "nav-icon-active") } src={icon} alt={name} width={24} height={24} />
                  <p className='hidden lg:block'>{name}</p>
                </li>
              </Link>
            ))
          }
        </ul>
      </nav>
      <Image className='w-full' src={'/assets/images/files-2.png'} alt={'logo'} width={506} height={418} />

      <div className='sidebar-user-info'>
        <Image className='sidebar-user-avatar' src={avatarPlaceholderUrl} alt={'Avatar'} width={44} height={44} />
        <div className='hidden lg:block'>
          <p className='subtitle-2 capitalize'>{ fullName }</p>
          <p className='caption'>{ email }</p>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar