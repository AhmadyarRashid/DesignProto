import React from 'react';
import {Radio, Button} from 'antd';
import {TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function (props) {
    const classes = useStyles();
    const [radioValue, setRadioValue] = React.useState(1);
    const [step, setStep] = React.useState(1);
    const onChange = e => {
        console.log('radio checked', e.target.value);
        setRadioValue(e.target.value)
    };
    return (
        <div style={{height: 1250, width: '100%', backgroundColor: '#109cf2', color: 'white'}}>
            <div style={{width: 750, height: 550, margin: '0 auto'}}>
                <div style={{paddingTop: 175}}>
                    <div style={{height: 450, width: 750}}>
                        <div>
                            <span style={{fontSize: 25}}>ANMELD KRAV</span>
                            <div style={{float: 'right'}}>
                                {step == 1 ?
                                    <span style={{backgroundColor: 'black', padding: 10, marginRight: 8}}>1</span> :
                                    <span style={{
                                        backgroundColor: 'white',
                                        color: 'black',
                                        padding: 10,
                                        marginRight: 8
                                    }}>1</span>}
                                {step == 2 ?
                                    <span style={{backgroundColor: 'black', padding: 10, marginRight: 8}}>2</span> :
                                    <span style={{
                                        backgroundColor: 'white',
                                        color: 'black',
                                        padding: 10,
                                        marginRight: 8
                                    }}>2</span>}
                                {step == 3 ?
                                    <span style={{backgroundColor: 'black', padding: 10, marginRight: 8}}>3</span> :
                                    <span style={{
                                        backgroundColor: 'white',
                                        color: 'black',
                                        padding: 10,
                                        marginRight: 8
                                    }}>3</span>}
                            </div>
                            {step == 1 && <div>
                                <div style={{width: '100%', backgroundColor: '#36c0f2', height: 180, color: 'black'}}>
                                    <div style={{padding: 42}}>
                                        <span style={{fontSize: 25}}>HVEM ER KREDITOR</span><br/>
                                        <span>Udfyld ammeldelse af krav nedenfor ved at vaelge kreditor, angive kravtype og belob samt at vaelge, hven der skal kontaktes, hvis det bliver relevent at idbetale dividenede</span>
                                    </div>
                                </div>
                                <div style={{width: '100%', padding: 42, backgroundColor: 'white', color: 'black'}}>
                                    <span style={{color: 'black'}}><b>Vaelg kreditor</b></span><br/>
                                    <Radio.Group onChange={onChange} value={radioValue}>
                                        <Radio value={1}>Nykredit A/S, CVR: 12719248 (Logget ind)</Radio><br/>
                                        <Radio value={2}>En anden</Radio>
                                    </Radio.Group>

                                    {radioValue == 2 && <div style={{marginTop: 25}}>
                                        <TextField style={{padding: 15, width: '70%'}}
                                                   placeholder="CVR eller CPR-nummer pa kreditor"/><br/>
                                        <TextField style={{padding: 15, width: '70%'}}
                                                   placeholder="Navn pa kreditor"/><br/>
                                        <TextField style={{padding: 15, width: '70%'}}
                                                   placeholder="Kreditors reference (valgfri)"/>
                                    </div>}
                                </div>
                                <div style={{width: '100%', backgroundColor: '#36c0f2', height: 120, color: 'black'}}>
                                    <div style={{padding: 15}}>
                                        <Button type='primary' onClick={e => setStep(2)}
                                                style={{
                                                    marginTop: 25,
                                                    height: 60,
                                                    width: 150,
                                                    padding: 8,
                                                    float: 'right'
                                                }}>Naeste</Button>
                                    </div>
                                </div>
                            </div>}
                            {step == 2 && <div>
                                <div style={{width: '100%', backgroundColor: '#36c0f2', height: 180, color: 'black'}}>
                                    <div style={{padding: 42}}>
                                        <span style={{fontSize: 25}}>ANGIV KRAVTYPE OG BELOB</span><br/>
                                        <span>Udfyld ammeldelse af krav nedenfor ved at vaelge kreditor, angive kravtype og belob samt at vaelge, hven der skal kontaktes, hvis det bliver relevent at idbetale dividenede</span>
                                    </div>
                                </div>
                                <div style={{width: '100%', padding: 42, backgroundColor: 'white', color: 'black'}}>
                                    <FormControl className={classes.formControl} style={{width: '70%'}}>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"

                                            value={10}
                                        >
                                            <MenuItem value={10}>Vaelg Kravtype</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <br/>
                                    <FormControl className={classes.formControl} style={{width: '40%'}}>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"

                                            value={10}
                                        >
                                            <MenuItem value={10}>Valuta</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <TextField placeholder="Belob" style={{padding: 8}}/><br/>
                                    <div style={{marginTop: 25}}>
                                        <span style={{color: 'black'}}><b>Sikkerhed ?</b></span><br/>
                                        <span style={{color: 'black'}}>Er der sikkerhed for kravet?</span><br/>
                                        <Radio.Group onChange={onChange} value={radioValue}>
                                            <Radio value={1}>Ja</Radio><br/>
                                            <Radio value={2}>Nej</Radio>
                                        </Radio.Group>
                                    </div>
                                    <br/>
                                    <div style={{marginTop: 8}}>
                                        <TextField style={{padding: 8, width: '70%'}} placeholder='Evt. Bemaekninger'/>
                                    </div>
                                    <p style={{marginTop: 12}}>Upload document</p>
                                </div>
                                <div style={{width: '100%', backgroundColor: '#36c0f2', height: 120, color: 'black'}}>
                                    <div style={{padding: 15}}>
                                        <Button type='primary'
                                                onClick={e => setStep(3)}
                                                style={{
                                                    marginTop: 25,
                                                    height: 60,
                                                    width: 150,
                                                    padding: 8,
                                                    marginRight: 8,
                                                    float: 'right'
                                                }}>Naeste</Button>
                                        <Button type='primary'
                                                style={{
                                                    marginTop: 25,
                                                    height: 60,
                                                    width: 150,
                                                    padding: 8,
                                                    backgroundColor: '#36C0F2',
                                                    color: 'white',
                                                    marginRight: 8,
                                                    border: 'none',
                                                    float: 'right'
                                                }}>Tilfoj kravtype</Button>
                                        <Button type='primary'
                                                onClick={e => setStep(1)}
                                                style={{
                                                    marginTop: 25,
                                                    height: 60,
                                                    width: 150,
                                                    padding: 8,
                                                    marginRight: 8,
                                                    backgroundColor: '#36C0F2',
                                                    border: 'none',
                                                    color: 'white',
                                                    float: 'right'
                                                }}>Tilbage</Button>
                                    </div>
                                </div>
                            </div>}
                            {step == 3 && <div>
                                <div style={{width: '100%', backgroundColor: '#36c0f2', height: 180, color: 'black'}}>
                                    <div style={{padding: 42}}>
                                        <span style={{fontSize: 25}}>ANGIV KRAVTYPE OG BELOB</span><br/>
                                        <span>Udfyld ammeldelse af krav nedenfor ved at vaelge kreditor, angive kravtype og belob samt at vaelge, hven der skal kontaktes, hvis det bliver relevent at idbetale dividenede</span>
                                    </div>
                                </div>
                                <div style={{width: '100%', padding: 42, backgroundColor: 'white', color: 'black'}}>
                                   <div style={{marginTop: 12}}>
                                       <span style={{fontSize: 18}}>1/ KREDITOR</span><br/>
                                       <span style={{marginLeft: 15}}>Virksomhedsnavn: Virksomhedien ApS</span><br/>
                                       <span style={{marginLeft: 15}}>CVR: 23994940</span>
                                   </div>
                                    <div style={{marginTop: 12}}>
                                        <span style={{fontSize: 18}}>2/ KRAV</span><br/>
                                        <span style={{marginLeft: 15}}>Virksomhedsnavn: Virksomhedien ApS</span><br/>
                                        <span style={{marginLeft: 15}}>CVR: 23994940</span><br/>
                                        <span style={{marginLeft: 25}}>A/</span><br/>
                                        <span style={{marginLeft: 25}}>Kravtype: 94 (fortrinsstillede krav)</span><br/>
                                        <span style={{marginLeft: 25}}>Belob: DKK 20.000</span><br/>
                                        <span style={{marginLeft: 25}}>Sikkerhed: Nej</span><br/>
                                        <span style={{marginLeft: 25}}>Documentation: <span style={{color: 'blue'}}>Faktura2019-3992.pdf, brev-2292939.pdf</span></span><br/>
                                        <span style={{marginLeft: 25}}>B/</span><br/>
                                        <span style={{marginLeft: 25}}>Kravtype: 96 (afgiftskrav)</span><br/>
                                        <span style={{marginLeft: 25}}>Belob: DKK 10.000</span><br/>
                                        <span style={{marginLeft: 25}}>Sikkerhed: ja</span><br/>
                                        <span style={{marginLeft: 25}}>Documentation: <span style={{color: 'blue'}}>Faktura2019-3992.pdf, brev-2292939.pdf</span></span>
                                    </div>
                                    <div style={{marginTop: 12}}>
                                        <span style={{fontSize: 18}}>3/ KONTAKTOPLYSNINGER</span><br/>
                                        <span style={{marginLeft: 15}}>Email: <span style={{color: 'blue'}}>Navn@mail.dk</span></span><br/>
                                        <span style={{marginLeft: 15}}>telefonnummer: <span style={{color: 'blue'}}>+45 29388200</span></span><br/>
                                    </div>
                                </div>
                                <div style={{width: '100%', backgroundColor: '#36c0f2', height: 120, color: 'black'}}>
                                    <div style={{padding: 15}}>
                                        <Button type='primary'
                                                onClick={e => setStep(4)}
                                                style={{
                                                    marginTop: 25,
                                                    height: 60,
                                                    width: 150,
                                                    padding: 8,
                                                    marginRight: 8,
                                                    float: 'right'
                                                }}>Indsend Krav</Button>
                                        <Button type='primary'
                                                onClick={e => setStep(2)}
                                                style={{
                                                    marginTop: 25,
                                                    height: 60,
                                                    width: 150,
                                                    padding: 8,
                                                    marginRight: 8,
                                                    backgroundColor: '#36C0F2',
                                                    border: 'none',
                                                    color: 'white',
                                                    float: 'right'
                                                }}>Tilbage</Button>
                                    </div>
                                </div>
                            </div>}
                            {step == 4 && <div>
                                <div style={{width: '100%', backgroundColor: '#36c0f2', height: 180, color: 'black'}}>
                                    <div style={{padding: 42}}>
                                        <span style={{fontSize: 25}}>KRAV ER INDSENDT</span><br/>
                                        <span>Print eller gem en kopi til dit eget bogholderi. Der sendes besked og gaeldbogsnummer til den angivne e-mail</span>
                                        <Row style={{marginTop: 25}}>
                                            <Col span={5}>Download</Col>
                                            <Col span={5}>Print</Col>
                                        </Row>
                                    </div>
                                </div>
                                <div style={{width: '100%', padding: 42, backgroundColor: 'white', color: 'black'}}>
                                    <div style={{marginTop: 12}}>
                                        <span style={{fontSize: 18}}>1/ KREDITOR</span><br/>
                                        <span style={{marginLeft: 15}}>Virksomhedsnavn: Virksomhedien ApS</span><br/>
                                        <span style={{marginLeft: 15}}>CVR: 23994940</span>
                                    </div>
                                    <div style={{marginTop: 12}}>
                                        <span style={{fontSize: 18}}>2/ KRAV</span><br/>
                                        <span style={{marginLeft: 15}}>Virksomhedsnavn: Virksomhedien ApS</span><br/>
                                        <span style={{marginLeft: 15}}>CVR: 23994940</span><br/>
                                        <span style={{marginLeft: 25}}>A/</span><br/>
                                        <span style={{marginLeft: 25}}>Kravtype: 94 (fortrinsstillede krav)</span><br/>
                                        <span style={{marginLeft: 25}}>Belob: DKK 20.000</span><br/>
                                        <span style={{marginLeft: 25}}>Sikkerhed: Nej</span><br/>
                                        <span style={{marginLeft: 25}}>Documentation: <span style={{color: 'blue'}}>Faktura2019-3992.pdf, brev-2292939.pdf</span></span><br/>
                                        <span style={{marginLeft: 25}}>B/</span><br/>
                                        <span style={{marginLeft: 25}}>Kravtype: 96 (afgiftskrav)</span><br/>
                                        <span style={{marginLeft: 25}}>Belob: DKK 10.000</span><br/>
                                        <span style={{marginLeft: 25}}>Sikkerhed: ja</span><br/>
                                        <span style={{marginLeft: 25}}>Documentation: <span style={{color: 'blue'}}>Faktura2019-3992.pdf, brev-2292939.pdf</span></span>
                                    </div>
                                    <div style={{marginTop: 12}}>
                                        <span style={{fontSize: 18}}>3/ KONTAKTOPLYSNINGER</span><br/>
                                        <span style={{marginLeft: 15}}>Email: <span style={{color: 'blue'}}>Navn@mail.dk</span></span><br/>
                                        <span style={{marginLeft: 15}}>telefonnummer: <span style={{color: 'blue'}}>+45 29388200</span></span><br/>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
