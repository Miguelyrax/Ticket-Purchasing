import { Container, TicketItem } from '../components'
import { Ticket } from '../interfaces/ticket-interface'

const tickets:Ticket[]=[
    {
        title:'Early Bird 4-Day Pass',
        subtitle:'Abono completo',
        content:'Te da acceso a Road TO primavera (16 Oct). Primavera en la ciudad (7-11-Nov). La bienvenida(1 Nov) y Primavera Sound Weekend(12-13 Nov).',
        price:12000
    },
    {
        title:'Early Bird 4-Day Pass',
        subtitle:'Abono completo',
        content:'Te da acceso a Road TO primavera (16 Oct). Primavera en la ciudad (7-11-Nov). La bienvenida(1 Nov) y Primavera Sound Weekend(12-13 Nov).',
        price:90000
    },
    {
        title:'Early Bird 4-Day Pass',
        subtitle:'Abono completo',
        content:'Te da acceso a Road TO primavera (16 Oct). Primavera en la ciudad (7-11-Nov). La bienvenida(1 Nov) y Primavera Sound Weekend(12-13 Nov).',
        price:165000
    },
    {
        title:'Early Bird 4-Day Pass',
        subtitle:'Abono completo',
        content:'Te da acceso a Road TO primavera (16 Oct). Primavera en la ciudad (7-11-Nov). La bienvenida(1 Nov) y Primavera Sound Weekend(12-13 Nov).',
        price:400000
    },
]
export const Tickets = () => {
    
  return (
    <Container>
        <div className='row-ticket'>
            {
                tickets.map((ticket,index)=>(
                    <TicketItem key={index} ticket={ticket}/>
                    )) 
                }
        </div>
    </Container>
  )
}
