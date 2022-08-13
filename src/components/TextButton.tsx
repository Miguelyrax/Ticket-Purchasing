import React, { FC } from 'react'
interface PROPS{
    style?:React.CSSProperties,
    children:React.ReactElement|React.ReactElement[]|string,
    type?:"button" | "submit" | "reset" | undefined,
    onClick?:()=>void
}
export const TextButton:FC<PROPS> = ({style,children,onClick,type}) => {
  return (
    <button type={type} onClick={onClick} style={
        {
            border:'none',
            cursor:'pointer',
            margin:'0px',
            padding:'0px',
            backgroundColor:'transparent',
            color:'#395ACC',
            // display:'flex',
            fontWeight:'600',
            ...style,
        }}>
    {children}</button>
  )
}
