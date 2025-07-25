import { Link } from "react-router-dom";


export const Navbar = () => {


	return (
		<>
			<ul className="nav justify-content-center bg-dark text-dark fs-4">
				<li className="nav-item">
					<button className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
						Menu
					</button>
				</li>

				<li className="nav-item">
					<a className="nav-link" href="#">
						Link
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Link
					</a>
				</li>
				<li className="nav-item">
					<Link to="/">
						<button className="nav-link">Inicio</button>
					</Link>
				</li>
			</ul>

			<div
				className="offcanvas offcanvas-start"
				tabIndex={-1}
				id="offcanvasExample"
				aria-labelledby="offcanvasExampleLabel"
			>
				<div className="offcanvas-header">
					<h5 className="offcanvas-title" id="offcanvasExampleLabel">
						MENU
					</h5>
					<button
						type="button"
						className="btn-close"
						data-bs-dismiss="offcanvas"
						aria-label="Close"
					/>
				</div>
				<div className="d-block justify-content-start my-2">
					<div className="text-start">
						<ul>
							<li>
								<Link to={'/characters-list'}>
									<a>Lista personajes</a>
								</Link>
							</li>
							<li>
								<Link to="/">
									<span className="navbar-brand mb-0 h1">Home</span>
								</Link>
							</li>
						</ul>

					</div>


				</div>
			</div>
		</>

	);
};