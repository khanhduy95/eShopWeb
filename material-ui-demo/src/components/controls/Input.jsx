import { AddIcCallTwoTone } from "@material-ui/icons";
import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
class Input extends Component {
    render() {
        return (
           <TextField 
                variant="outlined"
                label={this.props.label}
                name={this.props.name}
                onChange={this.props.onChange}
           />
        );
    }
}

export default Input;