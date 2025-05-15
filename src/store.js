import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./features/quiz/quizSlice.js";
import playersReducer from "./features/players/playersSlice.js";

const store = configureStore({
	reducer: {
		players: playersReducer,
		quiz: quizReducer,
	},
});

export default store;