import { makeStyles, withStyles, AppBar, Toolbar, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as routes from '../../constants/Routers';

const style = makeStyles({
    root: {
        backgroundColor: "white",
        paddingLeft: "320px"
    }
})
function Header() {
    const classes = style();
    return (
        <div >
            <AppBar className={classes.root} position="static">
                <Toolbar>

                </Toolbar>
            </AppBar>
            <Grid className={classes.root}>
                
                    <Switch>
                        {routes.ROUTER.map((route, key) => {
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