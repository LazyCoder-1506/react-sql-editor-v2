import React, { Suspense, lazy } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoadingPage from './components/pages/LoadingPage'
import { Provider } from 'react-redux'
import store from './store/store'
const LandingPage = lazy(() => import('./components/pages/LandingPage'))
const EditorPage = lazy(() => import('./components/pages/EditorPage'))

function App() {

  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/editor' element={
              <Provider store={store}>
                <EditorPage />
              </Provider>
            } />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  )
}

export default App
