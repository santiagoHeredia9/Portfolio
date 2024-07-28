import styles from "./Projects.module.css";
import WordPress from "../icons/WordPress";
import Bootstrap from "../icons/Bootstrap";

const Projects = () => {
  return (
    <div className={styles.container}>
      <h2>Proyectos</h2>
      <ul className={styles.projects}>
        <li>
          <article className={styles.project}>
            <header>
              <a href="#">
                <h3>LunchUP!</h3>
              </a>

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
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://lunchuppf.netlify.app/"
                  >
                    Ir al sitio
                  </a>
                </li>
              </ul>
            </footer>
          </article>
        </li>

        <li>
          <article className={styles.project}>
            <header>
              <a href="#">
                <h3>Samu emergencias</h3>
              </a>

              <p>
                Este es mi primer proyecto freelancer y tambien el primer
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
                  <a
                    href="https://samuemergencias.com.ar/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Ir al sitio
                  </a>
                </li>
              </ul>
            </footer>
          </article>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
