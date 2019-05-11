import './home.scss';
import dots2 from '../../assets/images/dots-box2.png';
import strips2 from '../../assets/images/strips2.png';
import cupcakes from '../../assets/images/cupcakes.png';


import React from 'react';

export default props => {
    return (
        <div>
            <div>
                <h1>We cherish the sweet moments...</h1>
                <p>Sweet Corner's story began first from our passion for sweets, which is inspired by our everyday job and also by the acknowledged weakness for sweets.
            </p>
                <p>For us, the Sweet corner means: the right amount of sweet, flawless appearance, the combination of shape, color and proportion and a right and balanced decor for the event.
            </p>
                <p>We have been baking gourmet cupcakes, 100% from Scratch, since day one. We always use the finest and most natural ingredients we can find.
            </p>
                <h1>We can make happiness with so little!</h1>
                <p>We can provide services for Weddings, Bar & Bat Mitzvahs, Birthdays, Showers, Corporate Events, and any other special occasion!
            </p>
                <p>Our expert bakers are waiting to create a memorable, unique cupcake bursting with freshness and flavor just for you.</p>
                <p>Their delicious taste, great variety and their sweet universe, colorful and flavorful cupcakes make the best choice for a chic desert. How could you resist these delicious cupcakes?
            </p>
            </div>
            <div className="tagline2 center" >Please note you will be overwhelmed by the sweet content</div>
            <div>
                <img src={cupcakes} />
            </div>
        </div>
    )
}