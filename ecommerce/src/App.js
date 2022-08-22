import './App.css';
import {Route, Routes, BrowserRouter,Link} from "react-router-dom"
import Productlist from './component/product';
import Header from './component/header.';
import Nav from './component/navbar';

function App() {


  return (
    <div>
    <Header/>
    <Nav/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Productlist/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
