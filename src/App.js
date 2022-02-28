import React, { useState, useEffect } from "react";
import { Switch, Link, Route } from 'react-router-dom'
import PizzaForm from './components/PizzaForm';


const App = () => {

  const [orders, setOrders] = useState([])


  const orderSubmit = (newOrder) => {
    setOrders([...orders, newOrder])
  }

  useEffect(()=>{
    // console.log(orders)
  },[orders])

  return (
    <div className="App">
      <header>
          <Link to='/'>Home</Link>
          <Link to='/pizza' id="order-pizza">Make the pizza</Link>
      </header>
      <Switch>
        <Route exact path='/'>
          <h1>Lambda Eats</h1>
          <p>You can remove this code and create your own header</p>
        </Route>
        <Route path='/pizza'>
          <PizzaForm  
            orderSubmit={orderSubmit}
          />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
