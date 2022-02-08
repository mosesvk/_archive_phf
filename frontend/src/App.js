import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Nav from './components/Nav/nav'
import Footer from './components/Footer/Footer'
import routes from './routes'

function App() {

  return (
    <Router>
      <Nav/>
      {routes}
      <Footer />
    </Router>
  );
}

export default App;
