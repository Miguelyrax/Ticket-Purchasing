import React, { FC } from 'react'
interface PROPS{
    style?:React.CSSProperties,
    height:number,
}
export const SizedBox:FC<PROPS> = ({style,height}) => {
  return (
    <div style={{...style,height}}></div>
  )
}
