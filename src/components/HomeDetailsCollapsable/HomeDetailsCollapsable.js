import React from 'react';
import {Row, Col} from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    table: {
        minWidth: 650,
    },
}));

export default function () {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Inventar', 'N/A', '55.000', '25.500', '15.500'),
        createData('Driftsmaterial', '355.791', '448.200', '258.800', '113.400'),
        createData('kaeretojer', 'N/A', '50.500', '32.000', '18.500'),
        createData('varelager', '3.109.312', '1.904.023', '1.199.534', '350.000'),
        createData('Debitorer', '2.904.273', 'N/A', 'N/A', 'N/A'),
        createData('IP', '3.588', 'N/A', 'N/A', 'N/A'),
        createData('Igangvaerende arbejder', 'N/A', 'N/A', 'N/A', 'N/A'),
    ];

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div style={{backgroundColor: '#DCDCDC', paddingBottom: 15}}>
            <div style={{paddingLeft: 130, paddingTop: 35, paddingRight: 130}}>
                <h1>OVERBLIK</h1>
                <hr style={{color:'#f4eeec'}} style={{color: 'black'}}/>

                <div className={classes.root}>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.heading}>1/ Projektplan</Typography>
                            <Typography className={classes.secondaryHeading}>Afsluttet</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                maximus est, id dignissim quam.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography className={classes.heading}>2/ Salg af aktiver</Typography>
                            <Typography className={classes.secondaryHeading}>1 gang</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={{display: 'block', padding: 25}}>
                            <h3><b>Anslaet Provenu</b></h3><br/>
                            <h3><b>Vaerdier og vurderinger</b></h3><br/>
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Aktivklasser</TableCell>
                                            <TableCell align="right">Balance Regskabsvaerdi</TableCell>
                                            <TableCell align="right">Vurderiing Fortsat drift</TableCell>
                                            <TableCell align="right">Vurdering Malrette salg</TableCell>
                                            <TableCell align="right">Vurdering Tvangssalg</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.name}>
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right">{row.calories}</TableCell>
                                                <TableCell align="right">{row.fat}</TableCell>
                                                <TableCell align="right">{row.carbs}</TableCell>
                                                <TableCell align="right">{row.protein}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer><br/><br/>
                            <h3><b>Budtype</b></h3><br/>
                            <h3><b>Budbetingelser</b></h3><br/>
                            <h3><b>der onskers bud pa samtlige aktiver:</b></h3><br/>
                            <ul>
                                <li>Varelager bestaende af diverse alumnium, el-arktikler, stof mv.</li>
                                <li>Driftsmidler og driftsinventar, herunder kontormaterial of productionsmaskiner.</li>
                                <li>Varebil af market Toyota, Verso Sportsvan, argang 2011. kort ca. 200.000 km.</li>
                                <li>Tre pahaengsvoge af forskelling storrelse samt en udstillingstrailler.</li>
                                <li>Erhvervsejendom beliggende Dam Holme 7,3660 Stenlose.</li>
                                <li>Diverse debitorer og igangvaerender</li>
                                <li>Ejendommen kan dog kobes saerskilt.</li>
                            </ul>
                            <h3 style={{color: 'blue'}}><b>Less mere</b></h3>
                            <br/><br/>
                            <h3><b>Documenter</b></h3>
                            <h3>Dudbetingelser udsendt 27-10-2019[pdf]</h3>
                            <h3>Documenter der er relevent og har en lang title maske endue laengere [docx]</h3>
                            <h3>Et trdje document [jpg]</h3>

                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography className={classes.heading}>3/ Afregning af patent og afslutning</Typography>
                            <Typography className={classes.secondaryHeading}>Afventer</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            </div>
        </div>
    )
}
