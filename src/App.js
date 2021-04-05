// import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import PageLayout from './components/Layout/PageLayout'
import BannerRoute from './routes/BannerRoute'
import ShortNotes from './routes/ShortNotes'
import AboutMe from './routes/AboutMe'
import Skills from './routes/Skills'
import MyPortfolio from './routes/MyPortfolio'
import ContactMe from './routes/ContactMe'
function App() {
  return (
    <Router>
    <PageLayout>
      
      <Route>
        <BannerRoute />
      </Route>

      <Route>
        <ShortNotes />
      </Route>

      <Route>
          <AboutMe />
      </Route>

      <Route>
        <Skills />
      </Route>

      <Route>
        <MyPortfolio />
      </Route>

      <Route>
        <ContactMe />
      </Route>

    </PageLayout>
    </Router>
  );
}

export default App;
