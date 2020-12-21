import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import TopNav from './Components/NavBar/TopNav';
import Layout from './Components/HeroBanner/Layout';
import Magasin from './Components/Magasin/Magasin';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <Route path="/" component={Layout} />
      <Route path="/magasin" component={Magasin} />
    </div>
  );
}

export default App;
