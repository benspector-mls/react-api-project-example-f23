import './App.css'
import Home from './pages/Home.jsx'
import Artworks from './pages/Artworks.jsx'
import ArtworkDetails from './pages/ArtworkDetails.jsx'
import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <nav>
          <p>Art Institute of Chicago</p>
          <ul className="nav-links">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/artworks'>Artworks</NavLink>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/artworks' element={<Artworks />} />
          <Route path='/artworks/:artworkId' element={<ArtworkDetails />} />
        </Routes>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
