import React from 'react';


import { MdDeleteForever, MdEdit } from 'react-icons/md';


function Tea({ tea, onEdit, onDelete }) {
    return (
        <tr>
            <td>{tea.product}</td>
            <td>{tea.quantity}</td>
            <td>{tea.expiration}</td>
            <td><MdDeleteForever onClick={() => onDelete(tea._id)} /></td>
            <td><MdEdit onClick={() => onEdit(tea)} /></td>
        </tr>
    );
}

export default Tea;