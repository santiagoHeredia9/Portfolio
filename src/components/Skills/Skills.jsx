import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.container}>
      <h2>Habilidades</h2>
      <div className={styles.skills}>
        <span>JavaScript</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>React</span>
        <span>Node.js</span>
        <span>Express</span>
        <span>Git</span>
        <span>GitHub</span>
        <span>SQL</span>
        <span>Wordpress</span>
      </div>
    </div>
  );
};

export default Skills;
