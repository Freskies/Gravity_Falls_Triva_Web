import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	players: [],
};

const quizSlice = createSlice({
	name: "quiz",
	initialState,
	reducers: {
		fooAction (state) {

		},
	},
});

function getPlayers (state) {
	return state.quiz.players;
}

export { getPlayers };
export const { fooAction } = quizSlice.actions;
export default quizSlice.reducer;