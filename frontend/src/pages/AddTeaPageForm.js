import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


export const AddTeaPageForm = () => {

    const [product, setProduct]       = useState('');
    const [quantity, setQuantity]         = useState('');
    const [expiration, setExpiration] = useState('');
    
    const redirect = useNavigate();

    const addTea = async () => {
        const newTea = { product, quantity, expiration };
        const response = await fetch('/teas', {
            method: 'post',
            body: JSON.stringify(newTea),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`helpful adding message`);
            redirect("/");
        } else {
            alert(`helpful adding message = ${response.status}`);
            redirect("/");
        }
    };


    return (
        <>
        <article>
            <h2>Add a tea</h2>
            <p>Add new tea products below.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which tea are you adding?</legend>
                    <label for="product">Tea product</label>
                    <input
                        type="text"
                        placeholder="Tea product"
                        value={product}
                        onChange={e => setProduct(e.target.value)} 
                        id="product" />
                    
                    <label for="quantity">Tea quantity</label>
                    <input
                        type="number"
                        value={quantity}
                        placeholder="Tea quantity"
                        onChange={e => setQuantity(e.target.value)} 
                        id="quantity" />

                    <label for="expiration">Expiration</label>
                    <input
                        type="text"
                        placeholder="Expiration date of the tea"
                        value={expiration}
                        onChange={e => setExpiration(e.target.value)} 
                        id="expiration" />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addTea}
                        id="submit"
                    >Add</button> to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddTeaPageForm;