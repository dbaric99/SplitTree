import {
    createBrowserRouter, 
    createRoutesFromElements, 
    RouterProvider,
    Route,
} from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { AdminDashboard } from '../pages/admin/DashboardPage';
import { UserDashboard } from '../pages/user/DashboardPage';
import { DashboardPage } from '../pages/DashboardPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<LoginPage />}/>
            <Route path='/dashboard' element={<DashboardPage/>}/>
            <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
            <Route path='/user/dashboard' element={<UserDashboard/>}/>
        </>
    )
)

function Router() {
  return (
    <RouterProvider router={router} />
  )
}

export {Router};