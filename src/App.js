import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import SideBar from './SideBar/SideBar' 
import './SideBar/SideBar.css'
import Footer from './Footer/Footer'
import Rectangle from'./Rectangle.png'
import Careere from './Careere.png'
import Homes from './Homes.png'

const Home = () => {
  return (
      <div className='home'> 
          <h1>Grow up your sells with us.</h1>
          <p>Build one project that runs natively on all your term nowusers' devices to turn for that you can do.</p>
          <img src={Homes} alt={"pictures"} />
      </div>
  )
}
const Careers = () => {
  return (
         <div className='careers'>
             <h1>Careers</h1>
             <p>Build one project that runs natively on all your term nowusers' devices to turn for that you can do.</p>
             <img src={Careere} alt={"pictures"} />
         </div>
  )
}
const AboutUs = () => {
  return (
      <div className='aboutus'> 
          <h1>ABOUT US</h1>
          <p>Build one project that runs natively on all your term nowusers' devices to turn for that you can do.</p>
          <p>Our door is always open. Love your sample? Have questions? There’s a real person to hear what you think on the other side →</p>
      </div>
  )
}
const Products = () => {
  return (
      <div className='products'>
          <h1>Products</h1>
          <p>Build one project that runs natively on all your term nowusers' devices to turn for that you can do.</p>
          <img src={Rectangle} alt={"pictures"} />
      </div>
  )
}


function App() {
  return (
    
      <BrowserRouter>

        <SideBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/products' element={<Products />} />
          <Route path='/aboutus' element={<AboutUs />} />
        </Routes>
        <Footer />

      </BrowserRouter>

    
  );
}

export default App