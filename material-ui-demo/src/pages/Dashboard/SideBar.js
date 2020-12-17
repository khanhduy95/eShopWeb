import { makeStyles, Menu, MenuItem, CssBaseline, Grid, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import React from 'react';
import   * as Routes from '../../constants/Routers';

const style = makeStyles({
    root: {
        backgroundColor: "#253053",
        width: "320px",
        height: "100%",
        position: "absolute",
        color: "white",
    },
    sideBarTop: {
        textAlign: "center"
    },
    menuList: {
        paddingLeft: "100px",
        backgroundColor: "red"
    }
})

function SideBar() {
    const classes = style();
    let MEMU_LIST = ["Button 1", "Button 2"];

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>

            <Grid className={classes.sideBarTop}><h1>Material UI</h1></Grid>
            <Grid>
                <List>
                    {Routes.ROUTER.map((item, key) => {
                        return <>
                            <ListItem
                                button
                                key={key}
                                component={Link}
                                to={item.path}
                                onClick={handleClick}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.name} />

                            </ListItem>
                              
                        </>
                    })}
                </List>
            </Grid>
        </div>
    )
}

export default SideBar;