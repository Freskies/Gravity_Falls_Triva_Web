import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_NUMBER_OF_PLAYERS = 4;
const DEFAULT_CORRECT_ANSWERS_TO_WIN = 10;

const initialState = {
	numberOfPlayers: DEFAULT_NUMBER_OF_PLAYERS,
	correctAnswersToWin: DEFAULT_CORRECT_ANSWERS_TO_WIN,
};

const settingsSlice = createSlice({
	name: "settings",
	initialState,
	reducers: {
		setNumberOfPlayers (state, action) {
			state.settings.numberOfPlayers = action.payload;
		},
		resetNumberOfPlayers (state) {
			state.settings.numberOfPlayers = DEFAULT_NUMBER_OF_PLAYERS;
		},
		setCorrectAnswersToWin (state, action) {
			state.settings.correctAnswersToWin = action.payload;
		},
		resetCorrectAnswersToWin (state) {
			state.settings.correctAnswersToWin = DEFAULT_CORRECT_ANSWERS_TO_WIN;
		},
	},
});

function getNumberOfPlayers (state) {
	return state.settings.numberOfPlayers;
}

function getCorrectAnswersToWin (state) {
	return state.settings.correctAnswersToWin;
}

export const {
	setNumberOfPlayers,
	resetNumberOfPlayers,
	setCorrectAnswersToWin,
	resetCorrectAnswersToWin,
} = settingsSlice.actions;
export { getNumberOfPlayers, getCorrectAnswersToWin };
export default settingsSlice.reducer;