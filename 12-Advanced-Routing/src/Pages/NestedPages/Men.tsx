import { Link } from 'react-router-dom'

const Men = () => {
  return (
    <div>
      <div>
        <Link className=" text-4xl px-2" to="/Products">
          ←
        </Link>
      </div>
      <h1>Men's collection</h1>
    </div>
  )
}

export default Men
