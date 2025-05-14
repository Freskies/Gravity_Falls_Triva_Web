import { useDispatch, useSelector } from "react-redux";
import { getActiveQuestion, nextTurn } from "./quizSlice.js";

function Quiz () {
	const dispatch = useDispatch();
	const activeQuestion = useSelector(getActiveQuestion);

	const dispatchCorrectAnswer = () => dispatch(nextTurn({ isAnsweredCorrectly: true }));
	const dispatchWrongAnswer = () => dispatch(nextTurn({ isAnsweredCorrectly: false }));

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