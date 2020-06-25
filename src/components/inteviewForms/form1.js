import React, { useState, useContext }  from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import GridList from '@material-ui/core/GridList';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { MedContext } from '../internalMedContext'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    gridList: {
        width: 1000,
       
        textAlign: 'center',
        margin:10,
        padding:3
      },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'black',
    },
}));




const CenteredGrid = () => {
    const { t, i18n } = useTranslation();
    const problemtodays = [
        {name: t('internalMedcine.Fever') + "/発熱", value:"Fever"},
        {name: t('internalMedcine.Cough')+"/咳", value:"Cough"},
        {name: t('internalMedcine.Runnynose') +"/鼻水", value:"Runnynose"},
        {name: t('internalMedcine.Phlegm') +"/痰", value:"Phlegm"},
        {name: t('internalMedcine.Difficultybreathing')+"/息が苦しい", value:"Difficultybreathing"},
        {name: t('internalMedcine.Palpitation')+" /動悸", value:"Palpitation"},
        {name: t('internalMedcine.Feelsulggish')+" /身体がだるい", value:"Feelsulggish"},
        {name: t('internalMedcine.Geteasilytired')+"/疲れやすい", value:"Geteasilytired"},
        {name: t('internalMedcine.Shortnessof')+"/息切れ", value:"shortness of breath"},
        {name: t('internalMedcine.Dizziness')+" /めまい", value:"Dizziness"},
        {name: t('internalMedcine.Lossappetite')+" /食欲がない", value:"Lossappetite"},
        {name: t('internalMedcine.Vomiting')+"/嘔吐", value:"Vomiting"},
        {name: t('internalMedcine.Bloodystool')+"/血便", value:"Bloodystool"},
        {name: t('internalMedcine.Frequent')+"/頻尿", value:"frequenturination"},
        {name: t('internalMedcine.Bloodyurine')+"/血尿", value:"Bloodyurine"},
        {name: t('internalMedcine.Weightloss')+"/体重減少", value:"Weightloss"},
        {name: t('internalMedcine.Feelthirsty')+"/喉が渇く", value:"Feelthirsty"},
        {name: t('internalMedcine.Hypertension')+"/高血圧", value:"Hypertension"},
        {name: t('internalMedcine.Paralysis' )+"/ 麻痺", value:"Paralysis"},
        {name: t('internalMedcine.Swelling')+"/むくみ", value:"Swelling"},
        {name: t('internalMedcine.Hives')+"/じんましん", value:"Hives"},
        {name: t('internalMedcine.Insomnia' ), value:"Insomnia"},
        {name: t('internalMedcine.Numbness')+"/しびれ", value:"Numbness"},
        {name: t('internalMedcine.Nausea')+"/吐き気", value:"Nausea"},
        {name: t('internalMedcine.Diarrhea')+"/下痢", value:"Diarrhea"},
        {name: t('internalMedcine.Itchiness')+"/かゆみ", value:"itchiness"},
        {name: t('internalMedcine.Pain')+"/痛み", value:"Pain"},
        {name: t('internalMedcine.Other') +"/その他：", value:"others"},
        
       ]

       const stools = [
        {name: t('internalMedcine.Grayishwhite') +"/ 灰白色", value:"Grayishwhite"},
        {name: t('internalMedcine.Brown') +"/ 茶色", value:"Brown"},
        {name: t('internalMedcine.Black') +"/黒色", value:"Black"},
        {name: t('internalMedcine.bloody') +"/血便", value:"bloody"},
        {name: t('internalMedcine.watery') +"/水様", value:"watery"},
        {name: t('internalMedcine.Soft') +"/軟便", value:"Soft"},
        {name: t('internalMedcine.Hard') +"/硬い便", value:"Hard"},
       ]
    

    const [values, setValues] = useContext(MedContext);
    const classes = useStyles();
    const [checkedProblemtoday, setCheckedProblemtoday] = React.useState([]);
    const [checkedStool, setCheckedStool] = React.useState([]);
    const [frequency, setFrequency] = React.useState('');

    const handleToggleProblemtoday = (object) => () => {
        const currentIndex = values.problemtoday.indexOf(object.value);
        const newChecked = [...values.problemtoday];
        
        if (currentIndex === -1) {
            newChecked.push(object.value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setCheckedProblemtoday(newChecked);
        setValues({...values, problemtoday:newChecked})
    };

    const handleToggleStool = (object) => () => {
        const currentIndex = values.stools.indexOf(object.value);
        const newChecked = [...values.stools];

        if (currentIndex === -1) {
            newChecked.push(object.value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setCheckedStool(newChecked);
        setValues({...values, stools:newChecked})
    };

    const updateFrequency = (event) => {
        setFrequency(event.target.value);
        setValues({...values, stoolfrequency:event.target.value});
    };

    return (

        <div>
            <div className={classes.root}>
                <Grid container spacing={3} style={{ padding: 20 }}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}><strong><h4>{t('internalMedcine.problemtoday')}<br/>/今日はどのような症状がありますか。（複数ある方は複数☑してください.)</h4></strong></Paper>
                    </Grid>
                    
                    <Grid container spacing={3} style={{ padding: 20 }}>
                    <GridList container style={{height:370, padding: 20 }} cellHeight={10} className={classes.gridList} cols={3}>
                        {problemtodays.map((value) => {
                            const labelId = `checkbox-list-label-${value.name}`;

                            return (
                                <ListItem key={value.name} role={undefined} dense button onClick={handleToggleProblemtoday(value)}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={values.problemtoday.indexOf(value.value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={`${value.name}`} />

                                </ListItem>
                            );
                        })}
                    </GridList>

                    <Grid item xs={12}>
                        <Paper className={classes.paper}><strong><h4>Check all that apply about your stool. <br/>/ 便の性状に☑してください</h4></strong></Paper>
                    </Grid>
                        
                    <GridList container style={{height:107, padding: 20 }} cellHeight={10} className={classes.gridList} cols={3}>
                        {stools.map((value) => {
                            const labelId = `checkbox-list-label-${value.name}`;

                            return (
                                <ListItem key={value.name} role={undefined} dense button onClick={handleToggleStool(value)}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={values.stools.indexOf(value.value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={`${value.name}`} />

                                </ListItem>
                            );
                        })}
                    </GridList>
                    <Grid item xs={6}>
                    <FormControl fullWidth xs={8} className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">{t('internalMedcine.Stoolfrequency')}/ 一日の排便回数：</InputLabel>
                        <Select 
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={values.stoolfrequency}
                            onChange={updateFrequency}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                        </FormControl>
                        </Grid>
                        </Grid>
                    </Grid>

            </div>
        </div>

    )
}
export default CenteredGrid;