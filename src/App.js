import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Authentication from './pages/Authentication/Authentication';
import HomePage from './pages/HomePage/HomePage';
import Message from './pages/Message/Message';

function App() {
  
  return (
     <>
     <div className="">
      <BrowserRouter>
        <Routes>
        <Route path='/*' element={<HomePage />} />
        <Route path='/*' element={<Authentication />} />
          <Route path='/message' element={<Message/>} />
        </Routes>
      </BrowserRouter>
      </div>
    
    </>
    // <div className="">
    //  <Authentication/> 
     

     
    // </div>
  );
}

export default App;




