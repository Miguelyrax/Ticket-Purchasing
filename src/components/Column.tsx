import React, { FC } from 'react'

interface PROPS{
    style?:React.CSSProperties,
    children:React.ReactElement[]|React.ReactElement,
}

export const Column:FC<PROPS> = ({children,style}) => {
  return (
    <div style={{...style,display:'flex',flexDirection:'column'}}>
        {children}
    </div>
  )
}
