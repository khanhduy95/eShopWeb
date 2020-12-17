import { makeStyles, Paper, Card, Typography } from "@material-ui/core";
import NotificationsIcon from '@material-ui/icons/Notifications';

const style = makeStyles(theme => ({
  root: {
    backgroundColor: '#fdfdff',
  },
  pageheader: {
    padding: theme.spacing(4),
    display: 'flex',
  },
  pageTitle:{
    paddingLeft:theme.spacing(4),
  }
}));

function HomePage() {
  const classes = style();
  return (

    <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageheader}>
        <Card><NotificationsIcon /></Card>
        <div className={classes.pageTitle}>
          <Typography variant="subtitle2" component="div"> Home Page</Typography>
        </div>
      </div>
      <div>
        asda
      </div>
    </Paper>
  );
}

export default HomePage;