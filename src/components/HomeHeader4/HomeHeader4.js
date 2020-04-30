import React from 'react';
import Background from "../../assets/sea.PNG";
import {Col, Row, Button} from "antd";
import {LockOutlined, UserOutlined, MailOutlined} from "@ant-design/icons";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import './HomeHeader4.css';

export default function HomeHeader2(props) {
    return (
        <div style={{height: 750}}>
                <Row>
                    <Col span={10}>
                        <div style={{backgroundColor: '#29ddf2', width: '100%', height: 375, color: 'white'}}>
                            <div className='center' style={{padding: 105}}>
                                <h1>PANTREALISERING</h1>
                                <h1><b>Virksomhedspant</b></h1>
                            </div>
                        </div>
                        <div style={{backgroundColor: '#1bb5f2', width: '100%', height: 375, color: 'white'}}>
                            <div className='center-text' style={{padding: 105}}>
                                <h1>SAMLET PANT I TINGBOG</h1>
                                <h1><b>4.000.000</b><span style={{fontSize: '20px'}}>Kr.</span></h1>
                            </div>
                        </div>
                    </Col>
                    <Col span={14}>
                        <div style={{backgroundColor: '#109cf2', width: '100%', height: 750, color: 'white'}}>
                            <div className='center-text' style={{padding: 135}}>
                                <span style={{fontSize: '26px'}}>STATUS 5. MARTS 2019</span><br/>
                                <hr style={{color: 'white'}}/>
                                <div style={{paddingTop: 20, paddingBottom: 20}}>
                                    <span style={{fontSize: '18px'}}><span>Budrunde</span><span style={{float: 'right'}}>Afsluttet</span></span>
                                </div>
                                <hr style={{color: 'white'}}/>
                                <div style={{paddingTop: 20, paddingBottom: 20}}>
                                    <span style={{fontSize: '18px'}}><span>Salgsproces</span><span style={{float: 'right'}}>1 gang</span></span>
                                </div>
                                <hr style={{color: 'white'}}/>
                                <div style={{paddingTop: 20, paddingBottom: 20}}>
                                    <span style={{fontSize: '18px'}}><span></span><span style={{float: 'right'}}>Se historik</span></span>
                                </div>

                                <div style={{paddingTop: 70, paddingBottom: 20}}>
                                    <span style={{fontSize: '28px'}}><span>FORVENTET UDBETALING: 275.000 KR</span><span style={{float: 'right'}}></span></span>
                                </div>

                                <Row style={{height: '40px'}}>
                                    <Col span={8} style={{backgroundColor: '#0c7df2'}}></Col>
                                    <Col span={16} style={{backgroundColor: 'white'}}></Col>
                                </Row>
                                <div style={{paddingTop: 10, paddingBottom: 20}}>
                                    <span style={{fontSize: '18px'}}><span>Forventet:</span><span style={{float: 'right'}}>Tilgodehavende:</span></span><br/>
                                    <span style={{fontSize: '18px'}}><span>275.000 kr.</span><span style={{float: 'right'}}>1.000.000kr.</span></span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
        </div>
    )
}
