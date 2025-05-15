import { createSlice } from "@reduxjs/toolkit";
import allQuestions from "./../../data/questions.json";
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
			state.pointsToWin = +pointsToWin;
			state.activeQuestion = extractRandom(state.questions);
		},
		nextQuestion (state) {
			state.activeQuestion = extractRandom(state.questions);
		},
	},
});

function getActiveQuestion (state) {
	return state.quiz.activeQuestion;
}

export { getActiveQuestion };
export const { setupQuiz, nextQuestion } = quizSlice.actions;
export default quizSlice.reducer;