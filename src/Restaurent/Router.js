import { createBrowserRouter } from "react-router-dom";
import About from "../component/About/About";
import Contact from "../component/Contact/Contact";
import Home from "../component/Home";
import MealDB from "../component/MealDB/MealDB";
import Restaurent from "../component/Restaurent/Restaurent";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: 'home',
                element: <Home></Home>
            },
            {
                path: 'restaurent',
                loader: async () => {
                    return fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
                },
                element: <Restaurent></Restaurent>
            },
            {
                path: '/mealdb/:menueId',
                loader: async ({ params }) => {
                    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.menueId}`);
                },
                element: <MealDB></MealDB>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            }
        ]
    },
    { path: '*', element: <div>Not Found any component: 404</div> }
]);