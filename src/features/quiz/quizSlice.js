import { createSlice } from "@reduxjs/toolkit";
import allQuestions from "./../../data/questions.json";
import allPlayers from "./../../data/players.json";
import { extractRandom } from "../../utils/helper.js";

const initialState = {
	activeQuestion: null,
	questions: Array.from(allQuestions),
	pointsToWin: undefined,
	turn: 1,
};

const quizSlice = createSlice({
	name: "quiz",
	initialState,
	reducers: {
		setupQuiz (state, action) {
			const { pointsToWin } = action.payload;
			state.pointsToWin = pointsToWin;
			// pick random players

			// extract the first question
			state.activeQuestion = extractRandom(state.questions);
		},
		nextTurn (state, action) {
			const { isAnsweredCorrectly } = action.payload;
			state.players[state.activePlayerIndex].questions.push({
				question: state.activeQuestion.question,
				isAnsweredCorrectly,
			});
			// next player
			state.activePlayerIndex = (state.activePlayerIndex + 1) % state.players.length;
			// next question
			state.activeQuestion = extractRandom(state.questions);
		},
	},
});

function getActiveQuestion (state) {
	return state.quiz.activeQuestion;
}

export { getActiveQuestion };
export const { setupQuiz, nextTurn } = quizSlice.actions;
export default quizSlice.reducer;