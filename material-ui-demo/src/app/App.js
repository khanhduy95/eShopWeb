import './App.css';
import { makeStyles, withStyles, CssBaseline } from "@material-ui/core";
import SideBar from "../pages/Dashboard/sideBar";
import Header from "../pages/Dashboard/header";


function App() {
  return (
    <div>
      <SideBar />
      <Header />
    </div>
  );
}

export default App;
