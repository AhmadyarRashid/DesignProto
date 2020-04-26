import React, {Component} from 'react';
import './Card.css';

export default function Card(props) {
    return (
        <div className="container">
            <div style={{height: 250, backgroundColor: 'white'}} alt="OPSTART" className="image">
                <div className='text' style={{color: '#109cf2'}}>{props.value}</div>
            </div>
            <div className="overlay">
                {/*<div className="text">Hello World</div>*/}
                <div style={{height: '40%', backgroundColor: '#1279f2'}}>
                    <h3 style={{padding: 8, color: 'white'}}>1<span style={{float: 'right'}}>{props.value}</span></h3>
                </div>
                <div style={{height: '60%'}}>
                    <center>
                        <h3 style={{padding: 8, color: 'white'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</h3>
                    </center>
                </div>
            </div>
        </div>
    )
}
