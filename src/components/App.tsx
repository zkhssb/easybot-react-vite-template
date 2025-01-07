import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "../router"; // 假设你的路由配置文件是一个数组
import "../index.css";

// 获取动态 basename
function getBasename(): string {
  const pathParts = window.location.pathname.split('/');
  // 假设前缀是 `/template/proxy/{随机}/index.html`
  if (pathParts[1] === "template" && pathParts[2] === "proxy") {
    return `/${pathParts[1]}/${pathParts[2]}/${pathParts[3]}`; // 返回 `/template/proxy/{随机}`
  }
  return '/'; // 默认根路径
}

// 递归渲染路由
function renderRoutes(routes: RouteConfig[]): JSX.Element[] {
  return routes.map((route) => (
    <Route key={route.path} path={route.path} element={
      <div className="font-alimama">
        {route.element}
      </div>
    }>
      {route.children && renderRoutes(route.children)}
    </Route>
  ));
}

// 路由配置的类型定义
interface RouteConfig {
  path: string;
  element: JSX.Element;
  children?: RouteConfig[];
}

export default function App(): JSX.Element {
  return (
    <StrictMode>
      <BrowserRouter basename={getBasename()}>
        <Routes>
          {renderRoutes(routes)}
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}
