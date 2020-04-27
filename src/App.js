import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Page2 from './pages/Page2/Page2';
import Page3 from './pages/Page3/Page3';
import Page4 from './pages/Page4/Page4';


class App extends Component {
  render() {
    return (
        <div className='App'>
        <Router>
          <div>
          <Header />
          <Container fluid={true}>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/page2' component={Page2}/>
              <Route path='/page3' component={Page3}/>
              <Route path='/page4' component={Page4}/>
            </Switch>
          </Container>
          <Footer />
          </div>
          </Router>
        </div>
    );
  }
}

export default App;
