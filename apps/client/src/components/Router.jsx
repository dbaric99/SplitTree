import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { AdminDashboard } from "../pages/admin/DashboardPage";
import { Error404 } from "../pages/routing";
import { TeamsPage } from "../pages/admin/TeamsPage";
import { CoursesPage } from "../pages/admin/CoursesPage";
import { AdminLayout } from "./Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LoginPage />} />
      <Route element={<AdminLayout/>}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/teams" element={<TeamsPage />} />
        <Route path="/admin/courses" element={<CoursesPage />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </>
  )
);

function Router() {
  return <RouterProvider router={router} />;
}

export { Router };
