import { useSelector } from "react-redux";
import { getActiveQuestion } from "../features/quiz/quizSlice.js";
import Players from "../features/players/Players.jsx";
import Quiz from "../features/quiz/Quiz.jsx";

function QuizPage () {
	const activeQuestion = useSelector(getActiveQuestion);
	if (!activeQuestion) throw new Error("Start quiz from home page");

	return <div className={`h-full bg-amber-100`}>
		<header>
			<Players/>
		</header>
		<main>
			<Quiz/>
		</main>
	</div>;
}

export default QuizPage;