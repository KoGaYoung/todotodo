import logo from './logo.svg';
import './TODOTODO.css';

import {withStyles} from "@material-ui/core/styles";
// import styles from './style';
import {Grid, AppBar, Toolbar, Typography} from "@material-ui/core";

function TODOTODO() {
  return (
    <div className="App">
      <Grid container={true}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant ="title" color="inherit">todolist</Typography>
          </Toolbar>
        </AppBar>

      </Grid>
    </div>
  );
}

export default TODOTODO;
