import React, { ChangeEvent, FC, FormEvent, useContext, useState } from 'react'
import { TicketContext } from '../context/TicketContext'
import { TicketIcon } from '../icons'
import { Ticket } from '../interfaces/ticket-interface'
import { Button } from './Button'
import { Column } from './Column'
import { Row } from './Row'
import { SizedBox } from './SizedBox'
import { Text } from './Text'
import { TextField } from './TextField'

interface PROPS{
    ticket:Ticket
}
export const TicketItem:FC<PROPS> = ({ticket}) => {
    const {setTicket} = useContext(TicketContext);
    const [quantity, setQuantity] = useState(0);

    const onChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setQuantity(parseInt(e.target.value))
    }
    const onSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(quantity<=0)return;
        setTicket({ticket,quantity})
    }
  return (
    <div style={{
        margin:'6px',
        border:'none',
        cursor:'pointer',
        padding:'16px',
        borderRadius:'4px',
        boxShadow: '1px 2px 6px gray',
    }}>
        <form onSubmit={onSubmit}>
        <Row style={{alignItems:'start'}}>
            <TicketIcon/>
            <Column>
                <Text style={{fontWeight:'900'}} type='h3'>
                    {ticket.title}
                </Text>
                <SizedBox height={20}/>
                <Text style={{fontWeight:'900'}} type='h5'>
                    {ticket.subtitle}
                </Text>
                <SizedBox height={20}/>
                <Text type='h5'>
                    ____________________
                </Text>
                <SizedBox height={20}/>
                <Text type='h5' style={{fontWeight:'400'}}>
                    {ticket.content}
                </Text>
                <SizedBox height={100}/>
                <Text type='h5'>
                    ____________________
                </Text>
                <SizedBox height={20}/>
                <Text type='h5'>
                    Precio
                </Text>
                <Text style={{fontWeight:'800'}} type='h3'>
                    <>${ticket.price.toString()}</>
                </Text>
                <SizedBox height={20}/>
            </Column>
        </Row>
            <Text type='h5'>
                Cantidad
            </Text>
                <TextField onChange={onChange} style={{width:'50px'}} type='number' name='quantity' />
        <Row>
            <Button type='submit'>
                Comprar
            </Button> 
        </Row>
    </form>
        
    </div>
  )
}
