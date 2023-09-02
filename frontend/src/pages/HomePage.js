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
        <div class="content-stripe-two">
            <h3>Our Products</h3>
            <div class="gallery">
                <div class="product">
                    <a href="#"><img class="" src={require('../images/tea-one.jpg')} /></a>
                </div>
                <div class="product">
                    <a href="#"><img class="" src={require('../images/tea-two.jpg')} /></a>
                </div>
                <div class="product">
                    <a href="#"><img class="" src={require('../images/tea-three.jpg')} /></a>
                </div>
            </div>
        </div>
        <div class="content-stripe-three">
            <div class="banner-box contact-banner">
                <div class="text-box contact-box">
                    <h4>Contact Us</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam urna arcu, sodales quis metus ac, dictum dapibus sem.
                    Vivamus efficitur quam a nulla eleifend pharetra. Nulla tellus nulla, tempus ac ex scelerisque, varius aliquam magna.
                    Morbi sit amet libero neque. Duis fermentum odio ac consectetur lobortis. Sed a facilisis dolor. Nunc libero magna,
                    lacinia a rutrum eu, commodo nec tellus. Pellentesque ultrices justo non sodales fermentum. Donec orci nunc, ornare a
                    dictum nec, dignissim vitae tortor.</p>
                    <button class="cta">CONTACT US</button>
                </div>
            </div>
        </div>
       </>

    );
}
export default HomePage;