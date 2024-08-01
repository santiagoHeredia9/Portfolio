import GitHub from "../icons/Github.jsx";
import Gmail from "../icons/Gmail.jsx";
import LinkedIn from "../icons/LinkedIn.jsx";
import World from "../icons/World.jsx";
import CodeBracker from "../icons/CodeBracker.jsx";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <h1>
            Heredia Santiago <CodeBracker className={styles.icon1} />
          </h1>
          <h2>
            Desarrollador Full Stack junior, preparado para aprender y adquirir
            nuevas habilidades y asi lograr mis objetivos.
          </h2>
          <span className={styles.location}>
            <World className={styles.icon} />
            <p>Villa Allende - Córdoba - Argentina</p>
          </span>
          <footer className={styles.socialPill}>
            <a href="mailto:santiagoherediabrandolini@gmail.com?subject=Consulta&body=Hola%20Santiago,%0A%0AQuisiera%20hacerte%20una%20consulta...%0A%0ASaludos.">
              <Gmail className={styles.icon} />
            </a>
            <a
              href="https://www.linkedin.com/in/santiagohbwk19/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <LinkedIn className={styles.icon} />
            </a>
            <a
              href="https://github.com/santiagoHeredia9"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GitHub className={styles.icon} />
            </a>
          </footer>
          <footer className={styles.print}>
            <p>santiagoherediabrandolini@gmail.com</p>•
            <p>https://www.linkedin.com/in/santiagohbwk19/</p>•
            <p>+5493517024547</p>
          </footer>
        </div>
        <figure>
          <img className={styles.image} src="/imagenSinFondo.png" alt="profile" />
        </figure>
      </div>
    </>
  );
};

export default Hero;
