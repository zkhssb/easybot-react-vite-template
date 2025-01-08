import { Template } from "./pages/Template";
import Root from "./pages/Root";
import { Servers } from "./pages/Servers";

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
    }
];

export interface RouteConfig {
    path: string;
    element: JSX.Element;
    children?: RouteConfig[];
}

export default routes;