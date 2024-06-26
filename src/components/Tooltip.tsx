import { cn } from 'utils/tw'

const Tooltip = (props: {
  position?: 'top' | 'right'
  state?: boolean
  text: string
}) => {
  return (
    <div
      className={cn(
        'pointer-events-none absolute hidden w-max rounded-lg bg-shark-950 px-2.5 py-1 text-sm font-semibold text-white-200 opacity-0 shadow-lg ring-1 ring-shark-800 transition dark:bg-white-50 dark:text-shark-800 dark:ring-0 sm:flex sm:group-hover/tooltip:opacity-100',
        {
          '-top-8 left-1/2 z-50 origin-bottom -translate-x-1/2 translate-y-2 sm:group-hover/tooltip:-translate-y-0':
            props.position === 'top' || !props.position,

          'left-full top-1/2 origin-left -translate-y-2/3 translate-x-0 sm:group-hover/tooltip:translate-x-2':
            props.position === 'right',

          hidden: props.state,
        },
      )}
    >
      {props.text}
    </div>
  )
}

export default Tooltip
