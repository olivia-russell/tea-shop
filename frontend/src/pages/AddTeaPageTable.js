import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


export const AddTeaPageTable = () => {

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
        } else {
            alert(`helpful adding message = ${response.status}`);
        }
        redirect("/");
    };


    return (
        <>
        <article>
            <h2>Add a tea</h2>
            <p>Paragraph about this page.</p>
            
            <table id="teas">
                <caption>Which tea are you adding?</caption>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Expiration</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="product">Tea product</label>
                        <input
                            type="text"
                            placeholder="Tea product"
                            value={product}
                            onChange={e => setProduct(e.target.value)} 
                            id="product" />
                    </td>

                    <td><label for="quantity">Tea quantity</label>
                        <input
                            type="number"
                            value={quantity}
                            placeholder="Tea quantity"
                            onChange={e => setQuantity(e.target.value)} 
                            id="quantity" />
                    </td>

                    <td><label for="expiration">Expiration</label>
                        <input
                            type="text"
                            placeholder="Expiration"
                            value={expiration}
                            onChange={e => setExpiration(e.target.value)} 
                            id="expiration" />
                    </td>

                    <td>
                    <label for="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={addTea}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddTeaPageTable;