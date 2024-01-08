import { createBrowserRouter } from "react-router-dom";
import Login from "../src/Login";
import Register from "../src/Register";
import Layout from "../src/Layout";
import Dashboard from "dashboard";
import Comments from "../src/Commentsindex";
import Profile from "../src/ProfileIndex";
import Users from "../src/UsersIndex";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";

export const PROTECTED = "/protected";
export const DASHBOARD = "/protected/dashboard";
export const USERS = "/protected/users";
export const PROFILE = "/protected/profile/:id";
export const COMMENTS = "/protected/comments/:id";

export const router = createBrowserRouter([
    { path: ROOT, element: <Login /> },
    // { path: ROOT, element: "Public Root" },
    { path: LOGIN, element: <Login /> },
    { path: REGISTER, element: <Register /> },
    { 
        path: PROTECTED, 
        element: <Layout />, 
        children: [
            {
                path: DASHBOARD,
                element: <Dashboard />,
            },
            {
                path: USERS,
                element: <Users />,
            },
            {
                path: PROFILE,
                element: <Profile />,
            },
            {
                path: COMMENTS,
                element: <Comments />,
            },
        ],
     },
]);