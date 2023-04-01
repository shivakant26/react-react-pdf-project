import './App.css';
import About from './Component/About';
import { Home } from './Component/Home';

function App() {
  return (
    <div className="App container mx-auto px-4">
      <p class="italic ...">The quick brown fox ...</p>
      {/* <About /> */}
      <Home />
    </div>
  );
}

export default App;
