import { SVGProps } from 'react'

interface ICloseProps extends SVGProps<SVGSVGElement> {
  fill?: string
}

export const Remove = ({ fill = '#444', ...props }: ICloseProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 44 45'
      fill='none'
      {...props}
    >
      <path
        d='M39 11.5L17 33.5'
        stroke={fill}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17 11.5L39 33.5'
        stroke={fill}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
