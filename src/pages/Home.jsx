import { Link } from "react-router-dom";


export const Home = () => {


	return (
		<div className="text-center mt-5">
			<h1>Bienvenido al Blog de Naruto</h1>
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

		</div>

	);
}; 