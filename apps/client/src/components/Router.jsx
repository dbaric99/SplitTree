import {
    createBrowserRouter, 
    createRoutesFromElements, 
    RouterProvider,
    Route
} from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<LoginPage />}/>
        </>
    )
)

function Router() {
  return (
    <RouterProvider router={router} />
  )
}

export {Router};