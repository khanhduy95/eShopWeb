import { makeStyles, Menu, MenuItem, CssBaseline, Grid, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as routes from '../../constants/Routers';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import React from 'react';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
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
                    {routes.ROUTER.map((item, key) => {
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
                            <StyledMenu
                                id="customized-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <StyledMenuItem>
                                    <ListItemIcon>
                                        <SendIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Sent mail" />
                                </StyledMenuItem>
                                <StyledMenuItem>
                                    <ListItemIcon>
                                        <DraftsIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Drafts" />
                                </StyledMenuItem>
                                <StyledMenuItem>
                                    <ListItemIcon>
                                        <InboxIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Inbox" />
                                </StyledMenuItem>
                            </StyledMenu>
                        </>
                    })}
                </List>
            </Grid>
        </div>
    )
}

export default SideBar;