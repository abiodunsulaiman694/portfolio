// import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import PageLayout from './components/Layout/PageLayout'
import BannerRoute from './routes/BannerRoute'
import ShortNotes from './routes/ShortNotes'
import AboutMe from './routes/AboutMe'
import Skills from './routes/Skills'
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

    </PageLayout>
    </Router>
  );
}

export default App;
