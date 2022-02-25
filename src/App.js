import React from "react";
import { Switch, Link, Route } from 'react-router-dom'
import PizzaForm from './components/PizzaForm';



const App = () => {
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
          <PizzaForm />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
