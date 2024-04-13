import { useEffect, useState } from 'react'

import FontProvider from 'components/FontProvider'
import Footer from 'components/Footer'
import MetaTags from 'components/MetaTags'
import Nav from 'components/Nav'
import { ThemeProvider, useTheme } from 'next-themes'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import React from 'react'
import LeftNav from './LeftNav'
import Aside from './Aside'

export const BubbleContext = React.createContext({
  showBubble: false,
  toggleBubble: () => {},
})

function ThemeWatcher() {
  let { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    let media = window.matchMedia('(prefers-color-scheme: dark)')

    function onMediaChange() {
      let systemTheme = media.matches ? 'dark' : 'light'
      if (resolvedTheme === systemTheme) {
        setTheme('system')
      }
    }

    onMediaChange()
    media.addEventListener('change', onMediaChange)

    return () => {
      media.removeEventListener('change', onMediaChange)
    }
  }, [resolvedTheme, setTheme])

  return null
}

const Layout = (props: {
  children?: React.ReactNode
  metaTagsProps?: React.ComponentProps<typeof MetaTags>
}) => {
  const [showBubble, setShowBubble] = useState(false)

  return (
    <BubbleContext.Provider
      value={{ showBubble, toggleBubble: () => setShowBubble(!showBubble) }}
    >
      <ThemeProvider attribute="class" defaultTheme="light">
        <FontProvider>
          <MetaTags {...(props.metaTagsProps ?? {})} />
          <ThemeWatcher />
          <div className="w-full pb-24 md:flex md:pb-0 xl:justify-center xl:gap-6">
            <LeftNav />
            <main className="flex w-full flex-col leading-none sm:gap-2 md:max-w-xl md:p-0 md:py-[2.5rem] lg:max-w-lg xl:max-w-xl">
              {props.children}
            </main>
            <Aside />
          </div>
          <SpeedInsights />
          <Analytics />
        </FontProvider>
      </ThemeProvider>
    </BubbleContext.Provider>
  )
}

export default Layout
