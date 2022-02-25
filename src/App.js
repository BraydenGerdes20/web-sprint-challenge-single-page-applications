import React, { useState, useEffect } from "react";
import { Switch, Link, Route } from 'react-router-dom'
import PizzaForm from './components/PizzaForm';
import * as yup from 'yup';
import formSchema from "./validate/formSchema";

const initialFormErrors = {
  name: '',
}

const App = () => {

  const [orders, setOrders] = useState([])
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const validate = (name, value) =>{
    yup.reach(formSchema, name)
    .validate(value)
    .then(()=> setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0] }))
  }

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
          <PizzaForm errors={formErrors} orderSubmit={orderSubmit}/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
