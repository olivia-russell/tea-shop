import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function HomePage() {
    return (
       <>
       <div class="hero"></div>
       <div class="cta-column">
        <h1>Welcome to our Tea Shop</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam urna arcu, sodales quis metus ac, dictum dapibus sem.</p>
        <button class="cta">VIEW OUR TEA COLLECTION</button>
        </div>
        <div class="content-stripe-one">
            <div class="banner-box">
                <div class="text-box">
                    <h2>Content Stripe One</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam urna arcu, sodales quis metus ac, dictum dapibus sem.
                    Vivamus efficitur quam a nulla eleifend pharetra. Nulla tellus nulla, tempus ac ex scelerisque, varius aliquam magna.
                    Morbi sit amet libero neque. Duis fermentum odio ac consectetur lobortis. Sed a facilisis dolor. Nunc libero magna,
                    lacinia a rutrum eu, commodo nec tellus. Pellentesque ultrices justo non sodales fermentum. Donec orci nunc, ornare a
                    dictum nec, dignissim vitae tortor.</p>
                </div>
            </div>
        </div>
        <article>
            <p>Hello! Test</p>
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