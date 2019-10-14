import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Services from './pages/Services';
import About from './pages/About';

import Comp from './components/Comp';
import Users from './components/Users';
import UserList from './components/UserList';

class App extends Component {
  // Task 3 Two-way data binding:
  constructor() {
    super();
    this.state = { value: '' };
  }
  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <Router>
        <div>
          <nav className='navbar navbar-dark navbar-expand-sm bg-primary justify-content-center'>
            <ul className='navbar-nav mr-auto '>
              <li>
                <Link to={'/'} className='nav-link'>
                  {' '}
                  HOME{' '}
                </Link>
              </li>
              <li>
                <Link to={'/projects'} className='nav-link'>
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link to={'/services'} className='nav-link'>
                  SERVICES
                </Link>
              </li>
              <li>
                <Link to={'/contact'} className='nav-link'>
                  CONTACT
                </Link>
              </li>
              <li>
                <Link to={'/about'} className='nav-link'>
                  ABOUT
                </Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/projects' component={Projects} />
            <Route path='/services' component={Services} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
        Task 3 Two-way data binding:
        <div>
          <input
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div>{this.state.value}</div>
        </div>
        <Comp />
        Task 5
        <Users country='Japan' />
        Task 6
        <UserList
          items={[
            'Leanne Graham',
            'Ervin Howell',
            'Clementine Bauch',
            'Patricia Lebsack'
          ]}
        />
      </Router>
    );
  }
}

export default App;
