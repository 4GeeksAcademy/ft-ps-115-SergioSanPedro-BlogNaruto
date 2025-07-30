import { Link } from "react-router-dom";
import styles from "../pages/styles/components/SideBar.module.css";

export const SideBar = () => {
  return (
    <>
      <div
        className={`offcanvas offcanvas-start ${styles.narutoSidebar}`}
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        {/* HEADER */}
        <div className={`offcanvas-header ${styles.sidebarHeader}`}>
          <div
            className={`offcanvas-title ${styles.sidebarTitle}`}
            id="offcanvasExampleLabel"
          >
            <img className="w-100 ms-1" src="src/assets/img/logoNaruto.png" alt="naruto" />
            
          </div>
          <button
            type="button"
            className={`btn-close ${styles.closeButton}`}
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >❌</button>
        </div>

        
        <div className={`offcanvas-body ${styles.sidebarBody}`}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link to="/characters-list" className={styles.menuLink}>
                <span className={styles.menuEmoji}>📜</span>
                Lista personajes
              </Link>
            </li>

            <li className={styles.menuItem}>
              <Link to="/akatsuki-list" className={styles.menuLink}>
                <span className={styles.menuEmoji}>⚡</span>
                Personajes Akatsuki
              </Link>
            </li>

            <li className={styles.menuItem}>
              <Link to="/tailed-beasts" className={styles.menuLink}>
                <span className={styles.menuEmoji}>🦊</span>
                Lista de Bestias
              </Link>
            </li>

            <li className={styles.menuItem}>
              <Link to="/" className={styles.menuLink}>
                <span className={styles.menuEmoji}>🏠</span>
                Home
              </Link>
            </li>
          </ul>
          <img
          className="ms-5" src="src/assets/img/pngwing.com.png" alt="" />
        </div>
      </div>
    </>
  );
};
