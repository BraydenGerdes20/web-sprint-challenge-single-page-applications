import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const Form = () => {
    const { model } = useParams()


    const [pizzaForm, setForm] = useState({
        name: '',
        size: '',
        topping1: false,
        topping2: false,
        topping3: false,
        topping4: false,
        topping5: false,
        topping6: false,
        special: '',
    })
    const formChange = (e) => {
        console.log(e.target)
        const value = e.target === 'chechbox' ? e.target.checked : e.target.value
    }
    
   
    return(
        <article>
        <h1>AYE YOU MAK-A DHA PIZZA EHH {model}</h1>
        <form className='form container' >
            <div className="yourName">
                <h2>Enter your name</h2>
            <label>
                <input type='text' name='name' id='name-input' value={pizzaForm.name} onChange={formChange} />
            </label>
            </div>
            <div className="pizzaSize">
                <h2>Enter your size pizza you would like</h2>
            <label>
                <select id='size-dropdown' name='size' value={pizzaForm.size} >
                    <option value=''>- Select size -</option>
                    <option value='10 inch'>small (10 in)</option>
                    <option value='12 inch'>medium (12 in)</option>
                    <option value='14 inch'>large (14 in)</option>
                    <option value='20 inch'>SUPREME (20 in)</option>
                </select>
            </label>
            </div>
            <div className="yourToppings">
                <h2>Pick your desired pizza toppings</h2>
            <label>Pepperoni
                <input type='checkbox' name='topping1' checked={pizzaForm.topping1}/>
            </label>
            <label>Mushroom
                <input type='checkbox' name='topping2' checked={pizzaForm.topping2}/> 
            </label>
            <label>Extra cheese
                <input type='checkbox' name='topping3' checked={pizzaForm.topping3}/>
            </label>
            <label>Sausage
                <input type='checkbox' name='topping4' checked={pizzaForm.topping4}/>
            </label>
            <label>Onion 
                <input type='checkbox' name='topping5' checked={pizzaForm.topping5}/>
            </label>
            <lable>Black olives
                <input type='checkbox' name='topping6' checked={pizzaForm.topping6}/>
            </lable>
            </div>
            <div className="specialRequests">
                <h2>Do you have any special requests?</h2>
            <label>
                <input type='text' name='special' id='special-text' value={pizzaForm.special} onChange={formChange} />
            </label>
            </div>
            

        </form>
        </article>)
    
}

export default Form