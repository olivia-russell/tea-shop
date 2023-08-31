import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TeaList from '../components/TeaList';

function TeasPage({ setTea }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [teas, setTeas] = useState([]);

    // RETRIEVE the entire list of teas
    const loadTeas = async () => {
        const response = await fetch('/teas');
        const teas = await response.json();
        setTeas(teas);
    } 
    

    // UPDATE a single tea
    const onEditTea = async tea => {
        setTea(tea);
        redirect("/update");
    }


    // DELETE a single tea  
    const onDeleteTea = async _id => {
        const response = await fetch(`/teas/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/teas');
            const teas = await getResponse.json();
            setTeas(teas);
        } else {
            console.error(`helpful deletion message = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the teas
    useEffect(() => {
        loadTeas();
    }, []);

    // DISPLAY the teas
    return (
        <>
            <h2>List of Teas</h2>
            <p>View your current tea inventory.</p>
            <TeaList 
                teas={teas} 
                onEdit={onEditTea} 
                onDelete={onDeleteTea} 
            />
        </>
    );
}

export default TeasPage;