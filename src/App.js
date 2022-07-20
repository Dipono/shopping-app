import logo from './logo.svg';
import './App.css';
import { decrement, increment} from './component/action/index';
import { useSelector, useDispatch} from 'react-redux';

function App() {

  const counter = useSelector((state) => state.counter);
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
    </div>
  );
}

export default App;
