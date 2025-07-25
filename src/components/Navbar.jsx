import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">

				<button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
					Menu
				</button>
				<div className="ml-auto">
					<Link to="/">
						<button className="btn btn-primary">Inicio</button>
					</Link>

				</div>
			</div>
		</nav>
	);
};