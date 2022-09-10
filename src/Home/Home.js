import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <div className="main">
                <h1>Demo</h1>
                <div className="router">
                    <Link to='/project01' className='home_link'>Project 01</Link>
                    <Link to='/project02' className='home_link'>Project 02</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;