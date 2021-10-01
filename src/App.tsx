import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <div>
            <Route path='/home'>
              <Home />
            </Route>
          </div>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
