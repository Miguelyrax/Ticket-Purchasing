import { FC } from 'react'
interface PROPS{
    style?:React.CSSProperties,
    children:React.ReactElement|string,
}
export const Paragraph:FC<PROPS> = ({style,children}) => {
  return (
    <div style={{...style,fontSize:'13px'}}>{children}</div>
  )
}
