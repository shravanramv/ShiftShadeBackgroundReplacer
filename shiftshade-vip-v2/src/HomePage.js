import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/upload');
    }

    return (
        <button className="start-button" onClick={handleClick}>
            Start Now!
        </button>
    );
}

export default HomePage;
