import { createBrowserRouter } from 'react-router-dom';
import Home from '../view/home';
import AllStudents from '../view/all';
import InsertStudent from '../view/Insert';
import UpdateStudent from '../view/update';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/all",
        element: <AllStudents />,
    },
    {
        path: "/insert",
        element: <InsertStudent />,
    },
    {
        path: "/update/:id",
        element: <UpdateStudent />,
    }
]);