import logo from './logo.svg';
import './App.css';


import {MyCoolButton} from "./components/MyCoolButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyCoolButton Tovchner='like' text='logo'/>
        <MyCoolButton Tovchner='unlike'/>
        <MyCoolButton text='test'/>
      </header>
    </div>
  );
}

export default App;
