import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const Navbar = () => {

  const { store, dispatch } = useGlobalReducer();

  

  return (
    <>
      <ul className="nav justify-content-evenly transparentNarutoNavbar fixed-top align-items-center">
  <li className="nav-item">
    <button
      className="nav-link text-white"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasExample"
      aria-controls="offcanvasExample"
    >
      Menu
    </button>
  </li>

  <li className="nav-item">
    <div className="dropdown">
      <a
        className="btn dropdown-toggle text-white"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Lista Favoritos 
        <span className="transparentFavCounter"> {store.favorites.length}</span>
      </a>
      <ul className="dropdown-menu">
        {store.favorites.length > 0 ? (
          store.favorites.map((fav) => (
            <li
              key={fav.id}
              className="d-flex justify-content-between px-1 py-1"
            >
              <Link
                to={`/characters-details/${fav.id}`}
                className="text-decoration-none"
              >
                {fav.name}
              </Link>
              <button 
                onClick={() => dispatch({
                  type: 'removeFavs',
                  payload: fav.id
                })} 
                className="btn p-1"
              >
                ✕
              </button>
            </li>
          ))
        ) : (
          <li>Vacío</li>
        )}
      </ul>
    </div>
  </li>

  <li className="nav-item">
    <a className="nav-link" href="#">
      Link
    </a>
  </li>

  <li className="nav-item">
    <Link className="text-decoration-none" to="/">
      <button className="btn nav-link text-white">Inicio</button>
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
          <h5 className="offcanvas-title text-dark" id="offcanvasExampleLabel">
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
                <Link to={"/characters-list"}>
                  <a>Lista personajes</a>
                </Link>
              </li>
              <li>
                <Link to={"/akatsuki-list"}>
                  <a>Personajes Akatsuki</a>
                </Link>
              </li>
              <li>
                <Link to={"/tailed-beasts"}>
                  <a>Lista de Bestias</a>
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
