import logo from './logo.svg';
import './App.css';

function App() {
  // Function to fetch data from Reddit
  const fetchRedditPosts = async () => {
    const response = await fetch('https://www.reddit.com/r/all/top.json');
    const data = await response.json();
    return data.data.children;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
