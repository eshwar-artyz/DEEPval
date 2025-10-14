import { useEffect, useState } from 'react'
import '../Styles/UpdateProduct.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'

function UpdateProduct() {
    let [product, setProduct] = useState({
        "Prname": "",
        "category": "",
        "brand": "",
        "price": "",
        "desc": "",
        "image": "",
        "stock": "",
        "ratings": ""
    })
    function handler(e) {
        let { name, value } = e.target
        setProduct((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    let param = useParams();
    console.log(param.id);

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

    let brand = [
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
    useEffect(() => {
        axios.get(`http://localhost:1001/Products/${param.id}`)
            .then((res) => {
                console.log(res);
                setProduct(res.data)

            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    function update_item(e) {
        e.preventDefault();
        axios.put(`http://localhost:1001/Products/${param.id}`, product)
            .then((res) => {
                console.log(res);
                toast.success("Data Updated Successfully");
            })
            .catch((err) => {
                console.log(err);
                toast.error("Updation Failed");
            })
    }   

    return (
        <>
            <div className="addProducts">
                <form onSubmit={update_item} action="">
                    <label htmlFor="">Enter the Product Name :</label> <input type="text" value={product.Prname} name="Prname" onChange={handler} placeholder='Enter product name' required />
                    <label htmlFor="">Enter the Product Category :</label>
                    <select value={product.category} name="category" onChange={handler} id="">
                        {category.map((item) => {
                            return (
                                <option>{item}</option>
                            )
                        })}
                    </select>
                    <label htmlFor="">Enter the Product Brand :</label>
                    <select value={product.brand} name="brand" onChange={handler} id="">
                        {brand.map((item) => {
                            return (
                                <option>{item}</option>
                            )
                        })}
                    </select>
                    <label htmlFor="">Enter the Product Price :</label> <input type="text" value={product.price} name="price" onChange={handler} placeholder='Enter product price' required />
                    <label htmlFor="">Enter the Product Description :</label> <input type="text" value={product.desc} name="desc" onChange={handler} placeholder='Enter product description' required />
                    <label htmlFor="">Enter the Product Stock :</label> <input type="text" value={product.stock} name="stock" onChange={handler} placeholder='Enter product stock' required />
                    <label htmlFor="">Enter the Product Ratings :</label> <input type="text" value={product.ratings} name="ratings" onChange={handler} placeholder='Enter product ratings' required />
                    <label htmlFor="">Enter the Product Image url :</label> <input type="text" value={product.image} name="image" onChange={handler} placeholder='Enter product image url' required />
                    <button>Update Product</button>
                </form>
            </div>
        </>
    )
}

export default UpdateProduct