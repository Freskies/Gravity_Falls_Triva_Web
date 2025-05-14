import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./features/quiz/quizSlice.js";
import playersReducer from "./features/players/playersSlice.js";

const store = configureStore({
	reducer: {
		quiz: quizReducer,
		players: playersReducer,
	},
});

export default store;