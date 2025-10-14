import { useLocation } from 'react-router-dom'
import '../Styles/UserViewProduct.css'

function ViewProduct() {
    let location = useLocation();
    console.log(location.state);
    let product = location.state
    return (
        <>
            <div className="viewProduct">
                <div className="productImage">
                    <img src={product.image} alt={product.Prname} />
                </div>
                <div className="productInfo">
                    <h1>{product.brand}</h1>
                    <hr />
                    <h3>{product.Prname}</h3>
                    <h4>{product.desc}</h4>
                    <span className="productRating">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        {product.ratings}
                    </span>
                    <span className={`productStock ${product.stock < 5 ? "low" : ""}`}>
                        ({product.stock})
                    </span>
                    <strike>MRP: ₹{product.price}</strike>
                    <span className="offerPrice">Offer: ₹{(product.price * 0.85).toFixed(2)}</span>
                    <div className="btn">
                                <button id="buy">Buy Now</button>
                                <button id="addtocart">Add to Cart
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                    </svg>
                                </button>
                            </div>
                </div>
            </div>
        </>
    )
}

export default ViewProduct