
import perfume1 from './components/img/image-product-desktop.jpg';
import perfume2 from './components/img/image-product-mobile.jpg';
import ProductDescription from './components/ProductDescription';
import AddPurchase from './components/AddProduct';
import ProductPrice from './components/ProductPrice';
import './App.css'

function App() {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img className="card-image1" src={perfume1} alt="perfumeDesktop" />
        <img className='card-image2' src={perfume2} alt='perfumePhone' />
      </div>
      <div className="card">
        <p className="sub-title">PERFUME</p>
        <div className="card-body">
          <h2 className="card-title">Gabrielle Essence Eau De Parfum</h2>
          <div className="plan-details">
            <ProductDescription/>
          </div>
          <div className="action-buttons">
            <ProductPrice/>
            <AddPurchase/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
