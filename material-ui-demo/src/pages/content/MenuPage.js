import { makeStyles, Paper } from '@material-ui/core';
import FormRegister from '../../components/headerComponent/FormRegister'
const style = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}))
function MenuPage() {
  const classes = style();
  return (
    <div>
      <Paper className={classes.paper}>
        <FormRegister />
      </Paper>
    </div>
  );
}

export default MenuPage;