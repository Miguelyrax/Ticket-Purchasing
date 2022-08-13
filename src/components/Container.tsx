import React, { FC } from 'react'

interface PROPS{
    style?:React.CSSProperties,
    children:React.ReactElement[]|React.ReactElement,
}

export const Container:FC<PROPS> = ({children,style}) => {
  return (
    <div style={{
        margin: '20px 20px',
        ...style
    }}>
    {children}</div>
  )
}
