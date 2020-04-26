import React from 'react';
import {Row, Col} from 'antd';
import Background from '../../assets/headerImg.PNG';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import { Select } from 'antd';
import './HomeHeader.css'

const { Option } = Select;

export default function HomeHeader(props) {
    return (
        <div style={{height: 750}}>
            <Row>
                <Col span={12}>
                    <div className="box">
                        <img src={Background} style={{width: '100%'}} height={750} alt="Flying Kites"/>
                        <div className="text">
                            <h3 style={{marginLeft: 125}}><b>HORTEN KONKURSPORTAL</b></h3>
                        </div>
                    </div>
                </Col>
                <Col span={12}>
                    <div style={{backgroundColor: '#109cf2', width: '100%', height: 750, color: 'white'}}>
                        <div style={{padding: 75}}>
                            <Row>
                                <Col span={6}></Col>
                                <Col span={6}><UserOutlined/><span style={{marginLeft: 8}}>Vores Sagar</span></Col>
                                <Col span={6}><LockOutlined/><span style={{marginLeft: 8}}>Vores Sagar</span></Col>
                                <Col span={6}>FAQ</Col>
                            </Row>
                        </div>
                        <div style={{marginTop: 145}}>
                            <center><h2 style={{color:'white', fontSize: '45px'}}>FIND SAG</h2></center>
                        </div>

                        <div style={{marginTop: 35}}>
                            <center>
                                <Select
                                    showSearch
                                    style={{ width: 450, padding: 25}}
                                    placeholder="Select a person"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="jack" style={{padding: 10}}>Jack</Option>
                                    <Option value="lucy" style={{padding: 10}}>Lucy</Option>
                                    <Option value="tom" style={{padding: 10}}>Tom</Option>
                                </Select>
                            </center>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
