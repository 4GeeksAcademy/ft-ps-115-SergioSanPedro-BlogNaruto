import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const Navbar = () => {


	const { store, dispatch } = useGlobalReducer();

	console.log(store.favorites);


	return (
		<>
			<ul className="nav justify-content-center bg-dark text-dark fs-4">
				<li className="nav-item">
					<button className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
						Menu
					</button>
				</li>

				<li className="nav-item">
					<div className="dropdown">
						<a
							className="btn btn-secondary dropdown-toggle"
							href="#"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Dropdown link
						</a>
						<ul className="dropdown-menu">
							{
								store.favorites.length > 0
									?
									store.favorites.map(fav => (
										<Link key={fav.id} to={`/characters-details/${fav.id}`}>
											<li>{fav.name}</li>
										</Link>
									))
									:
									<li>Vacio</li>
							}

						</ul>
					</div>

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



			{/* menu lateral */}
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
								<Link to={'/akatsuki-list'}>
									<a>Personajes Akatsuki</a>
								</Link>
							</li>
							<li>
								<Link to="/">
									<a>Home</a>
								</Link>
							</li>
						</ul>

					</div>


				</div>
			</div>
		</>

	);
};