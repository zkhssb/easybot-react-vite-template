import { Template } from "./pages/Template";
import Root from "./pages/Root";

const routes: RouteConfig[] = [
    {
        path: "/",
        element: <Root />
    },
    {
        path: "/template",
        element: <Template />
    }
];

export interface RouteConfig {
    path: string;
    element: JSX.Element;
    children?: RouteConfig[];
}

export default routes;