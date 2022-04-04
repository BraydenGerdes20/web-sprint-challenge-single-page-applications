import React, { useState } from "react";
import { Switch, Link, Route } from 'react-router-dom'
import PizzaForm from './components/PizzaForm';
import schema from './validate/formSchema';
import * as yup from 'yup';

const initialErrors = {
  name: '',
}
const initialFormValues = {
  name: '',
  size: '',
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  topping5: false,
  topping6: false,
  special: '',
}

const App = () => {

  const [orders, setOrders] = useState([])
  const [formErrors, setFormErrors] = useState(initialErrors)
  const [formValues, setFormValues] = useState(initialFormValues)

  const orderSubmit = (newOrder) => {
    setOrders([...orders, newOrder])
  }
  const validate =(name, value) =>{
    yup.object(schema, name)
    .validate(value)
    .then(()=> setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0] }))
  }
 const handleChange = (name, value)=>{
     setFormValues({...formValues, [name]: value})
    validate(name, value);
  }

  return (
    <div className="App">
      <header>
          <Link to='/'>Home</Link>
          <Link to='/pizza' id="order-pizza">Make the pizza</Link>
      </header>
      <Switch>
        <Route exact path='/'>
          <h1>BloomTech Eats</h1>
          <p>AHHHHHHHHHHHHHHHHHHH DON'T TOUCH MAH PIZZA</p>
        </Route>
        <Route path='/pizza'>
          <PizzaForm  
            value={formValues}
            change={handleChange}
            orderSubmit={orderSubmit}
            errors={formErrors}
          />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
