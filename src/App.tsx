// import { useState } from 'react'
import './App.css'
import TowerSelector from './components/Towers'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-100 via-sky-100 to-emerald-100">
      <header className="bg-white/80 shadow-sm backdrop-blur">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-extrabold text-emerald-700 tracking-tight drop-shadow">Real Estate Tour</h1>
        </div>
      </header>
      <main>
        <TowerSelector />
      </main>
    </div>
  )
}

export default App
