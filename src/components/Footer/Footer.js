import React from 'react';
import {Breadcrumb} from 'antd';

export default function Footer(props) {
    return(
        <div style={{height: 250, backgroundColor: '#000000'}}>
            <div style={{paddingLeft: 85, paddingTop: 55}}>
                <h1 style={{wordSpacing: 20, color: 'white' }}><b>HORTEN</b>KONKURSPORTAL</h1>
            </div>

            <div style={{paddingLeft: 85, marginTop: 85}}>
                <Breadcrumb>
                    <Breadcrumb.Item style={{color: 'grey'}}>Horten Advokatpartnerselshab</Breadcrumb.Item>
                    <Breadcrumb.Item >
                        <a href="" style={{color: 'grey'}}>Philip Heymans Alle 7</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item >
                        <a href="" style={{color: 'grey'}}>2900 Hellerup</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item style={{color: 'white'}}>E-mail:info@hortan.dk</Breadcrumb.Item>
                </Breadcrumb>,
            </div>
        </div>
    )
}
