import React from 'react';
import {Row, Col} from 'antd';
import Background from '../../assets/headerImg.PNG';
import './HomeHeader.css'

export default function HomeHeader(props) {
    return(
        <div style={{height: 750}}>
            <Row>
                <Col span={12}>
                    <div className="box">
                        <img  src={Background} style={{width: '100%'}} height={750} alt="Flying Kites"/>
                            <div className="text">
                                <h1><b>HORTEN KONKURSPORTAL</b></h1>
                            </div>
                    </div>
                </Col>
                <Col span={12}>
                    <div style={{backgroundColor: '#109cf2', width: '100%', height: 750}}>

                    </div>
                </Col>
            </Row>
        </div>
    )
}
