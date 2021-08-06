import Bubble from './components/Bubbles/Bubble';
import './App.css';

let bubbles = [];
for (let i = 0; i < 5; i++) {
  bubbles.push(<Bubble dimensions={Math.floor(Math.random()*1000)}/>);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {bubbles}
      </header>
    </div>
  );
}

export default App;
