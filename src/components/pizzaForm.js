import React from "react";
import { useParams } from 'react-router-dom';
// import * as yup from 'yup';
// import formSchema from "../validate/formSchema";
// import formValidate from "./validate/"




const PizzaForm = (props) => {
    const { orderSubmit, errors, change } = props
    const { model } = useParams()
    const { name, size, topping1, topping2, topping3, topping4, topping5, topping6, special} =props.value

    const onChange = (e) => {
        const { name, value, checked, type } = e.target;
        const newVal = type === 'checkedbox' ? checked : value
        change(name, newVal)
    }

    // const formSchema = yup.object().shape({
    //     name: yup.string().trim().required('name is required').min(2, 'name must be more than 2 characters long')
    // })

    // const [error, setError] = useState({
    //     name: ''
    // })
    

    

    // const formValidate = (e) => {
    //     yup.object(formSchema, e.target.name)
    //     .validate(
    //         e.target.type === 'checkbox' ? e.target.checked : e.target.value
    //     )
    //     .then(() =>
    //         setError({...error, [e.target.name]: ''})
    //     )
    //     .catch((error)=>{
    //         setError({...error, [e.target.name]: error.errors[0]})
    //     })

    // }


    const submitForm= (e) => {
        e.preventDefault()
        orderSubmit()
    }

    
   
    return(
        <article>
        <h1>AYE YOU MAK-A DHA PIZZA EHH {model}</h1>
        <form onSubmit={submitForm} id='pizza-form'>
            <div className="yourName">
                <h2>Enter your name</h2>
            <label>
                <input type='text' name='name' id='name-input' value={name} onChange={onChange} />
            </label>
            <p>{errors.name}</p>
            </div>
            <div className="pizzaSize">
                <h2>Enter your size pizza you would like</h2>
            <label>
                <select id='size-dropdown' name='size' value={size} onChange={onChange} >
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
                checked={topping1} 
                onChange={onChange}/>
            </label>
            <label>Mushroom
                <input type='checkbox' 
                name='topping2' 
                checked={topping2} 
                onChange={onChange}/> 
            </label>
            <label>Extra cheese
                <input type='checkbox' 
                name='topping3' 
                checked={topping3} 
                onChange={onChange}/>
            </label>
            <label>Sausage
                <input type='checkbox' name='topping4' checked={topping4} onChange={onChange}/>
            </label>
            <label>Onion 
                <input type='checkbox' name='topping5' checked={topping5} onChange={onChange}/>
            </label>
            <label>Black olives
                <input type='checkbox' name='topping6' checked={topping6} onChange={onChange}/>
            </label>
            </div>
            <div className="specialRequests">
                <h2>Do you have any special requests?</h2>
            <label>
                <input type='text' name='special' id='special-text' value={special} onChange={onChange} />
            </label>
            </div>
            <button type="submit" id='order-button'>Submit your order</button>

        </form>
        </article>)
    
}

export default PizzaForm