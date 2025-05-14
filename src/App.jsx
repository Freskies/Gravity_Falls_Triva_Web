import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import AppLayout from "./routes/AppLayout.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import createPlayersAction from "./features/quiz/setupQuizAction.js";
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
				action: createPlayersAction,
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