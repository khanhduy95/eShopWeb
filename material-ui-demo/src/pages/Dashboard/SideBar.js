import { makeStyles, withStyles, CssBaseline } from "@material-ui/core";

const style = makeStyles({
    root: {
        backgroundColor: "#3f51b5",
        width: "320px",
        height:"100%",
        position:"absolute",
    }
})

function SideBar() {
    const classes = style()
    return (
        <div className={classes.root}><h1>Material UI</h1></div>
    )
}
export default SideBar;