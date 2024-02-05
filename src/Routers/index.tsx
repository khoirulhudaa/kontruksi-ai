import { lazy } from "react";
import { RouterProps } from "../Models/RouterModels";

const Auth = lazy(() => import('../Pages/Auth/Login'))
const Owner = lazy(() => import('../Pages/Main/Owner/Home'))
const Board = lazy(() => import('../Pages/Main/Owner/Board'))
const Notification = lazy(() => import('../Pages/Main/Owner/Notification'))
const Profile = lazy(() => import('../Pages/Main/Owner/Profile'))
const Sitemap = lazy(() => import('../Pages/Main/Owner/Sitemap'))
const CheckListItem = lazy(() => import('../Pages/Main/Owner/ChecklistItem'))
const Image = lazy(() => import('../Pages/Main/Owner/Image'))
const Information = lazy(() => import('../Pages/Main/Owner/Information'))
const Progress = lazy(() => import('../Pages/Main/Owner/Progress'))
const Curva = lazy(() => import('../Pages/Main/Owner/Curva'))
const Labor = lazy(() => import('../Pages/Main/Owner/Labor'))
const Recap = lazy(() => import('../Pages/Main/Owner/Recap'))
const Document = lazy(() => import('../Pages/Main/Owner/StatusDocument'))
const Manipulation = lazy(() => import('../Pages/Main/Owner/Manipulation'))
const Construction = lazy(() => import('../Pages/Main/Owner/Construction'))
const Material = lazy(() => import('../Pages/Main/Owner/Material'))
const Priority = lazy(() => import('../Pages/Main/Owner/Priority'))
const OtherProblem = lazy(() => import('../Pages/Main/Owner/OtherProblem'))
const Report = lazy(() => import('../Pages/Main/Owner/Report'))
const Agreement = lazy(() => import('../Pages/Main/Owner/Agreement'))

// CE
const OwnerCE = lazy(() => import('../Pages/Main/CE/Home'))
const BoardCE = lazy(() => import('../Pages/Main/CE/Board'))
const NotificationCE = lazy(() => import('../Pages/Main/CE/Notification'))
const ProfileCE = lazy(() => import('../Pages/Main/CE/Profile'))
const MenuCE = lazy(() => import('../Pages/Main/CE/Menu'))

const Routers: RouterProps[] = [
    {
        path: "/",
        component: Auth,
        exact: true
    },
    {
        path: '/homepage/owner',
        component: Owner,
        exact: false
    },
    {
        path: '/board/owner',
        component: Board,
        exact: false
    },
    {
        path: '/notification/owner',
        component: Notification,
        exact: false
    },
    {
        path: '/profile/owner',
        component: Profile,
        exact: false
    },
    {
        path: '/sitemap/owner',
        component: Sitemap,
        exact: false
    },
    {
        path: '/checklist/item/owner',
        component: CheckListItem,
        exact: false
    },
    {
        path: '/image/owner',
        component: Image,
        exact: false
    },
    {
        path: '/information/owner',
        component: Information,
        exact: false
    },
    {
        path: '/progress/owner',
        component: Progress,
        exact: false
    },
    {
        path: '/curva/owner',
        component: Curva,
        exact: false
    },
    {
        path: '/labor/owner',
        component: Labor,
        exact: false
    },
    {
        path: '/recap/owner',
        component: Recap,
        exact: false
    },
    {
        path: '/document/owner',
        component: Document,
        exact: false
    },
    {
        path: '/manipulation/owner',
        component: Manipulation,
        exact: false
    },
    {
        path: '/construction/owner',
        component: Construction,
        exact: false
    },
    {
        path: '/material/owner',
        component: Material,
        exact: false
    },
    {
        path: '/priority-problem/owner',
        component: Priority,
        exact: false
    },
    {
        path: '/other-problem/owner',
        component: OtherProblem,
        exact: false
    },
    {
        path: '/report/owner',
        component: Report,
        exact: false
    },
    {
        path: '/agreement/owner',
        component: Agreement,
        exact: false
    },
    {
        path: '/home/CE',
        component: OwnerCE,
        exact: false
    },
    {
        path: '/menu/CE',
        component: MenuCE,
        exact: false
    },
    {
        path: '/notification/CE',
        component: NotificationCE,
        exact: false
    },
    {
        path: '/board/CE',
        component: BoardCE,
        exact: false
    },
    {
        path: '/profile/CE',
        component: ProfileCE,
        exact: false
    },
]

export default Routers;
