import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductComponent from './containers/ProductComponent';
import ProductDetail from './containers/ProductDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<ProductListing />}></Route>
          <Route path='/product/:productId' element={<ProductDetail />}></Route>
          <Route>404 Page Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
