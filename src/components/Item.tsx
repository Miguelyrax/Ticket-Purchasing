import React, { FC } from 'react'

interface PROPS{
    style?:React.CSSProperties,
    children:React.ReactElement[],
}

export const Item:FC<PROPS> = ({children,style}) => {
  return (
    <div style={{
        border: '1px solid rgb(209, 208, 208)',
        padding: '24px',
        borderRadius: '4px',
        ...style
    }}>
    {children}</div>
  )
}
