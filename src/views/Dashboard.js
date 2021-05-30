import * as React from "react";
import { Grid, Paper } from '@material-ui/core';
import Forecast from "./Weather";
import { makeStyles } from '@material-ui/core/styles';

/**
 * Dashboard.js
 * Presents a Forecast component inside a card object, showing the weather
 * info
 * @returns {JSX.Element}
 */

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        margin: 10
    },
}));

export default function Dashboard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

        <Grid container>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <h1>Welcome to the Phone CRUD administration panel</h1>
                    <p>Here you can view, create, edit and delete entries from the corresponding resource view.</p>
                    <p>Only users with admin privilege can view or edit Brand resource</p>
                </Paper>

            </Grid>
            <Grid item xs={4} style = {{minWidth: "400px"}}>
                <Paper className={classes.paper}>
                    <strong>Weather info</strong>
                    <p></p>
                    <Forecast />
                </Paper>
            </Grid>

        </Grid>
        </div>

    );
}