import React, { ChangeEvent, FC, useContext, useState } from 'react'
import { Column, Row, TextField,Text, TextButton,Visa } from '.'
import { CreditCardInterface } from '../interfaces/credit-card.interface'
import { SizedBox } from './SizedBox';
import { CustomRadio } from './CustomRadio';
import { TicketContext } from '../context/TicketContext';
import { CardExample } from './CardExample';
import { CardIcons } from '../icons/CardIcons';
interface PROPS{
    style?:React.CSSProperties,
    select?:boolean,
    values:CreditCardInterface
}

export const CreditCard:FC<PROPS> = ({style,select=false,values}) => {
  const {deleteCard,edit:editCard}=useContext(TicketContext);
  const [form, setForm] = useState<CreditCardInterface>(values);
  const [edit, setEdit] = useState<boolean>(false);
  const {username,month,cvv,title,number,id}=form;
  const onChange=(e:ChangeEvent<HTMLInputElement>)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }
  const onSave=()=>{
    editCard(values)
    setEdit(false);
    console.log(month)
  }
  return (
    <div 
    style={{
        backgroundColor:select?'#F1F5FB':'#F7F8F8',
        borderRadius:'4px',
        marginBottom:'16px',
        padding: '24px',
        border: '1px solid rgb(209, 208, 208)',
        ...style
    }}>
        <Column>
            {
              edit
              ?<>
                <TextField name='username' placeholder='Nombre y apellido' value={username} onChange={onChange}/>
                <TextField name='title' placeholder='Nombre de la tarjeta' value={title} onChange={onChange}/>
                <TextField type='month' name='month' placeholder='Mes de expiración' value={month} onChange={onChange}/>
                <TextField type='number' name='cvv' placeholder='CVV' value={cvv} onChange={onChange}/>
                <TextField type='number' name='number' placeholder='Número de tarjeta' value={number} onChange={onChange}/>
                <Row>
                    <TextButton style={{marginRight:'5px',color:'green'}} onClick={onSave}>
                        Save
                    </TextButton>
                    <TextButton style={{color:'red'}}  onClick={()=>{setEdit(!edit)}}>
                        Cancel
                    </TextButton>
                </Row>
              </>
              :<><Row>
              <Row alignStart={true}>
                <CustomRadio selected={select} />
                <Visa/>
                <Column>
                  <Text type='h5'>
                    <div>
                      {title} - ***{number.toString().substring(number.toString().length-3)}
                    </div>
                  </Text>
                  <SizedBox height={2}/>
                  <Text style={{fontSize:'12px',color:'#787878'}}>
                    <div>
                      {username} | exp. {month.split('-')[1]}/{month.split('-')[0]} 
                    </div>
                  </Text>
                  <SizedBox height={2}/>
                  <Row>
                    <TextButton onClick={()=>setEdit(!edit)} style={{fontSize:'12px', marginRight:'4px'}}>
                      Edit
                    </TextButton>
                    <Text style={{fontSize:'12px',color:'#787878'}}>
                      <div>
                        | 
                      </div>
                    </Text>
                    <TextButton onClick={()=>deleteCard(id??'')} style={{fontSize:'12px', marginLeft:'4px'}}>
                      Delete
                    </TextButton>
                  </Row>
                </Column>
                </Row>
            </Row>
            <SizedBox height={15}/>
            <Text type='h5' style={{fontWeight:'400'}}>Security Code</Text>
            <SizedBox height={8}/>
            <Row>
              <TextField type='password' style={{width:'100px',marginRight:'5px'}} name='confirm'/>
                <CardIcons/>
                <Text type='h5' style={{fontWeight:'400'}}>3-digits on back of card</Text>
            </Row></>
            }
            
        </Column></div>
  )
}
