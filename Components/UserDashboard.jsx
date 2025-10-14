import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/UserDashboard.css'

function UserDashboard() {
    let [items, setItems] = useState([])
    useEffect(() => {
        axios.get("http://localhost:1001/Products")
            .then((res) => {
                console.log(res.data);
                setItems(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    let navigate = useNavigate();
    function buyItem(item) {
        navigate(`/user-homepage/userviewproduct/${item.id}`,{ state: item })
    }
    return (
        <div className="userdashboard">
            {items.map((item) => {
                return (
                    <div className="userproductCard">
                        <div className="thumbnail">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="userdesc">
                            <Link state={item} to={`/user-homepage/userviewproduct/${item.id}`}>
                                <h4><b>{item.brand}</b></h4>
                                <h4>{item.Prname}</h4>
                            </Link>
                            <strike>MRP : {item.price}</strike>
                            <span>Offer Price : {item.price * 0.85}</span>
                            <div className="usersubDesc">
                                <span id="rating">
                                    {item.rating}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                </span>
                                <span id="stock">
                                    Stock : {item.stock}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="btn">
                                <button onClick={()=>{buyItem(item)}} id="buy">Buy Now</button>
                                <button id="addtocart">Add to Cart
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default UserDashboard