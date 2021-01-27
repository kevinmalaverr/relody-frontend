import * as React from 'react'

function SvgComponent () {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 16 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 11h14M1 6h14M1 1h14'
        strokeWidth={2}
        strokeLinecap='round'
      />
    </svg>
  )
}

export default SvgComponent
