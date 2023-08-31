import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditTeaPageForm = ({ teaToEdit }) => {
 
    const [product, setProduct]       = useState(teaToEdit.product);
    const [quantity, setQuantity]         = useState(teaToEdit.quantity);
    const [expiration, setExpiration] = useState(teaToEdit.expiration);
    
    const redirect = useNavigate();

    const editTea = async () => {
        const response = await fetch(`/teas/${teaToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                product: product, 
                quantity: quantity, 
                expiration: expiration
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Your change to Tea has been saved!`);
        } else {
            const errMessage = await response.json();
            alert(`Your change to Tea has not been saved ${response.status}. ${errMessage.Error}`);
        }
        redirect("/");
    }

    return (
        <>
        <article>
            <h2>Edit a tea</h2>
            <p>Edit your tea product.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which tea are you adding?</legend>
                    <label for="product">Tea product</label>
                    <input
                        type="text"
                        value={product}
                        onChange={e => setProduct(e.target.value)} 
                        id="product" />
                    
                    <label for="quantity">Quantity</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={e => setQuantity(e.target.value)} 
                        id="quantity" />

                    <label for="expiration">Expiration</label>
                    <input
                        type="text"
                        value={expiration}
                        onChange={e => setExpiration(e.target.value)} 
                        id="expiration" />

                    <label for="submit">
                    <button
                        onClick={editTea}
                        id="submit"
                    >Save</button> updates to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditTeaPageForm;