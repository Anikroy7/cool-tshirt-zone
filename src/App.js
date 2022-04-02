import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import OrderReview from './Components/OrderRiview/OrderReview';
import GrandPa from './Components/GrandPa/GrandPa';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/orderreview' element={<OrderReview></OrderReview>}></Route>
        <Route path='/grandpa' element={<GrandPa></GrandPa>}></Route>
      </Routes>
    </div >
  );
}

export default App;
