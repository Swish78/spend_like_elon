// Display.jsx
import React, { useState } from 'react';
import Card from './Card.jsx';

function Display({ wealth, onWealthChange }) {
    const cardData = [
        { title: 'Ferrari', price: 250000, imageUrl: 'src/assets/ferrari.jpg' },
        { title: 'Tesla', price: 75000, imageUrl: 'src/assets/tesla.jpg' },
        { title: 'Yacht', price: 7500000, imageUrl: 'src/assets/yacht.jpg' },
        { title: 'Apache Helicopter', price: 31000000, imageUrl: 'src/assets/apache-helicopter.jpg' },
        { title: 'Acre of Farmland', price: 3000, imageUrl: 'src/assets/acre-of-farmland.jpg' },
        { title: 'Rolex', price: 15000, imageUrl: 'src/assets/rolex.jpg' },
        { title: 'Gold Bar', price: 700000, imageUrl: 'src/assets/gold-bar.jpg' },
        { title: 'Formula 1 Car', price: 15000000, imageUrl: 'src/assets/formula-1-car.jpg' },
        { title: 'Boeing 747', price: 148000000, imageUrl: 'src/assets/boeing-747.jpg' },
    ];

    const [selectedItems, setSelectedItems] = useState({});

    const handleBuy = (itemPrice) => {
        const newWealth = wealth - itemPrice;
        onWealthChange(newWealth);

        setSelectedItems((prevSelectedItems) => {
            const newCount = prevSelectedItems[itemPrice] ? prevSelectedItems[itemPrice] + 1 : 1;
            return { ...prevSelectedItems, [itemPrice]: newCount };
        });
    };

    const handleSell = (itemPrice) => {
        setSelectedItems((prevSelectedItems) => {
            const newCount = prevSelectedItems[itemPrice] ? prevSelectedItems[itemPrice] - 1 : 0;
            if (newCount === 0) {
                const { [itemPrice]: _, ...rest } = prevSelectedItems;
                return rest;
            }
            return { ...prevSelectedItems, [itemPrice]: newCount };
        });

        const newWealth = wealth + itemPrice;
        onWealthChange(newWealth);
    };

    const hasSelectedItems = Object.keys(selectedItems).length > 0;

    return (
        <div>
            <div className="row" style={{ margin: '25px' }}>
                {cardData.map((item, index) => (
                    <div className="col" key={index}>
                        <Card {...item} onBuy={() => handleBuy(item.price)} onSell={() => handleSell(item.price)} />
                    </div>
                ))}
            </div>
            {hasSelectedItems && (
                <div>
                    <h4>Selected Items:</h4>
                    <ol className="list-group list-group-numbered">
                        {Object.entries(selectedItems).map(([price, count , name]) => (
                            <li key={price} className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{`Item: ${name} Item Price: ${parseInt(price).toLocaleString('en-US', {
                                        style: 'currency',
                                        currency: 'USD',
                                    })}`}</div>
                                    {`Count: ${count}`}
                                </div>
                                <span className="badge bg-primary rounded-pill">{parseInt(price).toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                })}</span>
                            </li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    );
}

export default Display;
