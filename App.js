import './App.css';
import NavBar from './Components/NavBar.jsx'
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import Calculator from './Components/Calculator.jsx';
import Joke from './Components/Joke.js';

function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={ <NavBar/>} >
      <Route path='/' element={ <Joke/>} ></Route>
      <Route path='/Joke.js' element={ <Joke/>} ></Route>
      <Route path='/Calculator.jsx' element={ <Calculator/>} ></Route>
      </Route> 
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
