
import './App.css';
import Counter from './components/Counter';
import { Header } from './Header';
import { DevTwo } from './DevTwo';
function App() {
  return (
    <div className="App">
     <h1>Counter App</h1>
     <Header/>
     <Counter/>
     <DevTwo/>
    </div>
  );
}

export default App;
