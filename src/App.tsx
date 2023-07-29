import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Details from './components/Details';

const App = ( ) => {
  return (
    <div className="App">
      <Header />
      <Routes> 
          <Route path="/"  Component={Home} /> 
          <Route  path="/products"  Component={Products} /> 
          <Route path="/products/:id" Component={Details} />
      </Routes>
    </div>
  );
}

export default App;
