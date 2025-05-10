import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./routes/AppLayout.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import createPlayersAction from "./features/quiz/setupQuizAction.js";
import HomePage from "./routes/HomePage.jsx";
import QuizPage from "./routes/QuizPage.jsx";
import ResultsPage from "./routes/ResultsPage.jsx";

const router = createBrowserRouter([
	{
		element: <AppLayout/>,
		errorElement: <ErrorPage/>,
		children: [
			{
				path: "/",
				element: <HomePage/>,
				action: createPlayersAction,
			},
			{
				path: "/quiz",
				element: <QuizPage/>,
				children: [
					{
						path: "",
					},
				],
			},
			{
				path: "/results",
				element: <ResultsPage/>,
			},
		],
	},
]);

function App () {
	return <RouterProvider router={router}/>;
}

export default App;