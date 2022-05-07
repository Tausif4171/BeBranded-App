import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import Footer from './containers/Footer';
import CarouselSlider from './containers/Carousel';
import Home from './containers/Home';
import ProductListing from './containers/ProductListing';
import ProductComponent from './containers/ProductComponent';
import ProductDetail from './containers/ProductDetail';
import Contact from './containers/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <CarouselSlider />
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/productListing' exact element={<ProductListing />}></Route>
          <Route path='/product/:productId' element={<ProductDetail />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route>404 Page Not Found</Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
