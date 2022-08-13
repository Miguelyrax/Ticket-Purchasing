import { useContext } from 'react';
import './App.css';
import {
  Container,
} from './components/';
import { TicketContext } from './context/TicketContext';
import { Tickets } from './screens/Tickets';
import { Paynment } from './views/Paynment';
import { ResumeComponent } from './views/ResumeComponent';


function App() {
  const {firstPage} = useContext(TicketContext);
  console.log(firstPage)
  return (
    <>
    {
      firstPage
      ?<Tickets></Tickets>
      :<Container>
        <div className='row'>
          <Paynment/>
          <ResumeComponent/>
        </div>
      </Container>
    }
    </>
    
    
  );
}

export default App;
