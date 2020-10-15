import React, {
    Component
} from 'react';
import HomePage from '../src/pages/HomePage/HomePage';
import AboutPage from '../src/pages/AboutPage/AboutPage';
import CatalogTypePage from '../src/pages/CatalogTypePage/CatalogTypePage';
import ContactPage from './pages/ContactPage/ContactPage';
const routes = [{
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    
    {
        path: '/About',
        exact: false,
        main: () => <AboutPage />
    },
    {
        path: '/Contact',
        exact: false,
        main: () => <ContactPage />
    },
    {
        path: '/Product/:id',
        exact: false,
        main: ({match}) => <CatalogTypePage match={match}/>
    },
    
];

export default routes;