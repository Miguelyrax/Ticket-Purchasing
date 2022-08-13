import { FC } from "react"

interface PROPS{
    selected?:boolean
}
export const CustomRadio:FC<PROPS> = ({selected}) => {
  return (
    <div 
    style={{
        marginRight:'15px',
        borderRadius:'100%',
        width:'17px',
        height:'17px',
        border:'1px solid #B2B2B3',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'}}>
        <div
        style={{
            borderRadius:'100%',
            width:'10px',
            height:'10px',
            backgroundColor:selected?'#395ACC':'transparent'
        }}>
        </div>
    </div>
  )
}
