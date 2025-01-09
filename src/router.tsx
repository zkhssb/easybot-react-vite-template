import { Template } from "./pages/Template";
import Root from "./pages/Root";
import { Servers } from "./pages/Servers";
import { Players } from "./pages/Players";

const routes: RouteConfig[] = [
    {
        path: "/",
        element: <Root />
    },
    {
        path: "/template",
        element: <Template />
    },
    {
        path: "/servers",
        element: <Servers />
    },
    {
        path: "/players",
        element: <Players/>
    }
];

export interface RouteConfig {
    path: string;
    element: JSX.Element;
    children?: RouteConfig[];
}

export default routes;