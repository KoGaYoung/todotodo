import React, { Component } from "react";
import {Input, Button} from "@material-ui/core";

class AddTodo extends Component {
  inputRef = React.createRef();

  render() {
    return (
      <form style={{ display: "flex" }}>
        <Input
          placeholder="Todo"
          inputProps={{"aria-label": "Description"}}
          inputRef={this.inputRef}
          style={{ width: "90%" }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ width: "10%" }}
        >
          Add
        </Button>

      </form>
    );
  }
}

export default AddTodo;
