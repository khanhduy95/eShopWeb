import React, {
    Component
} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Components/Header';
import routes from './route';
import Contact from './Components/Contact';

class App extends Component {
    constructor(props) {
        super();
    }
    render() {
        return ( 
              <Router>
                  <Header />
                    <Switch>
                        {/* {this.showRoutes(routes)} */}
                        {routes.map((route,key)=>{
                            console.log(route.main);
                            return  (
                                <Route
                                    key={key}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                                />
                            )
                        })}
                         {/* <Route
                                    path='/Contact'
                                    component={Contact}
                                /> */}
                    </Switch>
              </Router>     

        )
    }
    showRoutes = (routes) =>{
        let result=null;
        if(routes.lenght >0){
            result = routes.map((route,key)=>{
                return  (
                    <Route
                        key={key}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                )
            })
        }
        return result;
    }
}

export default App;