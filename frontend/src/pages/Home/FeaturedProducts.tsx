import { useEffect, useState } from "react";
import FeaturedProductCard from "../../components/product/FeaturedProductCard";
import api from "../../api/axios";

type Product = {
  id: number;
  name: string;
  image_url?: string;
  price: number;
};

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await api.get("/api/v1/products/featured");
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching featured products:", err);
      }
    };

    fetchFeatured();
  }, []);

  return (
    <section className="p-6 mt-6">
      <h2 className="pb-6 text-3xl text-center">Featured Products</h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
        {products.map((product) => (
          <FeaturedProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image_url={product.image_url}
            price={product.price}
            // slug removed for now (you don’t have it in backend yet)

          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;