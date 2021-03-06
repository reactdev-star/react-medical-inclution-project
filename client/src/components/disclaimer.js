import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Nav from "./nav.js";
import Paper from '@material-ui/core/Paper';
import Footer from "./footer";
import '../App.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: "14px",
        color: "black",
        fontSize: "16px",
        backgroundColor: "#57EBEB",
        minHeight: "75px",
        minWidth: "200px !important",
        borderRadius: "46px"
    },
    labelAligne: {
        textAlign: "center",
        marginLeft: 16
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'black',
        marginBottom: 10,
        marginTop: 10,
        fontSize: 20,
    },
    content: {
        paddingBottom: "600px",
        paddingTop: "39px",

    }
}));

function Homepage() {
    const classes = useStyles();
    const { t, i18n } = useTranslation();

    const handleConfirm = () => {
        window.location = '/homepage';
    }

    const handleCancel = () => {
        window.location = '/';
    }

    return (
        <div className="container">
            <Nav />
            <div className="content" style={{ paddingRight: 100, paddingLeft: 100 }}>
                <Grid className={classes.labelAligne} item xs={12}>
                    <Grid className={classes.labelAligne} item xs={12}>
                        <Paper className={classes.paper}> <strong><h4>{t('disclaimerCopyright.disclaimer')} <span style={{color:"blue"}}>/免責事項</span></h4></strong></Paper>
                    </Grid>
                    <Typography className={classes.instructions}>
                        <nav> {t('disclaimerCopyright.disclaimerText')}</nav>
                    </Typography>
                    <br />
                    <Typography className={classes.instructions}>
                        <nav> {t('disclaimerCopyright.disclaimerText2')}</nav>
                    </Typography>
                    <br />
                    <Typography style={{}} className={classes.instructions}>
                        <nav> {t('disclaimerCopyright.disclaimerText1')}</nav>
                    </Typography>
                    <br />
                    <Typography className={classes.instructions}>
                        <nav style={{ color: "blue" }}> 本システムは、ご利用者樣の自己責任にてご使用いただくことを、使用条件とさせていただきます。本システムの使用及び利用により生じた問題については、開発者は一切の法的責任を負いません</nav>
                    </Typography>
                    <br />
                    <Typography className={classes.instructions}>
                        <nav style={{ color: "blue" }}> 特に本システムの使用によって、医療従事者が患者に対して情報を提供する際の、情報の正確性、利用目的との適合性、利用結果（患者が正確に理解できることを含む）の一切について、開発者は何ら保証いたしませんので、御注意ください。</nav>
                    </Typography>
                    <br />
                    <Typography className={classes.instructions}>
                        <nav style={{ color: "blue" }}> また、開発者の事前かつ明示の書面による許諾なく、本システムの営利目的での使用及び利用を禁じます。</nav>
                    </Typography>
                    <br />


                    <Grid className={classes.labelAligne} item xs={12}>
                        <Paper className={classes.paper}> <strong><h4>{t('disclaimerCopyright.copyright')} <span style={{color:"blue"}}>/著作権</span></h4></strong></Paper>
                    </Grid>

                    <br />
                    <Typography className={classes.instructions}>
                        <nav> {t('disclaimerCopyright.copyrightText')}</nav>
                    </Typography>
                    <br />
                    <Typography className={classes.instructions}>
                        <nav> {t('disclaimerCopyright.copyrightText1')}</nav>
                    </Typography>
                    <br />
                    <Typography className={classes.instructions}>
                        <nav style={{ color: "blue" }}> 本アプリケーションは「上智大学理工学部情報理工学科高岡研究室」にて研究・開発されています。</nav>
                    </Typography>
                    <br />
                    <Typography className={classes.instructions}>
                        <nav style={{ color: "blue" }}> 本アプリケーションの著作権は高岡研究室のメンバーに属しています</nav>
                    </Typography>

                </Grid>
            </div>
            <Grid container>
                <Grid item xs>
                    <Button style={{ width: 150, backgroundColor: "gray", color: "white" }} variant="contained" onClick={handleCancel}>
                        {t('cancel')}
                    </Button>
                </Grid>
                <Grid item >
                    <Button color="primary" variant="contained" style={{ width: 150 }} onClick={handleConfirm}>
                    {t('Confirm')}
                    </Button>
                </Grid>
            </Grid>


            <Footer />

        </div>
    );
}

export default Homepage;
