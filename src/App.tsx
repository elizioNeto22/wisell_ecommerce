import React from 'react'
import Routes from './routes/Routes'
import { BrowserRouter } from 'react-router-dom'

import './App.css'

import Layout from './components/layout/Layout'

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
