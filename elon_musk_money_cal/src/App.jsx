// App.jsx
import React, { useState } from 'react';
import './App.css';
import Header from '/workspaces/spend_like_elon/elon_musk_money_cal/src/components/Header.jsx';
import Display from '/workspaces/spend_like_elon/elon_musk_money_cal/src/components/display.jsx';

const initialWealth = 213800000000;

const numberStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#427703',
    textAlign: 'center',
    margin: '15px 0',
    // position: 'fixed',
};

function App() {
    const [wealth, setWealth] = useState(initialWealth);

    const handleWealthChange = (newWealth) => {
        setWealth(newWealth);
    };

    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <Header />
                    </div>
                </div>
                <div className="row" style={{ margin: '25px' }}>
                    <div className="col" style={numberStyle}>
                        <div className="wealth-box">
                            {wealth.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                        </div>
                    </div>
                </div>
                <div className="row" style={{ margin: '25px' }}>
                    <div className="col">
                        <Display wealth={wealth} onWealthChange={handleWealthChange} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
