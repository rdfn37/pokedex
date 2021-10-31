import Card from './components/Card';
import './styles/App.css';

function App() {

  const gambs = []
  for (var i = 1; i < 150; i++) {
    gambs.push(i)
  }
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className="poke-container" id="poke-container">
          {gambs.map( index => (
            <Card index={index} />
          ))}
      </div>
    </div>
  );
}

export default App;
