import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Menu from './components/Menu/Menu.jsx';
import Footer from './components/Footer/Footer.jsx';
import Movies from './containers/Movies/Movies.jsx';

function App() {
  return (
      <div className="peliculas">
        <BrowserRouter>
          <Header/>
          <Menu/>
          <Switch>
            <Route path="/:movieType/:title?" component={Movies} exact/>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </div>
  );
}

export default App;
