import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import TopNav from './Components/NavBar/TopNav';
import Layout from './Components/HeroBanner/Layout';
import Magasin from './Components/Magasin/Magasin';
import Marque from './Components/Marques/Marque';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <Route exact path="/" component={Layout} />
      <Route path="/magasin" component={Magasin} />
      <Route path="/marques" component={Marque} />
    </div>
  );
}

export default App;
