import { createSlice } from "@reduxjs/toolkit";
import allQuestions from "./../../data/questions.json";
import allPlayers from "./../../data/players.json";
import { extractRandom } from "../../utils/helper.js";

const initialState = {
	players: [],
	activePlayerIndex: 0,
	activeQuestion: null,
	questions: allQuestions,
};

const quizSlice = createSlice({
	name: "quiz",
	initialState,
	reducers: {
		createPlayers (state, action) {
			// pick random players
			const numPlayers = action.payload;
			const playerIndexes = Array.from(allPlayers, (_, i) => i);
			state.players = Array.from({ length: numPlayers }, () => allPlayers[extractRandom(playerIndexes)]);
			// extract the first question
			state.activeQuestion = extractRandom(state.questions);
		},
		nextTurn (state) {
			// next player
			state.activePlayerIndex = (state.activePlayerIndex + 1) % state.players.length;
			// next question
			state.activeQuestion = extractRandom(state.questions);
		},
	},
});

function getPlayers (state) {
	return state.quiz.players;
}

function getActiveQuestion (state) {
	return state.quiz.activeQuestion;
}

export { getPlayers, getActiveQuestion };
export const { createPlayers, nextTurn } = quizSlice.actions;
export default quizSlice.reducer;