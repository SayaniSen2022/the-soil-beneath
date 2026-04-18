import FeaturedProductCard from "../../components/product/FeaturedProductCard"
import { featuredProducts } from "../../data/featuredProducts"

const FeaturedProducts = () => {
  return (
      <section className="p-4">
        <h2 className="pb-6 text-3xl text-center">Featured Products</h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4"
          
        >
          {featuredProducts.map((cat) => (
            <FeaturedProductCard
              key={cat.id}
              name={cat.name}
              slug={cat.slug}
            />
          ))}
        </div>
      </section>
    );
}

export default FeaturedProducts

