import React from 'react';
import Tea from './Tea';


function TeaList({ teas, onDelete, onEdit }) {
    return (
        <table id="teas">
            <caption>Delete and Edit Teas</caption>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Expiration</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {teas.map((tea, i) => 
                    <Tea 
                        tea={tea} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default TeaList;
