import logo from './logo.svg';
import './App.css';
import Products from './Components/Products';
import Search from './Components/Search';
import Delete from './Components/Delete';
import ViewAll from './Components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/delete' element={<Delete/>}/>
      <Route path='/viewall' element={<ViewAll/>}/>
      
    </Routes>
   </BrowserRouter>
  );
}

export default App;
