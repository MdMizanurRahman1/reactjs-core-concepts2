import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(20);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);


  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}


{/*const products = [
  { name: 'Laptop', price: '150000' },
  { name: 'Mobile', price: '10000' },
  { name: 'Watch', price: '3000' },
  { name: 'Tablet', price: '70000' }

]*/}

{/*{
  products.map(product => <Product name={product.name} price={product.price}></Product>)
}*/}

{/*<Product name='Laptop' price='150000'></Product>
<Product name='Mobile' price='50000'></Product>
<Product name='Watch' price='5000'></Product>*/}


function Product(props) {
  return (
    <div className='product'>
      <h1>Name: {props.name}</h1>
      <p>Price: {props.price}</p>
    </div>
  )
}



export default App;
