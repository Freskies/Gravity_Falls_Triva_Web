import players from "./players.json";
import questions from "./questions.json";

const DEFAULT_POINTS_TO_WIN = 10;
const MAX_NUMBER_OF_PLAYERS = players.length;
const NUMBER_OF_QUESTIONS = questions.length;

function getMaxNumberOfPoints (numberOfPlayers) {
	return Math.floor(NUMBER_OF_QUESTIONS / numberOfPlayers);
}

export { DEFAULT_POINTS_TO_WIN, MAX_NUMBER_OF_PLAYERS, NUMBER_OF_QUESTIONS, getMaxNumberOfPoints };