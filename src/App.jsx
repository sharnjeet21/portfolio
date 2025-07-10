import { useState } from 'react'
import './App.css'
import RootLayout from './layout'
import Page from './page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RootLayout />
    </>
  )
}

export default App
