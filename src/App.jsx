import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./ui/AppLayout.jsx";
import ErrorPage from "./ui/ErrorPage.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout/>,
		errorElement: <ErrorPage/>,
	},
]);

function App () {
	return <RouterProvider router={router}/>;
}

export default App;