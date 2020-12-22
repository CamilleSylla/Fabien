import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import TopNav from './Components/NavBar/TopNav';
import SinglePage from './Components/SinglePage';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <Route exact path="/" component={SinglePage} />
    </div>
  );
}

export default App;
