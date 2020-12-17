import './App.css';
import { makeStyles, withStyles, CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Header from '../pages/Dashboard/Header';
import SideBar from '../pages/Dashboard/SideBar';
function App() {
  return (
    <Router>
      <SideBar />
      <Header />
      <CssBaseline />
    </Router>
  );
}

export default App;
