import styles from "../pages/styles/pages/Home.module.css";


export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.container}>
        <div className={styles.spark}></div>
        <div className={styles.spark}></div>
        <div className={styles.spark}></div>
        <div className={styles.spark}></div>

        <img 
        src="src/assets/img/narutoTeam.png" alt="naruto"
        className="p-3"
         />
        <p className={styles.subtitle}>Mundo Ninja</p>
        <p className={styles.description}>
          Descubre los secretos del universo ninja mas famoso. Aqui encontraras a todos los ninjas y podras descubrir
           todos sus detalles para conecer bien a tus personajes favoritos.
        </p>
        <button
          className={styles.button}
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          Menu
        </button>
      </div>
    </div>
  );
};
