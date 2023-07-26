import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Navbar />}></Route>
    //     <Route path='/Home' element={<Home />}></Route>
    //   </Routes>
    // </BrowserRouter>
    <div>
      <Navbar />
    </div>
  );
}

export default App;
