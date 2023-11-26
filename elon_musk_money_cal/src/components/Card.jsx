import React, { useState } from 'react';

function Card({ title, price, imageUrl, onBuy, onSell }) {
    const [count, setCount] = useState(0);

    const handleBuy = () => {
        setCount(count + 1);
        onBuy(price);
    };

    const handleSell = () => {
        if (count > 0) {
            setCount(count - 1);
            onSell(price);
        }
    };

    return (
        <div className="card border-primary" style={{ width: "18rem", margin: "10px" }}>
            <img src={imageUrl} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
                <button onClick={handleBuy} className="btn btn-primary">
                    Buy ({count})
                </button>
                <button onClick={handleSell} className="btn btn-danger">
                    Sell
                </button>
            </div>
        </div>
    );
}

export default Card;
