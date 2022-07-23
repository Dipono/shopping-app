// import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch} from 'react-redux';
import productData from './component/data/productData'
import {displayProduct} from './component/features/products';

function App() {

  const product = useSelector((state) => state.product.value);
  const dispatch = useDispatch()
  dispatch(displayProduct(productData))
  console.log(product)
  return (
    <div className="App">
      {product.map((prod)=>(
        <div>
          <img src={prod.image}/>
          </div>
      ))}

    </div>
  );
}

export default App;