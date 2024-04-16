
import './App.css';
import Counter from './components/Counter';
import { Header } from './Header';

function App() {
  return (
    <div className="App">
     <h1>Counter App</h1>
     <Header/>
     <Counter/>
    </div>
  );
}

export default App;
