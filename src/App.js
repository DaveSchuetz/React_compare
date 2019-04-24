import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import './App.css'
import pg1 from './pg1';
import pg2 from './pg2';

class App extends Component {
  render() {
    return (
      <div className="landing">
        <header>
          <h1>Test Newsletter in React</h1>
          <h3>Creating pages to experience the differences using React, Vue, and Angular.</h3>
          <Link to='/pg1'><button>Page 1</button></Link>
          <Link to='/pg2'><button>Page 2</button></Link>
        </header>
        <main>
          <Switch>
            <Route path='/pg1' component={pg1} />
            <Route path='/pg2' component={pg2} />
            <Route path='/*' render={() => <Redirect to='/pg1' />} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App