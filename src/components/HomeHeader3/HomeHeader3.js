import React from 'react';
import Background from "../../assets/sea.PNG";
import {Col, Row, Button} from "antd";
import {LockOutlined, UserOutlined, MailOutlined} from "@ant-design/icons";

export default function HomeHeader2(props) {
    return (
        <div style={{height: 750}}>
            <div className="box">
                <Row>
                    <Col span={12}>
                        <img src={Background} style={{width: '100%'}} height={750} alt="Flying Kites"/>
                        <div className='text2'>
                            <Row style={{marginLeft: 35}}>
                                <Col span={18}>
                                    <h3 style={{color: 'white'}}><b>HORTEN</b> KONKURSPORTAL</h3>
                                </Col>
                            </Row>

                            <div className='center' style={{marginTop: 75}}>
                                <h1 style={{color: 'white', wordSpacing: 20}}>STENLOSE MARKISEFABRIK A/S UNDER
                                    KONURS</h1>
                            </div>

                            <div style={{padding: 65}}>
                                <Row>
                                    <Col span={24}>
                                        <div style={{marginRight: 75}}>
                                            <Row gutter={16}>
                                                <Col className="gutter-row" span={8}>
                                                    <hr style={{color: 'lightblue'}}/>
                                                    <div>
                                                        <h2 style={{color: 'white'}}>CVR</h2>
                                                        <h4 style={{color: 'white'}}>34300828</h4>
                                                    </div>

                                                    <div style={{marginTop: 18}}>
                                                        <h2 style={{color: 'white'}}>ADRESSE</h2>
                                                        <h4 style={{color: 'white'}}>Dan Holmeholme 7<br/> 3660 Stenlose
                                                        </h4>
                                                    </div>
                                                </Col>
                                                <Col className="gutter-row" span={8}>
                                                    <hr style={{color: 'lightblue'}}/>
                                                    <div>
                                                        <h2 style={{color: 'white'}}>KONKURSDATO</h2>
                                                        <h4 style={{color: 'white'}}>3. oktober 2018</h4>
                                                    </div>

                                                    <div style={{marginTop: 18}}>
                                                        <h2 style={{color: 'white'}}>Horten J-NR</h2>
                                                        <h4 style={{color: 'white'}}>373789299</h4>
                                                    </div>

                                                    <div style={{marginTop: 18}}>
                                                        <h2 style={{color: 'white'}}>KURATOR</h2>
                                                        <h4 style={{color: 'white'}}>Advokat Nicolai Dyhr</h4>
                                                    </div>
                                                </Col>
                                                <Col className="gutter-row" span={8}>
                                                    <hr style={{color: 'lightblue'}}/>
                                                    <div>
                                                        <h2 style={{color: 'white'}}>SAGSBEHANDLER</h2>
                                                        <h4 style={{color: 'white'}}><MailOutlined
                                                            style={{color: 'white'}}/><span
                                                            style={{marginLeft: 5}}>Merete Jensen</span></h4>
                                                    </div>

                                                    <div style={{marginTop: 18}}>
                                                        <h2 style={{color: 'white'}}>SKERETER</h2>
                                                        <h4 style={{color: 'white'}}><MailOutlined
                                                            style={{color: 'white'}}/><span
                                                            style={{marginLeft: 5}}>Marianne Hansen</span></h4>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div style={{backgroundColor: '#109cf2', width: '100%', height: 750, color: 'white'}}>
                            <div className='text2'>
                                <Row>
                                    <Col span={8}></Col>
                                    <Col span={16}>
                                        <Row>
                                            <Col span={8}><UserOutlined style={{color: 'white'}}/><span
                                                style={{
                                                    marginLeft: 8,
                                                    fontSize: 18,
                                                    color: 'white'
                                                }}>Vores Sagar</span></Col>
                                            <Col span={8}><LockOutlined style={{color: 'white'}}/><span
                                                style={{
                                                    marginLeft: 8,
                                                    fontSize: 18,
                                                    color: 'white'
                                                }}>Vores Sagar</span></Col>
                                            <Col span={8}><span style={{fontSize: 18, color: 'white'}}>FAQ</span></Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <div style={{margin: 55}}>
                                    <h1 style={{color: 'white'}}><b>DIVIDENDE SKON</b></h1>
                                    <span style={{fontSize: '18px'}}>5. marts 2019 forventes dividenden tol <b>$95</b> at udgore</span>
                                    <Row container>
                                        <Col span={24}>
                                            <span style={{fontSize: '75px'}}>25-35<span style={{fontSize: '13px'}}>%</span>
                                             <span style={{float:'right', fontSize: '15px', marginTop: '10%'}}>Se historik ></span>
                                            </span>
                                        </Col>
                                    </Row>
                                    <hr style={{color: 'white'}}/>
                                    <Row container style={{padding: 10}}>
                                        <Col span={24}>
                                            <span style={{fontSize: '20px'}}>INFO-SKRIVELSER    Seneste 2019-07-23
                                             <span style={{float:'right', fontSize: '15px', marginTop: '1%'}}>Se historik ></span>
                                            </span>
                                        </Col>
                                    </Row>
                                    <hr style={{color: 'white'}}/>
                                    <Row container style={{padding: 10}}>
                                        <Col span={24}>
                                            <span style={{fontSize: '20px'}}>KRAV 2 Krav anmeldt, i alt 127.000 DKK
                                             <span style={{float:'right', fontSize: '15px', marginTop: '1%'}}>Se historik ></span>
                                            </span>
                                        </Col>
                                    </Row>
                                    <hr style={{color: 'white'}}/>
                                    <Button size={'large'}
                                            style={{backgroundColor: '#ffffff00', color: 'white', float: 'right', margin: 25}}>Anmeld
                                        Krav</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
