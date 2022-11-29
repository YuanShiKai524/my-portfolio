import React from 'react'

interface Props {
  href: string
  children: React.ReactElement | null | string
}

const MyATag = (props: Props) => {

  return (
    <a rel="noopener noreferrer" target='_blank' {...props}>{props.children}</a>
  )
}

export default MyATag
