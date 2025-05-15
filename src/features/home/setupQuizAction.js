import store from "../../store.js";
import { setupQuiz } from "../quiz/quizSlice.js";
import { redirect } from "react-router";
import { setupPlayers } from "../players/playersSlice.js";

async function action ({ request }) {
	const formData = await request.formData();
	const { pointsToWin, numberOfPlayers } = Object.fromEntries(formData);
	store.dispatch(setupQuiz({ pointsToWin }));
	store.dispatch(setupPlayers({ numberOfPlayers }));
	return redirect("/quiz");
}

export default action;