import React, {Component} from 'react';
import './Card.css';

export default function Card(props) {
    return (
        <div className="container">
            <div style={{height: 250, backgroundColor: 'white'}}  alt="OPSTART" className="image">
                <div className='text' style={{color: '#109cf2'}}>OPSTART</div>
            </div>
            <div className="overlay">
                <div className="text">Hello World</div>
            </div>
        </div>
    )
}
