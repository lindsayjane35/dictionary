import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          This project was coded by Lindsay Land and is open-sourced on{" "}
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
