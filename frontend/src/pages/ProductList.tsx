import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"
import api from "../api/axios";
import ProductCard from "../components/product/ProductCard"

type Product = {
  id: number;
  name: string;
  price: number;
  image_url?: string;
};

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/api/v1/products", {
          params: {
            search,
          },
        });

        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, [search]);


  return (
    <div className="max-w-7xl mx-auto pt-28 px-6">
      <h1 className="text-3xl font-semibold mb-8"> Search Results </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image_url={product.image_url}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList