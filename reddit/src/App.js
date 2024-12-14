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
    <Router>
      <Routes>
        <Route path="/" element={<postList />} />
        <Route path="/post/:id" element={<postDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
