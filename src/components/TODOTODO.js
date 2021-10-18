import React, { Component, Fragment } from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import './TODOTODO.css';

class TODOTODO extends React.Component {
    render() {
        return (
            <Fragment className="TODO">
                <AppBar position="static">
                    <Toolbar className="HEADER">
                        <Typography variant="title" color="inherit">Hit you with that TODOTODO</Typography>
                    </Toolbar>
                </AppBar>
            </Fragment>
        );
    }
}

export default TODOTODO;
