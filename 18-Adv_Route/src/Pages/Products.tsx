import { Link, Outlet} from 'react-router-dom'
import ReturnHome from '../Components/ReturnHome'

const Products = () => {
  return (
    <div >
      <ReturnHome/>
      <div className="flex justify-center gap-10 py-4">
        <Link className="text-xl font-semibold" to="Men">
          Men
        </Link>
        <Link className="text-xl font-semibold" to="Women">
          Women
        </Link>
      </div>
      <Outlet/>
      
    </div>
  )
}

export default Products
