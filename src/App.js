import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import './App.css'
import SideBar from './SideBar/SideBar' 
import './SideBar/SideBar.css'
import Footer from './Footer/Footer'
import Rectangle from'./Rectangle.png'
import Careere from './Careere.png'
import Homes11 from './Homes11.png'
import AboutUs from './Links/AboutUs'

const Home = () => {
  return (
      <div className='home'> 
          <h1>Grow up your sells with us.</h1>
          <p>Build one project that runs natively on all your term nowusers' devices to turn for that you can do.</p>
          
          <ul className='article_list'>
            <li className='article_item'><Link to='/article1'>Read more about our company</Link></li>
            <li className='article_item'><Link to='/article2'>Read more about careere in our company</Link></li>
            <li className='article_item'><Link to='/article3'>Read more about our products</Link></li>
          </ul>
          <img src={Homes11} alt={"pictures"} />
      </div>
  )
}

const Article1 = () => {

  return(
    <div className='article'>
      <h2>First article</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  )
}
const Article2 = () => {

  return(
    <div className='article'>
      <h2>Second article</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  )
}
const Article3 = () => {

  return(
    <div  className='article'>
      <h2>Third article</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
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
          <Route path='/' element={<Home />}/>
          <Route path= '/article1' element={<Article1/>} />
          <Route path= '/article2' element={<Article2/>} />
          <Route path= '/article3' element={<Article3/>} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/products' element={<Products />} />
          <Route path='/aboutus' component={AboutUs} />
        </Routes>
        <Footer />

      </BrowserRouter>

    
  );
}

export default App