import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"
import api from "../api/axios";
import ProductCard from "../components/product/ProductCard"
import type { Product } from "../types/product";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const category = searchParams.get("category");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/api/v1/products", {
          params: {
            search,
            category,
          },
        });

        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, [search, category]);


  const categoryName = category && products.length > 0 ? products[0].category?.name : "";

  return (
    <div className="max-w-7xl mx-auto pt-[9rem] md:pt-28 px-6">
      <h1 className="text-3xl font-semibold mb-8">
        {search? `Search Results for ${search}` : category ? categoryName : "All Plants"}
      </h1>

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