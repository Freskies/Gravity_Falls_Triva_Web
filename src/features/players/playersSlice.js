import { createSlice } from "@reduxjs/toolkit";
import allPlayers from "../../data/players.json";
import { extractRandom } from "../../utils/helper.js";

const initialState = {
	players: [],
	activePlayerIndex: 0,
};

const playersSlice = createSlice({
	name: "players",
	initialState,
	reducers: {
		setupPlayers (state, action) {
			const { numberOfPlayers } = action.payload;
			const playerIndexes = Array.from(allPlayers, (_, i) => i);
			state.players = Array.from({ length: numberOfPlayers }, () => ({
				...allPlayers[extractRandom(playerIndexes)],
				questions: [],
				score: 0,
			}));
		},
		answer (state, action) {
			const { isAnsweredCorrectly, question } = action.payload;
			const activePlayer = state.players[state.activePlayerIndex];
			// update score
			if (isAnsweredCorrectly) activePlayer.score++;
			// save answer
			activePlayer.questions.push({ question, isAnsweredCorrectly });
			// next player
			state.activePlayerIndex = (state.activePlayerIndex + 1) % state.players.length;
		},
	},
});

function getPlayers (state) {
	return state.players.players;
}

function hasWon (state) {
	const playersState = state.players;
	const quizState = state.quiz;
	return playersState.players[playersState.activePlayerIndex].score === quizState.pointsToWin;
}

export { getPlayers, hasWon };
export const { setupPlayers, answer } = playersSlice.actions;
export default playersSlice.reducer;