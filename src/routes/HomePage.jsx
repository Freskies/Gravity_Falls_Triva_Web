import { Form } from "react-router";
import { getMaxNumberOfTurns, MAX_NUMBER_OF_PLAYERS } from "../data/info.js";
import { useState } from "react";

const possiblePlayersNumber = Array.from({ length: MAX_NUMBER_OF_PLAYERS }, (_, i) => i + 1);

function HomePage () {
	const [numberOfPlayers, setNumberOfPlayers] = useState(1);
	const maxNumberOfTurn = getMaxNumberOfTurns(numberOfPlayers);

	return <div className={`h-full bg-amber-100`}>
		<header>
			<h1 className={`text-center text-2xl font-extrabold`}>GRAVITY FALLS TRIVIA</h1>
		</header>
		<main>
			<Form method="POST">
				<label>
					<span>Number of Players:</span>
					<select name="numberOfPlayers" value={numberOfPlayers}
					        onChange={e => setNumberOfPlayers(+e.target.value)}>
						{possiblePlayersNumber.map(n => <option key={`nof${n}`}>{n}</option>)}
					</select>
				</label>
				<label>
					<span>Number of Turn:</span>
					<input
						type="number"
						name="numberOfTurns"
						min={1}
						max={maxNumberOfTurn}
						defaultValue={10}
						required
					/>
				</label>
				<button type="submit">START QUIZ</button>
			</Form>
		</main>
		<footer></footer>
	</div>;
}

export default HomePage;