// import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import PageLayout from './components/Layout/PageLayout'
import BannerRoute from './routes/BannerRoute'

function App() {
  return (
    <Router>
    <PageLayout>
      <Route>
        <BannerRoute />
      </Route>

    </PageLayout>
    </Router>
  );
}

export default App;
