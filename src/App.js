import './styles/App.css';
import Education from "./components/Education.js"
import Experience from "./components/Experience.js"
import Personal from "./components/Personal.js"

function App() {
  return (
    <div className="App">
        <Personal />
        <Education />
        <Experience />
    </div>
  );
}

export default App;
