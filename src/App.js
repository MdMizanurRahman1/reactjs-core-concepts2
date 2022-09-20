import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'Laptop', price: '150000' },
    { name: 'Mobile', price: '10000' },
    { name: 'Watch', price: '3000' },
    { name: 'Tablet', price: '70000' }

  ]
  return (
    <div className="App">

      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }

      {/*<Product name='Laptop' price='150000'></Product>
      <Product name='Mobile' price='50000'></Product>
  <Product name='Watch' price='5000'></Product>*/}

    </div>
  );
}

function Product(props) {
  return (
    <div className='product'>
      <h1>Name: {props.name}</h1>
      <p>Price: {props.price}</p>
    </div>
  )
}



export default App;
