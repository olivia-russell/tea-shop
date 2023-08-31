import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditTeaPageTable = ({ teaToEdit }) => {
 
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
            alert(`Your change to tea has been successful!`);
        } else {
            const errMessage = await response.json();
            alert(`Your change to tea has failed. ${response.status}. ${errMessage.Error}`);
        }
        redirect("/");
    }

    return (
        <>
        <article>
            <h2>Edit a tea</h2>
            <p>Edit your selected tea product.</p>
            <table id="teas">
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
                            placeholder="Quantity of tea"
                            onChange={e => setQuantity(e.target.value)} 
                            id="quantity" />
                    </td>

                    <td><label for="expiration">Expiration</label>
                        <input
                            type="text"
                            placeholder="Expiration of the tea"
                            value={expiration}
                            onChange={e => setExpiration(e.target.value)} 
                            id="expiration" />
                    </td>

                    <td>
                    <label for="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={editTea}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditTeaPageTable;