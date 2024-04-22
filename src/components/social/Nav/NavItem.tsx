import { ReactNode } from 'react'

type Props = {
  active?: boolean
  link?: string
  children: ReactNode
  onClick?: () => void
  isDisabled?: boolean
  badge?: {
    active: boolean
    content: React.ReactNode
  }
}

import React from 'react'
//import { InfoBadge } from './Notification'
import { cn } from 'utils/tw'
import Link from 'next/link'
import Button from 'components/Button'

const NavItem = ({ active = false, link, children, onClick, badge }: Props) => {
  return (
    <Link
      tabIndex={-1}
      onClick={onClick}
      className={
        'group flex flex-1 cursor-pointer items-center justify-center lg:w-full xl:justify-between'
      }
      href={link || '#'}
    >
      <li>
        <Button
          hasIcon
          //  rounded={'xl'}
          iconPosition="left"
          variant={`${active ? 'primary' : 'ghost'}`}
          className={`h-12 max-xl:p-3 lg:group-hover:translate-x-2 ${active ? 'lg:group-hover:bg-default-800' : 'lg:group-hover:bg-default-900/5'}`}
        >
          {children}
        </Button>
      </li>

      {/* {badge && badge.active && <InfoBadge children={badge.content} />} */}
    </Link>
  )
}

export default NavItem
