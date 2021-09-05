import LoginPage from './pages/LoginPage'
import JogsPage from './pages/JogsPage'
import AddJogPage from './pages/AddJogPage'
import InfoPage from './pages/InfoPage'
import MenuPage from './pages/MenuPage'
import { 
    LOGIN_PAGE_ROUTE, 
    MAIN_PAGE_ROUTE, 
    ADD_JOG_PAGE_ROUTE,
    INFO_PAGE_ROUTE,
    MENU_PAGE_ROUTE,
    CONTACT_US_PAGE_ROUTE
} from "./const/routePaths";
import ContactUsPage from './pages/ContactUsPage'

export const publicRoutes = [
    {
        path: LOGIN_PAGE_ROUTE,
        Component: LoginPage
    }
]

export const authRoutes = [
    {
        path: MAIN_PAGE_ROUTE,
        Component: JogsPage
    },
    {
        path: ADD_JOG_PAGE_ROUTE,
        Component: AddJogPage
    },
    {
        path: INFO_PAGE_ROUTE,
        Component: InfoPage
    },
    {
        path: MENU_PAGE_ROUTE,
        Component: MenuPage
    },
    {
        path: CONTACT_US_PAGE_ROUTE,
        Component: ContactUsPage
    }
]