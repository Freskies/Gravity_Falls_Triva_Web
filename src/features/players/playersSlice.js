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
			}));
		},
	},
});

function getPlayers (state) {
	return state.players.players;
}

export { getPlayers };
export const { setupPlayers } = playersSlice.actions;
export default playersSlice.reducer;