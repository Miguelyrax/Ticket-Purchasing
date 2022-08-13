import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import {
    Item,
    Row,
    Column,
    Text,
     Paragraph,
    SizedBox,
    TextButton,
    CreditCard,
    TextField
  } from '../components/';
import { TicketContext } from '../context/TicketContext';
import { CardIcons, CheckIcon, PlusIcons, WalletIcon } from '../icons';
import { CreditCardInterface } from '../interfaces/credit-card.interface';
const INITSTATE={
    username:'',
    month:'',
    day:'',
    cvv:'',
    title:'',
    number:0
}
export const Paynment = () => {
    const {add,paynments}=useContext(TicketContext);
    const [newCard, setNewCard] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [form, setForm] = useState<CreditCardInterface>(INITSTATE);
    const {username,month,cvv,title,number}=form;
    const onChange=(e:ChangeEvent<HTMLInputElement>)=>{
      setForm({
        ...form,
        [e.target.name]:e.target.value
      })
    }
    const addNewCard=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(!validForm())return false;
        add(form);
        setForm(INITSTATE);
        setNewCard(!newCard)
    }
    const validForm=()=>{
        if(username.length>0&&
            month.length>0&&
            number>0&&
            cvv.length>0&&
            title) return true;
        return false;
    }
  return (
    <div className='paynment'>
    <Column>
        <Item style={{marginBottom:'16px'}}>
            <Row>
                <Text style={{marginRight:'5px'}} type='h2'>Delivery</Text>
                <CheckIcon/>
            </Row>
            <SizedBox height={15}/>
            <Text type='h3'>Mobile Entry - free</Text>
            <SizedBox height={8}/>
            <Paragraph>Tickets Available by Sun Apr 3, 2022</Paragraph>
            <Paragraph>These mobile tickets will be transfered directly to you from a trusted seller, We´ll email you instructions on how to accept them on the original ticket provider´s mobile app.</Paragraph>
        </Item>
        <Item>
            <Row>
                <Text style={{marginRight:'5px'}} type='h2'>Paynment</Text>
                <CheckIcon/>
            </Row>
            <SizedBox height={8}/>
            <Text type='h4' style={{paddingLeft:'16px'}}>Use Credit / Debit Card</Text>
            <SizedBox height={32}/>
            <>
            {
                paynments.map((credit,index)=>(
                    <div key={credit.number} onClick={()=>setCurrentIndex(index)}>
                        <CreditCard select={currentIndex===index} values={credit}/>
                    </div>
                ))
            }
            <SizedBox height={15}/>
            {
                newCard
                ?<form onSubmit={addNewCard}>
                <TextField name='username' placeholder='Nombre y apellido' value={username} onChange={onChange}/>
                <TextField name='title' placeholder='Nombre de la tarjeta' value={title} onChange={onChange}/>
                <TextField type='month' name='month' placeholder='Mes de expiración' value={month} onChange={onChange}/>
                <TextField type='number' name='cvv' placeholder='CVV' value={cvv} onChange={onChange}/>
                <TextField type='number' name='number' placeholder='Número de tarjeta' value={number} onChange={onChange}/>
                <Row>
                    <TextButton style={{marginRight:'5px',color:'green'}} type='submit'>
                        Save
                    </TextButton>
                    <TextButton style={{color:'red'}} onClick={()=>{setNewCard(!newCard)}}>
                        Cancel
                    </TextButton>
                </Row>
                </form>
                :<div style={{cursor:'pointer'}} onClick={()=>{setNewCard(!newCard)}}>
                <Row>
                    <PlusIcons />
                    <WalletIcon/>
                    <TextButton >
                        Add New Card
                    </TextButton>
                    
                </Row>
                </div>
            }
            <SizedBox height={15}/>
            </>
            
            <SizedBox height={15}/>
            <Text type='h4'>Or Pay With</Text>
            <Paragraph style={{fontWeight:'600'}}><>By using a digital wallet and continuing past this page, you have a read and are accepting the <TextButton>Terms of use</TextButton></></Paragraph>
        </Item>
    </Column>
    </div>
  )
}
