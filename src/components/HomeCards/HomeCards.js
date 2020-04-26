import React, {Component} from 'react';
import {Row, Col} from 'antd';
import Card from '../Card/Card';

const style = { background: '#0092ff', padding: '8px 0' };
export default function HomeCards (){
    return(
        <div style={{height: 450, backgroundColor: '#FFF4D7'}}>
            <center>
                <h1 style={{padding: 45, wordSpacing: 4}}>SADAN FORLOBER EN KONKURSSAG</h1>
            </center>

            <Row style={{padding: 5}} gutter={16}>
                <Col className="gutter-row" span={6}>
                    <Card/>
                </Col>
                <Col className="gutter-row" span={6}>
                    <Card/>
                </Col>
                <Col className="gutter-row" span={6}>
                    <Card/>
                </Col>
                <Col className="gutter-row" span={6}>
                    <Card/>
                </Col>
            </Row>
        </div>
    )
}
