import React from 'react'
import ReactDOM from 'react-dom/client'
import { restaurants } from '../materials/mock.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <div>
        { restaurants.map((restaurant) =>
            <div>
                <h2>{restaurant.name}</h2>
                <h3>Menu</h3>
                <ul>
                    {restaurant.menu.map((item) =>
                    <li>{item.name}</li>)}
                </ul>
                <h3>Reviews</h3>
                <ul>
                    {restaurant.reviews.map((review) =>
                        <li>{review.text}</li>)}
                </ul>
            </div>
        )}
    </div>
)