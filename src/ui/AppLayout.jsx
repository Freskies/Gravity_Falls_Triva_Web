import { Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { createPlayers, getPlayers } from "../features/quiz/quizSlice.js";

function AppLayout () {
	const dispatch = useDispatch();
	const players = useSelector(getPlayers);

	console.log(players);

	return <>
		<h1>HELLO</h1>
		<button onClick={() => dispatch(createPlayers(4))}>GENERATE</button>
		<Outlet/>
	</>;
}

export default AppLayout;