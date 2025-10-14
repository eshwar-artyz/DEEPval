import { useState } from 'react'
import '../Styles/AddProducts.css'
import axios from 'axios'
import { toast } from 'react-toastify'
function AddProducts() {
  let [product,setProduct] = useState({
    "Prname" : "",
    "category" : "",
    "brand" : "",
    "price" : "",
    "desc" : "",
    "image" : "",
    "stock" : "",
    "ratings" : ""
  })
  function handler(e) {
    let {name,value} = e.target
    setProduct((prevState)=>({
          ...prevState,
          [name] : value 
    }))
  }

  function register_product(e) {
    e.preventDefault();
    axios.post("http://localhost:1001/Products",product)
    .then((res)=>{
      console.log(res);
      toast.success("Product added successfully");
    })
    .catch((err)=>{
      console.log(err);
      toast.error("Addition Failed")
    })
  }
  let category = [
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Beauty & Personal Care",
  "Sports & Fitness",
  "toys",
  "Books & Stationery",
  "Groceries",
  "Health & Wellness",
  "Jewelry & Accessories",
  "Footwear",
  "Automotive",
  "Baby Products",
  "Pet Supplies",
  "Furniture",
  "Musical Instruments",
  "Tools & Hardware",
  "Smartphones & Gadgets",
  "Watches",
  "Art & Collectibles"
];

let brand  = [
  "Apple",
  "Samsung",
  "Nike",
  "Adidas",
  "Puma",
  "Sony",
  "LG",
  "Lamborghini",
  "Gucci",
  "Zara",
  "H&M",
  "Dell",
  "HP",
  "Lenovo",
  "Rolex",
  "Ray-Ban",
  "Philips",
  "Levi's",
  "Toyota",
  "Tesla"
];


  return (
    <>
    <div className="addProducts">
      <form action="" onSubmit={register_product}>
        <label htmlFor="">Enter the Product Name :</label> <input type="text"  value={product.Prname} name="Prname" onChange={handler} placeholder='Enter product name' required/>
        <label htmlFor="">Enter the Product Category :</label>
        <select value={product.category} name="category" onChange={handler} id="">
          {category.map((item)=>{
            return(
              <option>{item}</option>
            )
          })}
        </select>
        <label htmlFor="">Enter the Product Brand :</label> 
        <select value={product.brand} name="brand" onChange={handler} id="">
          {brand.map((item)=>{
            return(
              <option>{item}</option>
            )
          })}
        </select>
        <label htmlFor="">Enter the Product Price :</label> <input type="text" value={product.price} name="price" onChange={handler} placeholder='Enter product price' required/>
        <label htmlFor="">Enter the Product Description :</label> <input type="text" value={product.desc} name="desc" onChange={handler} placeholder='Enter product description' required/>
        <label htmlFor="">Enter the Product Stock :</label> <input type="text" value={product.stock} name="stock" onChange={handler} placeholder='Enter product stock' required/>
        <label htmlFor="">Enter the Product Ratings :</label> <input type="text" value={product.ratings} name="ratings" onChange={handler} placeholder='Enter product ratings' required/>
        <label htmlFor="">Enter the Product Image url :</label> <input type="text" value={product.image} name="image" onChange={handler} placeholder='Enter product image url' required/>
        <button>Add</button>
      </form>
    </div>
    </>
  )
}

export default AddProducts