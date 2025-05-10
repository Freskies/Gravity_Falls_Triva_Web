import players from "./players.json";
import questions from "./questions.json";

const MAX_NUMBER_OF_PLAYERS = players.length;
const MAX_NUMBER_OF_QUESTIONS = questions.length;

function getMaxNumberOfTurns (numberOfPlayers) {
	return Math.floor(MAX_NUMBER_OF_QUESTIONS / numberOfPlayers);
}

export { MAX_NUMBER_OF_PLAYERS, MAX_NUMBER_OF_QUESTIONS, getMaxNumberOfTurns };