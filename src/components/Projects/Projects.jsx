import styles from "./Projects.module.css";
import WordPress from "../icons/WordPress";
import Bootstrap from "../icons/Bootstrap";
import Go from "../icons/Go";

const Projects = () => {
  return (
    <div className={styles.container}>
      <h2>Proyectos</h2>
      <ul className={styles.projects}>
        <li>
          <a
            href="https://lunchuppf.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.projectLink}
          >
            <article className={styles.project}>
              <header>
                <h3>LunchUP!</h3>
                <p>
                  Este proyecto fue mi primera experiencia en un entorno de
                  trabajo grupal. Gracias a esto, desarrollé la capacidad de
                  adaptarme al grupo y ofrecer lo mejor de mis habilidades según
                  las necesidades.
                </p>
              </header>
              <footer>
                <ul className={styles.tags}>
                  <div className={styles.pills}>
                    <li>
                      <img src="/React-icon.png" alt="React icon" />
                    </li>
                    <li>
                      <img src="/node-js.png" alt="NodeJS icon" />
                    </li>
                    <li>
                      <Bootstrap className={styles.icon} />
                    </li>
                  </div>
                  <li className={styles.link}>
                    <span className={styles.span}>
                      Ir al sitio <Go className={styles.go} />
                    </span>
                  </li>
                </ul>
              </footer>
            </article>
          </a>
        </li>

        <li>
          <a
            href="https://samuemergencias.com.ar/"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.projectLink}
          >
            <article className={styles.project}>
              <header>
                <h3>Samu emergencias</h3>
                <p>
                  Este es mi primer proyecto freelancer y también el primer
                  proyecto utilizando WordPress, el cual me enseñó las inmensas
                  libertades de esta herramienta.
                </p>
              </header>
              <footer>
                <ul className={styles.tags}>
                  <li>
                    <p>
                      <WordPress className={styles.icon} />
                    </p>
                  </li>
                  <li className={styles.link}>
                    <span>
                      Ir al sitio <Go className={styles.go} />
                    </span>
                  </li>
                </ul>
              </footer>
            </article>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
