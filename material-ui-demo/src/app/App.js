import './App.css';
import { makeStyles, withStyles, CssBaseline } from "@material-ui/core";
import SideBar from "../pages/dashboard/sideBar";
import Header from "../pages/dashboard/header";
import { BrowserRouter as Router, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <SideBar />
      <Header />
    </Router>
  );
}

export default App;
