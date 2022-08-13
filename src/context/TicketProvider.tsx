import { useReducer } from "react";
import { CreditCardInterface } from "../interfaces/credit-card.interface";
import { Select } from "../interfaces/select";
import { TicketContent, TicketContext } from "./TicketContext";
interface TicketProviderInterface{
    children:any
}
const INITIAL_STATE:TicketContent={
    currentIndex:0,
    firstPage:true,
    ticket:undefined,
    setCurrentIndex:()=>{},
    setTicket:()=>{},
    paynments:[],
    add:()=>{},
    deleteCard:()=>{},
    edit:()=>{},
}

enum types{
    setCurrentIndex,
    add,
    delete,
    edit,
    setTicket
}
type TicketAction={
    type:types,
    payload:any
}
const ticketReducer=(state:TicketContent,action:TicketAction):TicketContent=>{
    switch (action.type) {
        case types.setCurrentIndex:
            return {
                ...state,
                currentIndex:action.payload
            }
        case types.add:
            return {
                ...state,
                paynments:[...state.paynments,action.payload]
            }
        case types.delete:
            return {
                ...state,
                paynments:state.paynments.filter(py=>py.id!==action.payload)
            }
        case types.edit:
            return {
                ...state,
                paynments:state.paynments.map(py=>py.number!==action.payload.number?py:action.payload)
            }
        case types.setTicket:
            return {
                ...state,
                ticket:action.payload,
                firstPage:false
            }
        default:
            return state;
    }
}

export const TicketProvider = (props:TicketProviderInterface) => {
    const [state, dispatch] = useReducer(ticketReducer, INITIAL_STATE);
    const setCurrentIndex=(index:number)=>{
        dispatch({type:types.setCurrentIndex,payload:index})
    }
    const add=(form: CreditCardInterface)=>{
        var id = '';
        var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
                'abcdefghijklmnopqrstuvwxyz0123456789@#$';
            
        for (let i = 1; i <= 8; i++) {
            var char = Math.floor(Math.random()
                        * str.length + 1);
                
            id += str.charAt(char)
        }
        dispatch({type:types.add,payload:{...form,id}})
    }
    const deleteCard=(id:string)=>{
        dispatch({type:types.delete,payload:id})
    }
    const edit=(form: CreditCardInterface)=>{
        dispatch({type:types.edit,payload:form})
    }
    const setTicket=(ticket: Select)=>{
        dispatch({type:types.setTicket,payload:ticket})
    }
  return (
    <TicketContext.Provider value={{
        ...state,
        setCurrentIndex,
        setTicket,
        add,
        deleteCard,
        edit
    }}>
        {props.children}
    </TicketContext.Provider>
  )
}
