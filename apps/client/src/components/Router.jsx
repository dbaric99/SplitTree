import {
    createBrowserRouter, 
    createRoutesFromElements, 
    RouterProvider,
    Route,
} from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { AdminDashboard } from '../pages/admin/DashboardPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<LoginPage />}/>
            <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
        </>
    )
)

function Router() {
  return (
    <RouterProvider router={router} />
  )
}

export {Router};