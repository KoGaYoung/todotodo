import React, { Component, Fragment } from "react";
import {Grid, AppBar, Toolbar, Typography, Tabs, Tab, Paper} from "@material-ui/core";
import './TODOTODO.css';
import AddTodo from "../components/AddTodo";
import {withStyles} from "@material-ui/core/styles";
const styles = {
  Paper: {
    padding: 20,
    margin: "auto",
    textAlign: "center",
    width: 500
  }
};

class TODOTODO extends React.Component {
    render() {
        return (
            <Fragment className="TODO">
                <AppBar position="static">
                    <Toolbar className="HEADER">
                        <Typography variant="title" color="inherit">Hit you with that TODOTODO</Typography>
                    </Toolbar>
                    <Tabs className="TABS" aria-label="Main Tabs">
                        <Tab label="ALL"/>
                        <Tab label="COMPELETE"/>
                        <Tab label="NOT YET"/>
                    </Tabs>

                </AppBar>
                <Grid className="Contents" container spacing={0}>
                    <Grid item xs={12}>
                        <Paper style={styles.Paper}>
                            <AddTodo addToList={this.addToList}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} style={styles.Paper}>
                        {/*TODO아이템*/}
                    </Grid>
                </Grid>
            </Fragment>
        );
    }
}

export default TODOTODO;
