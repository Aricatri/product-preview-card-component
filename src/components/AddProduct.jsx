import './AddProduct.css'
import icon_purchase from './img/icon-cart.svg'
function AddProduct(){
    return(
      <div className="service-type">
        <div className="icon-container">
        <img className="icon_img" src={icon_purchase}/>
        </div>
            <div className="button-container">
                <button className="change-button">Add to Cart</button>
            </div>
      </div>
    );
}



export default AddProduct
