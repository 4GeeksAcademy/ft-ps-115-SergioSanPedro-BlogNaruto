import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Cards = ({ character }) => {
  const { store, dispatch } = useGlobalReducer();

  const isChecked = store.favorites.some((fav) => fav.id === character.id);

  const handleOnClick = () => {
    const inFavorites = store.favorites.some((fav) => fav.id === character.id);

    if (inFavorites) {
      dispatch({
        type: "removeFavs",
        payload: character.id,
      });
    } else {
      dispatch({
        type: "favorites",
        payload: character,
      });
    }
  };

  if (store.akatsuki.length === 0) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <div className="cards">
        <div className="cards-inner">
          <div className="cards-front">
            <img
              src={character.images[0]}
              className="cards-img"
              style={{
                padding: "0px",
                width: "22rem",
                height: "16rem",
                borderRadius: "10px",
              }}
              alt={character.image}
            />
          </div>
          <div className="cards-back d-flex flex-column h-100" style={{color: 'black'}}>
            <div className="flex-grow-1">
              <h3 className="fw-bold text-center mt-3"><strong>Ninja:</strong></h3>
              <h3 className="fw-bold text-center mt-5"><strong>{character.name}</strong></h3>
            </div>
            <div className="mt-auto d-flex justify-content-between align-items-center mb-1">
              <Link to={`/characters-details/${character.id}`}>
                <button className="btn btn-primary rounded-pill">
                  Ver detalles
                </button>
              </Link>
              <label className="ui-bookmark">
                <input
                  checked={isChecked}
                  onChange={handleOnClick}
                  type="checkbox"
                />
                <div className="bookmark">
                  <svg
                    viewBox="0 0 16 16"
                    style={{ marginTop: 4 }}
                    className="bi bi-heart-fill"
                    height={25}
                    width={25}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
