
import './App.css'
import { KhatabookProvider } from './Context/KhatabookContext';
import Form from './Form';
import Frame from './Frame';
import ListGroup from './ListGroup';
import Navbar from './components/Navbar';

const App = () =>{
  return(
    <KhatabookProvider>
     <div className="container">

     <Navbar/>

      <Form/>

      <Frame/>

      <ListGroup/>

     </div>
     
    </KhatabookProvider>
  )
}
export default App;