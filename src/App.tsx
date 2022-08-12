import './App.css';
import ListaRepositoriosFunction from './components/ListaRepositoriosFunction';
import ListaRepositoriosClass from './components/ListaRepositoriosClass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ListaRepositoriosClass />
        <ListaRepositoriosFunction />
      </header>
    </div>
  );
}

export default App;