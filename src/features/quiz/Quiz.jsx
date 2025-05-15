import { useDispatch, useSelector } from "react-redux";
import { getActiveQuestion, nextQuestion } from "./quizSlice.js";
import { hasWon, answer } from "../players/playersSlice.js";
import { useNavigate } from "react-router";
import store from "../../store.js";

function Quiz () {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const activeQuestion = useSelector(getActiveQuestion);

	function handleAnswer () {
		const currentWon = hasWon(store.getState());
		if (currentWon) navigate("/results", { replace: true });
		else dispatch(nextQuestion());
	}

	function dispatchCorrectAnswer () {
		dispatch(answer({ isAnsweredCorrectly: true, question: activeQuestion.question }));
		handleAnswer();
	}

	function dispatchWrongAnswer () {
		dispatch(answer({ isAnsweredCorrectly: false, question: activeQuestion.question }));
		handleAnswer();
	}

	return <>
		<p>
			{activeQuestion.question}
		</p>
		<div className={`space-x-3`}>
			<button onClick={dispatchCorrectAnswer}>V</button>
			<button onClick={dispatchWrongAnswer}>X</button>
		</div>
	</>;
}

export default Quiz;