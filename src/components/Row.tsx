import React, { FC } from 'react'

interface PROPS{
    style?:React.CSSProperties,
    children:React.ReactElement[]|React.ReactElement,
    between?:boolean,
    alignStart?:boolean,
    alignCenter?:boolean,
}

export const Row:FC<PROPS> = ({children,between=false,style,alignStart,alignCenter}) => {
  return (
    <div
    style={{
      display:'flex',
      justifyContent:between?'space-between':'start',
      alignItems:'center',
      alignContent:'center',
      ...style,
    }}>
        {children}
    </div>
  )
}
