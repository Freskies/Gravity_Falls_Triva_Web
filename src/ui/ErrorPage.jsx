import { Link, useNavigate } from "react-router";

function ErrorPage () {
	const navigate = useNavigate();
	return <main className={`grid place-content-center h-full`}>
		<div className={`py-2 px-3 bg-stone-200`}>
			<p>Page not found</p>
			<Link onClick={() => navigate(-1)} to={""}>Go back</Link>
		</div>
	</main>;
}

export default ErrorPage;