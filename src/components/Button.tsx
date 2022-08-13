import { FC } from "react"

interface PROPS{
    style?:React.CSSProperties,
    children:React.ReactElement|string,
    onClick?:()=>void,
    disable?:boolean,
    type?:"button" | "submit" | "reset" | undefined,
}
export const Button:FC<PROPS> = ({style,children,onClick,type,disable=false}) => {
  return (
    <button 
    disabled={disable}
    type={type}
    onClick={onClick}
    style={{width:'100%',cursor: 'pointer',
    padding: '15px 0px',
    backgroundColor: '#467E32',
    border: 'none',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '4px',
    transitionDuration: '.3s',...style}} >
    {children}</button>
  )
}
