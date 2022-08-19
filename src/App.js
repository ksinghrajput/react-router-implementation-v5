
import './App.css';
import { Redirect, Route } from 'react-router-dom'
import Product from './pages/Product';
import Welcome from './pages/Welcome';
import MainHeader from './components/MainHeader';
import ProductDetails from './components/productDetails';

function App() {
  return (
    <div className="App">
     <MainHeader />
     
      <main>
      <Route path="/" exact>
          <Redirect to="/welcome"></Redirect>
        </Route>

        <Route path="/welcome">
          <Welcome />
        </Route>

        <Route path="/products" exact>
          <Product />
        </Route>

        <Route path="/products/:productId">
          <ProductDetails />
        </Route>

      </main>


    </div>
  );
}

export default App;
