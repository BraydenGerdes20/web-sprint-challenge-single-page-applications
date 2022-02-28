import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import * as yup from 'yup';

const initialForm = {
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

const PizzaForm = (props) => {
    const { orderSubmit } = props

    const { model } = useParams()

    const formSchema = yup.object().shape({
        name: yup.string().min(2, 'name must be more than 2 characters long')
    })

    const [error, setError] = useState({
        name: ''
    })
    const[disabled, setDisabled] = useState(true)

    const [form, setForm] = useState(initialForm)

    const formValidate = (e) => {
        yup.reach(formSchema, e.target.name)
        .validate(
            e.target.type === 'checkbox' ? e.target.checked : e.target.value
        )
        .then(() =>
            setError({...error, [e.target.name]: ''})
        )
        .catch((error)=>{
            setError({...error, [e.target.name]: error.errors[0]})
        })

    }

    const formChange = (e) => {
        formValidate(e)
        const value = e.target.type === 'chechbox' ? e.target.checked : e.target.value
        setForm({...form, [e.target.name]:value, [e.target.size]:value, [e.target.special]:value})
    }

    const submitForm= (e) => {
        e.preventDefault()
        orderSubmit(form)
        setForm(initialForm)
    }

    useEffect(()=>{
        formSchema.isValid(form).then((valid)=> {
            setDisabled(!valid)
        })
    }, [form])
    
   
    return(
        <article>
        <h1>AYE YOU MAK-A DHA PIZZA EHH {model}</h1>
        <form onSubmit={submitForm} id='pizza-form'>
            <div className="yourName">
                <h2>Enter your name</h2>
            <label>
                <input type='text' name='name' id='name-input' value={form.name} onChange={formChange} />
            </label>
            <p>{error.name}</p>
            </div>
            <div className="pizzaSize">
                <h2>Enter your size pizza you would like</h2>
            <label>
                <select id='size-dropdown' name='size' value={form.size} onChange={formChange} >
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
                <input type='checkbox' 
                name='topping1' 
                checked={form.topping1} 
                onChange={formChange}/>
            </label>
            <label>Mushroom
                <input type='checkbox' 
                name='topping2' 
                checked={form.topping2} 
                onChange={formChange}/> 
            </label>
            <label>Extra cheese
                <input type='checkbox' 
                name='topping3' 
                checked={form.topping3} 
                onChange={formChange}/>
            </label>
            <label>Sausage
                <input type='checkbox' name='topping4' checked={form.topping4} onChange={formChange}/>
            </label>
            <label>Onion 
                <input type='checkbox' name='topping5' checked={form.topping5} onChange={formChange}/>
            </label>
            <label>Black olives
                <input type='checkbox' name='topping6' checked={form.topping6} onChange={formChange}/>
            </label>
            </div>
            <div className="specialRequests">
                <h2>Do you have any special requests?</h2>
            <label>
                <input type='text' name='special' id='special-text' value={form.special} onChange={formChange} />
            </label>
            </div>
            <button type="submit" disabled={disabled} id='order-button'>Submit your order</button>

        </form>
        </article>)
    
}

export default PizzaForm