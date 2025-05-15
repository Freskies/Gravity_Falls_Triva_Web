import { Form } from "react-router";
import { DEFAULT_POINTS_TO_WIN, getMaxNumberOfPoints, MAX_NUMBER_OF_PLAYERS } from "../data/info.js";
import { useState } from "react";

const possiblePlayersNumber = Array.from({ length: MAX_NUMBER_OF_PLAYERS }, (_, i) => i + 1);

function HomePage () {
	const [numberOfPlayers, setNumberOfPlayers] = useState(1);

	return <div className={`h-full bg-amber-100`}>
		<header className={`h-[20%] bg-amber-300`}>
			<img src="/gravity-falls-logo.png" alt={"Gravity falls logo"}/>
		</header>
		<main className={`h-[70%] grid place-items-center`}>
			<Form method="POST" className={`min-w-8 w-[80%] max-w-80 h-120 flex flex-col gap-5 relative bg-red-100`}>
				<label className={`flex flex-col`}>
					<span>Number of Players:</span>
					<select name="numberOfPlayers" value={numberOfPlayers}
					        onChange={e => setNumberOfPlayers(+e.target.value)}>
						{possiblePlayersNumber.map(n => <option key={`nof${n}`}>{n}</option>)}
					</select>
				</label>
				<label>
					<span>Points to win:</span>
					<input
						type="number"
						name="pointsToWin"
						min={1}
						max={getMaxNumberOfPoints(numberOfPlayers)}
						defaultValue={DEFAULT_POINTS_TO_WIN}
						required
					/>
				</label>
				<button type="submit" className={`px-6 py-2 bg-amber-200 rounded-4xl justify-self-end place-self-end`}>
					START QUIZ
				</button>
			</Form>
		</main>
		<footer></footer>
	</div>;
}

export default HomePage;