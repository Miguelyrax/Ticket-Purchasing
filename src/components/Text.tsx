import { FC } from 'react'
interface PROPS{
    style?:React.CSSProperties,
    type?:'h1'|'h2'|'h3'|'h4'|'h5',
    children:React.ReactElement|string,
}
export const Text:FC<PROPS> = ({style,type,children}) => {
  const sizeText=()=>{
    switch (type) {
      case 'h1':
        return '32px'
      case 'h2':
        return '28px'
      case 'h3':
        return '20px'
      case 'h4':
        return '16px'
      case 'h5':
        return '13px'
      default:
        break;
    }
  }
  return (
    <div 
    style={{
      fontSize:sizeText(),
      fontWeight:type!==undefined?'600':'',
      ...style}}>
      {children}
    </div>
  )
}