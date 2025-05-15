import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import AppLayout from "./routes/AppLayout.jsx";
import setupQuizAction from "./features/home/setupQuizAction.js";
import HomePage from "./routes/HomePage.jsx";
import QuizPage from "./routes/QuizPage.jsx";
import ResultsPage from "./routes/ResultsPage.jsx";

const router = createBrowserRouter([
	{
		Component: AppLayout,
		errorElement: <Navigate to="/" replace/>,
		children: [
			{
				path: "/",
				Component: HomePage,
				action: setupQuizAction,
			},
			{
				path: "/quiz",
				Component: QuizPage,
			},
			{
				path: "/results",
				Component: ResultsPage,
			},
		],
	},
]);

function App () {
	return <RouterProvider router={router}/>;
}

export default App;