import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCharactersById } from "../ServicesApi/narutoApi";
import useGlobalReducer from "../hooks/useGlobalReducer";
import styles from "../pages/styles/components/CharactersList.module.css";

export const CharacterDetails = () => {
  const { store, dispatch } = useGlobalReducer();
  const { id } = useParams();
  const navigate = useNavigate();

  const dataContent = async () => {
    const data = await getCharactersById(id);
    dispatch({
      type: "detailCharacter",
      payload: data,
    });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dataContent();
  }, [id]);

  if (!store.detailCharacter) {
    return <p>Cargando</p>;
  }

  console.log(store.detailCharacter);

  return (
    <>
      <section className="card-list">
        <div className={styles.narutoCard}>
          <div className={styles.cardImage}>
            <img
              src={store.detailCharacter.images[0]}
              alt={store.detailCharacter.name}
            />
          </div>

          <div className={styles.cardContent}>

            <div>
              <h2 className={styles.characterName}>
                {store.detailCharacter.name}
              </h2>

              <p className={styles.characterRank}>
                Clan: {" "}
                {store.detailCharacter.personal?.clan ||
                  store.detailCharacter.personal?.affiliation[1] ||
                  "S/N"}
              </p>
            </div>

            <div className={styles.characterStats}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Cumpleaños:</span>
                <span className={styles.statValue}>
                  {!store.detailCharacter.personal.birthdate ? 'S/N' : store.detailCharacter.personal.birthdate}
                </span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Sexo:</span>
                <span className={styles.statValue}>
                  {!store.detailCharacter.personal.sex
                    ? "S/N"
                    : store.detailCharacter.personal.sex}
                </span>
              </div>

              <div className={styles.statItem}>
                <span className={styles.statLabel}>Debut:</span>
                <span className={styles.statValue}>
                  {!store.detailCharacter.debut.anime 
                  ? 'S/N'
                : store.detailCharacter.debut.anime}
                </span>
              </div>

              <div className={styles.statItem}>
                <span className={styles.statLabel}>Jutsu:</span>
                <span className={styles.statValue}>
                  {!store.detailCharacter.jutsu
                    ? "No tiene jutsus"
                    : store.detailCharacter.jutsu[0]}
                </span>
              </div>
            </div>
            <button
              onClick={handleGoBack}
              className={`w-50 ${styles.actionButton}`}
            >
              Volver
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
