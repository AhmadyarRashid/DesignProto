import React from 'react';
import {Row, Col} from 'antd';

export default function () {
    return (
        <div style={{backgroundColor: '#DCDCDC', paddingBottom: 15}}>
            <div style={{paddingLeft: 130, paddingTop: 35, paddingRight: 130}}>
                <h1>VORES TILGODEHAVENDE</h1>
                <hr style={{color:'#f4eeec'}} style={{color: 'black'}}/>
                <div style={{paddingTop: '25px'}}>
                    <span style={{fontSize: '18px'}}><span>Samlet tilgodehavende</span><span style={{float: 'right'}}>1.000.000 kr.</span></span>
                </div>
                <hr style={{color:'#f4eeec'}} style={{color: 'lightgrey'}}/>
                <div style={{paddingTop: '25px'}}>
                    <span style={{fontSize: '18px'}}><span>Forventet udetaling</span><span style={{float: 'right'}}>2000.000 kr.</span></span>
                </div>
                <hr style={{color:'#f4eeec'}} style={{color: 'lightgrey'}}/>
                <div style={{padding: 15, background: '#f5f5dc'}}>
                    <Row>
                        <Col span={16}>Pan i virksomhed</Col>
                        <Col span={4}><span style={{textAlgin: 'right'}}>Afsluttet</span></Col>
                        <Col span={4}><span style={{textAlgin: 'right'}}>Se status</span></Col>
                    </Row>
                </div>
                <div style={{padding: 15, marginTop: 5, background: '#f5f5dc'}}>
                    <Row>
                        <Col span={16}>Pan i virksomhed</Col>
                        <Col span={4}><span style={{textAlgin: 'right'}}>Afsluttet</span></Col>
                        <Col span={4}><span style={{textAlgin: 'right'}}>Se status</span></Col>
                    </Row>
                </div>

                <div style={{margin: 40}}>
                    <h1>PAINT</h1>
                    <hr style={{color:'#f4eeec'}} style={{color: 'black'}}/>
                    <Row style={{padding: 15}}>
                        <Col span={10}>Ejendom: Dan Holme 7, 3660 Stenlose</Col>
                        <Col span={10}>
                            <center><span>Offentling vurdering: 1.700.000 kr</span></center>
                        </Col>
                        <Col span={4}>
                            <center><span> More info</span></center>
                        </Col>
                    </Row>
                    <br/>
                    <Row style={{padding: 15}}>
                        <Col span={10}>Virksomhed: Stenlose Marisefabrik A/S</Col>
                        <Col span={10}>
                            <center><span>Samlet pant i tingbog 4.000.000 kr</span></center>
                        </Col>
                        <Col span={4}>
                            <center><span> More info</span></center>
                        </Col>
                    </Row>
                    <br/>
                </div>

                <div style={{margin: 40}}>
                    <h1>BALANCE</h1>
                    <hr style={{color:'#f4eeec'}} style={{color: 'black'}}/>
                    <Row gutter={16}>
                        <Col className="gutter-row" span={12}>
                            <div style={{padding: 20, backgroundColor: 'black', color: 'white'}}>
                                AKTIVER
                            </div>
                            <div style={{marginTop: 15}}>
                                <div style={{padding: 10}}>
                                    1/ OMSAETNINGSAKTIVER
                                </div>
                                <hr style={{color:'#f4eeec'}}/>
                                <div style={{padding: 10, marginLeft: 25}}>
                                    <span>a) Varelager <span style={{float: 'right'}}>VP</span></span>
                                </div>
                                <hr style={{color:'#f4eeec'}}/>
                                <div style={{padding: 10, marginLeft: 25}}>
                                    <span>b) Koretojer <span style={{float: 'right'}}>0</span></span>
                                </div>
                                <hr style={{color:'#f4eeec'}}/>
                                <div style={{padding: 10, marginLeft: 25}}>
                                    <span>c) Tilgodehavender <span style={{float: 'right'}}>EP</span></span>
                                </div>
                                <hr style={{color:'#f4eeec'}}/>
                                <div style={{padding: 10, marginLeft: 25}}>
                                    <span>d) Likvide beholdninger  <span style={{float: 'right'}}>76,055</span></span>
                                </div>
                                <hr style={{color:'#f4eeec'}}/>
                            </div>
                            <div style={{marginTop: 15}}>
                                <div style={{padding: 10}}>
                                    2/ MATERIELLE AKTIVER
                                </div>
                                <hr style={{color:'#f4eeec'}}/>
                                <div style={{padding: 10, marginLeft: 25}}>
                                    <span>a) Fast ejendom <span style={{float: 'right'}}>2,088,457</span></span>
                                </div>
                                <hr style={{color:'#f4eeec'}}/>
                                <div style={{padding: 10, marginLeft: 25}}>
                                    <span>b) Driftsmidler/inventar <span style={{float: 'right'}}></span></span>
                                </div>
                                <hr style={{color:'#f4eeec'}}/>
                            </div>
                            <div style={{marginTop: 15}}>
                                <div style={{padding: 10}}>
                                    3/ IMMATERIELLE ANLAEGSAKTIVER
                                </div>
                                <hr style={{color:'#f4eeec'}}/>
                                <div style={{padding: 10, marginLeft: 25}}>
                                    <span>a) Goodwill, domaenenavne <span style={{float: 'right'}}>VP</span></span>
                                </div>
                                <hr style={{color:'#f4eeec'}}/>
                                <div style={{padding: 10, marginLeft: 25}}>
                                    <span>b) Ovrige immaterielle aktiver <span style={{float: 'right'}}>0</span></span>
                                </div>
                                <hr style={{color:'#f4eeec'}}/>
                            </div>
                            <div style={{marginTop: 15}}>
                                <div style={{padding: 10}}>
                                    4/ FINANSIELLE ANLAEGSAKTIVER
                                </div>
                                <hr style={{color:'#f4eeec'}}/>
                                <div style={{padding: 10, marginLeft: 25}}>
                                    <span>a) Vaerdipapier <span style={{float: 'right'}}>0</span></span>
                                </div>
                                <hr style={{color:'#f4eeec'}}/>
                                <div style={{padding: 10, marginLeft: 25}}>
                                    <span>b) Kapitalandele <span style={{float: 'right'}}>0</span></span>
                                </div>
                                <hr style={{color:'#f4eeec'}}/>
                            </div>
                            <div style={{marginTop: 45}}>
                                <span>Omfattet af virksomhedspant</span><br/>
                                <span>Omfattet af ejendomspant</span><br/>
                                <span>Omfattet af ovrige pant</span>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={12}>
                            <div style={{padding: 20, backgroundColor: 'black', color: 'white'}}>
                                PASSIVER
                            </div>
                            <div style={{marginTop: 15}}>
                                <div style={{padding: 21}}>
                                    <span></span>
                                </div>
                                <hr style={{color:'#f4eeec'}}/>
                                <div style={{padding: 10, marginLeft: 25}}>
                                    <span>$93, anslaet <span style={{float: 'right'}}>450,000</span></span>
                                </div>
                                <hr style={{color:'#f4eeec'}}/>
                                <div style={{padding: 10, marginLeft: 25}}>
                                    <span>$94 <span style={{float: 'right'}}>0</span></span>
                                </div>
                                <hr style={{color:'#f4eeec'}}/>
                                <div style={{padding: 10, marginLeft: 25}}>
                                    <span>$95 <span style={{float: 'right'}}>3,116,702</span></span>
                                </div>
                                <hr style={{color:'#f4eeec'}}/>
                                <div style={{padding: 10, marginLeft: 25}}>
                                    <span>$96 <span style={{float: 'right'}}>0</span></span>
                                </div>
                                <hr style={{color:'#f4eeec'}}/>
                                <div style={{padding: 10, marginLeft: 25}}>
                                    <span>$97 <span style={{float: 'right'}}>3,147,038</span></span>
                                </div>
                                <hr style={{color:'#f4eeec'}}/>
                                <div style={{padding: 10, marginLeft: 25}}>
                                    <span>$98 <span style={{float: 'right'}}></span></span>
                                </div>
                                <hr style={{color:'#f4eeec'}}/>
                                <div style={{padding: 10, marginLeft: 25}}>
                                    <span>Separatistkrav <span style={{float: 'right'}}>0</span></span>
                                </div>
                                <hr style={{color:'#f4eeec'}}/>

                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}
