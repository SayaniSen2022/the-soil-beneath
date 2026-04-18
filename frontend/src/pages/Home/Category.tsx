import CategoryCard from "../../components/category/CategoryCard"
import { categories } from "../../data/categories"

const Category = () => {
  return (
      <section className="px-4">
        <h2 className="my-8 text-3xl text-center">Shop by Category</h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4"
          
        >
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              name={cat.name}
              slug={cat.slug}
            />
          ))}
        </div>
      </section>
    );
}

export default Category