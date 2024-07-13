import React, { useState, useEffect } from 'react';

const Clicker: React.FC = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Ініціалізація Telegram Web App
        window.Telegram.WebApp.ready();
    }, []);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Клікер</h1>
            <p>Лічильник: {count}</p>
            <button onClick={handleClick}>Клік</button>
        </div>
    );
};

export default Clicker;
