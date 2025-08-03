import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav justify-content-evenly narutoNavbar fixed-top align-items-center">
              <li className="nav-item">
                <button
                  className="nav-link text-white rounded"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasExample"
                  aria-controls="offcanvasExample"
                  style={{ letterSpacing: "3px" }}
                >
                  Menu
                </button>
              </li>

              <li className="nav-item">
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle text-white rounded"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ letterSpacing: "3px" }}
                  >
                    Lista Favoritos
                    <span className="favorites">
                      {store.favorites.length}
                    </span>
                  </button>
                  <ul className="dropdown-menu">
                    {store.favorites.length > 0 ? (
                      store.favorites.map((fav) => (
                        <li
                          key={fav.id}
                          className="d-flex justify-content-between"
                        >
                          <Link
                            to={`/characters-details/${fav.id}`}
                            className="fw-bold my-1"
                          >
                            {fav.name}
                          </Link>
                          <button
                            onClick={() =>
                              dispatch({
                                type: "removeFavs",
                                payload: fav.id,
                              })
                            }
                            className="btnX p-1 ms-4"
                          >
                            ✕
                          </button>
                        </li>
                      ))
                    ) : (
                      <li className="ms-2">Vacío</li>
                    )}
                  </ul>
                </div>
              </li>

              <li className="nav-item">
                <Link className="text-decoration-none" to="/">
                  <button
                    className="btn nav-link text-white"
                    style={{ letterSpacing: "3px" }}
                  >
                    Inicio
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
