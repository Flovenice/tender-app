import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import PurchasePage from "./pages/PurchasePage"
import Purchases from "./pages/Purchases"
import { ADMIN_ROUTE, LOGIN_ROUTE, PURCHASE_ROUTE, PURCHASES_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: PURCHASES_ROUTE,
        Component: Purchases
    },
    {
        path: PURCHASE_ROUTE + '/:id',
        Component: PurchasePage
    }
]

export const publicRoutes = [
    {

    }
]