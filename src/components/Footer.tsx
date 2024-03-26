import moment from 'moment'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { cn } from 'utils/tw'

const Footer = () => {
  const [date, setDate] = useState('string' || undefined)

  useEffect(() => {
    setDate(moment().format('dddd, MMMM D'))
  }, [])

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })

  return (
    <footer
      className="text-shark-500 dark:text-white-300 flex w-full items-center justify-center px-6 pb-12 pt-40 sm:px-10"
      ref={ref}
    >
      <div
        className={cn('fade flex w-full max-w-lg items-center justify-center', {
          'animate-fade': inView && date !== undefined,
        })}
      >
        <p>{date}</p>
      </div>
    </footer>
  )
}

export default Footer
