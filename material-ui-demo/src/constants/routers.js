import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import HomePage from '../pages/content/HomePage';
import MenuPage from '../pages/content/MenuPage';
export const ROUTER = [
    {
        path: "/",
        name: "Home",
        exact: true,
        icon: <HomeIcon />,
        main: ()=> <HomePage />
    },
    {
        path: "/Menu",
        name: "Menu",
        exact: false,
        icon: <MenuIcon />,
        main: ()=> <MenuPage />

    },
]
