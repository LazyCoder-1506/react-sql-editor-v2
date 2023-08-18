import React, { Suspense, lazy } from 'react'
import './App.css'
const EditorPage = lazy(() => import('./components/pages/EditorPage'))

function App() {

  return (
    <>
      <Suspense fallback={<div>loading</div>}>
      <EditorPage />
      </Suspense>
    </>
  )
}

export default App
