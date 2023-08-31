import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function HomePage() {
    return (
       <>
        <h2>Home Page</h2>
        <article>
            <p>Hello!</p>
        </article>
        <p>This website was build using the following languages/technologies:</p>
        <ul>
        <li>MERN</li>
        <li>HTML and CSS</li>
        <li>REST APIs</li>
        </ul>
       </>

    );
}
export default HomePage;