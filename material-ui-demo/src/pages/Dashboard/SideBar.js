import { makeStyles, withStyles, CssBaseline, Grid, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as routes from '../../constants/Routers';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const style = makeStyles({
    root: {
        backgroundColor: "#1a237e",
        width: "320px",
        height: "100%",
        position: "absolute",
        color: "white",
    },
    sideBarTop: {
        textAlign: "center"
    }
})

function SideBar() {
    const classes = style();
    return (
        <div className={classes.root}>
            <Grid className={classes.sideBarTop}><h1>Material UI</h1></Grid>
            <Grid>
                <List>
                    {routes.ROUTER.map((item, key) => {
                        return  <ListItem
                            button
                            key={key}
                            component={Link}
                            to={item.path}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItem>
                    })}
                </List>
            </Grid>
        </div>
    )
}
export default SideBar;