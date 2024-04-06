import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="dictionary" />
        </main>
        <footer className="text-center">
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/lindsay-land-673a742b/"
            target="_blank"
            rel="noreferrer"
          >
            Lindsay Land
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/lindsayjane35/dictionary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
