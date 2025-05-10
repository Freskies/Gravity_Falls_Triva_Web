import { createSlice } from "@reduxjs/toolkit";
import allQuestions from "./../../data/questions.json";
import allPlayers from "./../../data/players.json";
import { extractRandom } from "../../utils/helper.js";

const initialState = {
	players: [],
	activePlayerIndex: 0,
	activeQuestion: null,
	questions: Array.from(allQuestions),
	numberOfTurns: undefined,
	turn: 1,
};

const quizSlice = createSlice({
	name: "quiz",
	initialState,
	reducers: {
		setupQuiz (state, action) {
			const { numberOfPlayers, numberOfTurns } = action.payload;
			state.numberOfTurns = numberOfTurns;
			// pick random players
			const playerIndexes = Array.from(allPlayers, (_, i) => i);
			state.players = Array.from({ length: numberOfPlayers }, () => allPlayers[extractRandom(playerIndexes)]);
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
export const { setupQuiz, nextTurn } = quizSlice.actions;
export default quizSlice.reducer;