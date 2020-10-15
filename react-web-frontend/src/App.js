import React, {
    Component
} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavbarMenu from '../src/components/Header/Menu/NavbarMenu';
import FooterComponent from '../src/components/Footer/FooterComponent';
import routes from './route';

class App extends Component {
    constructor(props) {
        super();
    }
    render() {
        return ( 
              <Router>
                    <NavbarMenu />
                    <Switch>
                        {routes.map((route,key)=>{
                            return  (
                                <Route
                                    key={key}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                                />
                            )
                        })}
                    </Switch>
                    <FooterComponent />
              </Router>     

        )
    }
}

export default App;