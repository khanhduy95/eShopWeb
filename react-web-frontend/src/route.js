import React from 'react';
import AboutPage from '../src/pages/AboutPage/AboutPage';
import CatalogTypePage from '../src/pages/CatalogTypePage/CatalogTypePage';
import ContactPage from './pages/ContactPage/ContactPage';
import ProductContainer from './containers/productContainer';
import CartContainer from './containers/cartContainer'

const routes = [{
        path: '/',
        exact: true,
        main: () => <ProductContainer />
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
    {
        path: '/Cart',
        exact: true,
        main: () => <CartContainer />
    },
];

export default routes;