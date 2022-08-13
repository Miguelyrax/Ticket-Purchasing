import { createContext } from "react";
import { CreditCardInterface } from "../interfaces/credit-card.interface";
import { Select } from "../interfaces/select";

export type TicketContent={
    currentIndex:number,
    firstPage:boolean,
    ticket?:Select,
    paynments:CreditCardInterface[],
    setCurrentIndex:(index: number) => void,
    setTicket:(ticket: Select) => void,
    add:(form: CreditCardInterface) => void,
    deleteCard:(id: string) => void,
    edit:(form: CreditCardInterface) => void,
}
export const TicketContext = createContext<TicketContent>({
    currentIndex:0,
    ticket:undefined,
    firstPage:true,
    paynments:[],
    setCurrentIndex:()=>{},
    setTicket:()=>{},
    add:()=>{},
    deleteCard:()=>{},
    edit:()=>{},
})