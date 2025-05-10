import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./features/quiz/quizSlice.js";
import homeReducer from "./features/home/homeSlice.js";

const store = configureStore({
	reducer: {
		home: homeReducer,
		quiz: quizReducer,
	},
});

export default store;