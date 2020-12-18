import { makeStyles, withStyles, Badge, AppBar, Toolbar, Grid, InputBase, IconButton } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Routes from '../../constants/Routers';
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const style = makeStyles({
    root1: {
        backgroundColor: "white",
        paddingLeft: "320px"
    },
    root2: {
        backgroundColor: "white",
        paddingLeft: "320px"
    },
    searchInput: {
        '&:hover': { backgroundColor: '#f2f2f2' }
    }
});
function Header() {
    const classes = style();
    return (
        <div >
            <AppBar className={classes.root1} position="static">
                <Toolbar>
                    <Grid container>
                        <Grid item alignItems="center">
                            <InputBase placeholder="search" className={classes.searchInput} startAdornment={<SearchIcon />} />
                        </Grid>
                        <Grid item sm></Grid>
                        <Grid item>
                            <IconButton>
                                <Badge badgeContent={3} color="secondary">
                                    <MailIcon fontSize='small' />
                                </Badge>
                            </IconButton>
                            <IconButton>
                                <Badge badgeContent={4} color="primary">
                                    <NotificationsIcon fontSize='small' />
                                </Badge>
                            </IconButton>
                            <IconButton>
                                <Badge color="primary">
                                    <AccountCircleIcon fontSize='small' />
                                </Badge>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Grid className={classes.root2}>
                <Switch>
                    {Routes.ROUTER.map((route, key) => {
                        return <Route
                            key={key}
                            exact={route.exact}
                            component={route.main}
                            path={route.path}
                        />
                    })}
                </Switch>
            </Grid>
        </div>
    )
}
export default Header;