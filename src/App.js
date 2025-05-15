import './App.css';
import { SearchBar } from './components/searchbar/searchebar';
import img from'./assets/img/weather.png'
import Result from './components/affichage/Result';

function App() {
  return (
   
    <div className="App" style={{backgroundImage: `url(${img})`}} >
      <SearchBar/>
      <Result/>
    </div>
  );
}

export default App;
