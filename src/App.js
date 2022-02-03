import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <hi>Dictionary 📚</hi>
        </header>
        <main>
          <Dictionary defaultKeyword="Pomeranian" />
        </main>
        <footer className="App-footer">
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/workshops/shecodes-responsive-42ca8482-5476-4b51-8a68-fb27a819d71e/projects/620140"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mary Mecham
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/mmecham44/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://infallible-lichterman-874322.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
