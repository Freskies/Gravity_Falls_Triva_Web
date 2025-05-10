import store from "../../store.js";
import { setupQuiz } from "./quizSlice.js";
import { redirect } from "react-router";

async function action ({ request }) {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	store.dispatch(setupQuiz(data));
	return redirect("/quiz")
}

export default action;