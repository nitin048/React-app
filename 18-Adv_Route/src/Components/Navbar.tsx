import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex py-4 px-8 bg-cyan-600 justify-between items-center">
      <h2 className="text-2xl font-bold">Nitin Pradhan</h2>
      <div className=" flex gap-10 text-l font-bold">
        <Link to="/">Home</Link>
        <Link to="/Products">Products</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
