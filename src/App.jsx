import styles from "./App.module.css";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <main className={styles.container}>
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
    </main>
  );
}

export default App;
