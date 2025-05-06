import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./features/quiz/quizSlice.js";
import settingsReducer from "./features/settings/settingsSlice.js";

const store = configureStore({
	reducer: {
		settings: settingsReducer,
		quiz: quizReducer,
	},
});

export default store;