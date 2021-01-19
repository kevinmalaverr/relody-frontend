import React from 'react'

const Picture = ({ phone, tablet, desktop, imgProps }) => {
  return (
    <picture>
      {desktop && <source srcSet={desktop} media='(min-width:1000px)' />}
      {tablet && <source srcSet={tablet} media='(min-width:768px)' />}
      <img {...imgProps} src={phone || tablet || desktop} />
    </picture>
  )
}

export default Picture
