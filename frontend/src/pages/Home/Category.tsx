import { useEffect, useState } from "react";
import api from "../../api/axios";
import CategoryCard from "../../components/category/CategoryCard";

type Category = {
  id: number;
  name: string;
  image_url?: string;
};


const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get("/api/v1/products/categories");
        setCategories(res.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="p-6 mt-6 bg-lime-50">
      <h2 className="pb-6 text-4xl text-center text-green-800">Shop by Category</h2>

      <div className="grid grid grid-cols-1 min-[520px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            name={category.name}
            image_url={category.image_url}
          />          
        ))}
      </div>
    </section>
  );
};

export default Categories;