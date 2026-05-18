import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div id="nav">
      <h3>Nitin Pradhan</h3>
      <div>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  )
}
