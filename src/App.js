import "./App.css";
import NewsFeed from "./components/NewsFeed";

function App() {
  return (
    <div className="App">
      <h1 style={{ textShadow: "2px 2px 5px green" }}>Welcome to News feed</h1>
      <NewsFeed />
    </div>
  );
}

export default App;
