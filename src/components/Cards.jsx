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
    return <p>Cargando...</p>
  }

  return (
    <>
      <div class="cards">
        <div class="cards-inner">
          <div class="cards-front">
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
          <div class="cards-back">
            <h5 className="fw-bold">{character.name}</h5>
            <p className="">
              <strong>Sexo:</strong> {character.personal.sex}
            </p>
            <p>
                <strong>Jutsu:</strong> {!character.jutsu ? 'No tiene jutsus' : character.jutsu[0] }
            </p>
            <div className="d-flex justify-content-between">
              <Link to={`/characters-details/${character.id}`}>
                <button className="btn btn-primary">Ver detalles</button>
              </Link>
              <label className="ui-bookmark ">
                <input checked={isChecked} onClick={handleOnClick} type="checkbox" />
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
