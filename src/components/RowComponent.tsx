import { FC } from 'react'
import { Row } from './Row'
interface PROPS{
    style?:React.CSSProperties,
    textLeft:string,
    textRight:string,
}
export const RowComponent:FC<PROPS> = ({textLeft,textRight,style}) => {
  return (
    <Row style={{...style}} between={true}>
        <div className='text'>{textLeft}</div>
        <div className='text'>{textRight}</div>
    </Row>
  )
}
