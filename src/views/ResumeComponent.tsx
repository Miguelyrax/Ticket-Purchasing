import { useContext } from 'react';
import { 
  TextButton,
  Text,
  Button,
  Item,
  Row,
  RowComponent,
  SizedBox, } from '../components'
import { TicketContext } from '../context/TicketContext';

export const ResumeComponent = () => { 
  const {ticket} = useContext(TicketContext);
  return (
    <div className='resume'>
    <Item >
        <Row between={true} style={{paddingBottom:'16px'}}>
            <Text type='h2' >Total</Text>
            <Text type='h2'><>${((ticket?.quantity??0)*(ticket?.ticket.price??0)+88.16+2.95).toFixed(2)}</></Text>
        </Row>
        <Text type='h3' style={{paddingBottom:'16px'}}>Tickets</Text>
        <RowComponent textLeft={`Resale Tickets: $${ticket?.ticket.price} x ${(ticket?.quantity??0)}`} textRight={`$${(ticket?.quantity??0)*(ticket?.ticket.price??0)}`} />
        <Text type='h3' style={{paddingTop:'16px'}}>Notes From Seller</Text>
        <p>{`xfr XFER Proos of at least one dose COVID-19 vaccination for ages 5 to 11 and guests ages 12 and up will be required to show proof of two COVID-19 vaccine doses or one dose of the Johnson & Johnson vaccine.\n\n Mask must be worn.`}</p>
        <Text type='h3' style={{paddingBottom:'16px'}}>Fees</Text>
        <RowComponent textLeft='Service Fee: $44.08 x 2' textRight='$88.16' />
        <RowComponent textLeft='Order Proccessing Fee' textRight='$2.95' />
        <SizedBox height={15}/>
        <Text type='h3'>Delivery</Text>
        <SizedBox height={15}/>
        <RowComponent textLeft='Mobile Entry' textRight='Free' />
        <SizedBox height={15}/>
        <Text type='h4'>Cancel Order</Text>
        <SizedBox height={15}/>
        <Text type='h5'>* All Sales Final - No Refunds</Text>
        <Row between={true}>
            <input type='checkbox' />
            <p className='text-semi text-end'>I have read and agree to the current<TextButton>Terms Of use</TextButton></p>
        </Row>
        <Button>
          Place Order
        </Button>
        <p>*Exections may apply, see our Terms of Use.</p>
    </Item>
    </div>
  )
}
