import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import api from "../../api/axios";
import { useCart } from "../../context/CartContext";

type Product = {
  id: number;
  name: string;
  description: string;
  image_url?: string;
  price: number;
  stock: number;
};

const ProductDetails = () => {
  const { id } = useParams();
  const {addToCart} = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(()=>{
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/api/v1/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching product details:", err);
      }
    };
    fetchProduct();
  },[id]);

  // loading state
  if (!product) {
    return <div>Loading...</div>;
  }

  const handleDecreaseQty = () => {
    if(quantity > 1){
      setQuantity(prev => prev - 1)
    }
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image_url: product.image_url,
      quantity: quantity,
    });
  };


  return (
    <div className="pt-[14rem] md:pt-28 px-10 flex flex-col justify-start align-items-center gap-10 md:flex-row">
      <div className="w-full h-1/2 md:w-1/2">
        <img src={product.image_url || "https://via.placeholder.com/300"} alt={product.name} />
      </div>
      <div className="w-full md:w-1/2">
        <div className="text-2xl font-medium mb-4">{product.name}</div>
        <div className="text-xl text-green-600 mb-4">₹{product.price}</div>
        <div className="font-medium mb-4 text-sm">Estimated Delivery By: <span className="font-normal text-green-600">Friday, 29th May, 2026</span></div>
        <div className="flex items-center mb-6 justify-start gap-6">
          <p className="text-lg font-medium">Quantity</p>
          <div className="border p-1 flex justify-around gap-4 text-xl cursor-pointer">
            <p onClick={handleDecreaseQty}>-</p>
            <p>{quantity}</p>
            <p onClick={() => setQuantity(prev => prev + 1)}>+</p>
          </div>
        </div>
        <div className="flex justify-start gap-4 mb-6 text-lg font-medium">
          <button 
            className="border border-green-600 rounded-md p-2 w-1/2 bg-green-600 text-white 
            hover:text-green-600 hover:bg-white hover:transition duration-300 ease-in-out"
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>
          <button 
            className="border border-green-600 rounded-md p-2 w-1/2 text-green-600 hover:bg-green-600 
            hover:text-white hover:transition duration-300 ease-in-out">
            BUY IT NOW
          </button>
        </div>
        <div className="border rounded-lg p-2">
          <h3 className="text-lg font-medium mb-4">About the Product</h3>
          <div>{product.description}</div>
        </div>
      </div>
      
    </div>
  )
}

export default ProductDetails