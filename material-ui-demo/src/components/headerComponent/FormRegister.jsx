import React, { Component, useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Controls from '../controls/Controls';
import {UseForm} from '../controls/UseForm' ;

const initialValues = {
    id: 0,
    fullName: '',
    email: '',
    phoneNumber: '',
    city: '',
    gender: '',
    address: '',
    isActive: false,
}

class FormRegister extends Component {

    render() {
        return (
            <UseForm>
            <Grid container >
                <Grid item xs={6}>
                    <Controls.Input
                        name="FullName"
                        lable="Full Name"
                    />
                    <Controls.Input
                        name="Email"
                        lable="Email"
                    />
                    <Controls.Input
                        name="Mobile"
                        lable="Mobile"
                    />
                </Grid>
                <Grid item xs={6}>

                </Grid>
            </Grid>
            </UseForm>
        );
    }
}

export default FormRegister;