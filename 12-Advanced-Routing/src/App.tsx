import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'
import Products from './Pages/Products'
import Men from './Pages/NestedPages/Men'
import Women from './Pages/NestedPages/Women'
import Courses from './Pages/Courses'
import CourseDetail from './Pages/NestedPages/CourseDetail'

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />}>
          <Route path="Men" element={<Men />} />
          <Route path="Women" element={<Women />} />
        </Route>
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Courses/:Course_id" element={<CourseDetail />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
