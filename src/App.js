// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './component/Products/Product/Product';
//import Header from './component/Products/Header/Header';

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Product />}/>
      </Routes>
    </Router>
  );
}

export default App;
