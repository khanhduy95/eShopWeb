import React, {
    Component
} from 'react';
import Home from './Components/Home';
import About from './Components/About';
import CatalogType from './Components/CatalogType';
import Contact from './Components/Contact';

const routes = [{
        path: '/',
        exact: true,
        main: () => <Home />
    },
    
    {
        path: '/About',
        exact: false,
        main: () => <About />
    },
    {
        path: '/Contact',
        exact: false,
        main: () => <Contact />
    },
    {
        path: '/',
        exact: false,
        main: () => <CatalogType />
    },
  
];

export default routes;