import { FC } from "react"

interface PROPS{
    style?:React.CSSProperties,
    name:string,
    value?:any,
    placeholder?:string,
    type?:string,
    onChange?:React.ChangeEventHandler<HTMLInputElement>
}
export const TextField:FC<PROPS> = ({style,name,value,placeholder,onChange,type='text'}) => {
  return (
    <input
    minLength={4}
    type={type}
    min={type=='number'?0:''}
    max={type=='number'?100:''}
    required={true}
    onChange={onChange}
    style={{
        width:'70%',
        border: '1px solid rgb(209, 208, 208)',
        padding: '12px 16px 12px 16px',
        marginBottom:'8px',
        borderRadius: '4px',
        ...style,
    }}
    name={name} value={value} placeholder={placeholder} />
  )
}
