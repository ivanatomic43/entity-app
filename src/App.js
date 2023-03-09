import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from 'react-router'

import Sidebar from './components/Sidebar'
import EntityPage from './pages/EntityPage'

function App() {

  //izvuci sve entitije iz baze i izlistaj kao rute
  return (
    <>
    <Router>
      <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
        <Sidebar/>
          <div className="col-span-5">
            <Routes>
              <Route exact path='/' element={<EntityPage></EntityPage>} />
              <Route path="/tasks" element={<EntityPage></EntityPage>} />
            </Routes>
        </div>
    </div>
    </Router>
  </>
  )
}

export default App
