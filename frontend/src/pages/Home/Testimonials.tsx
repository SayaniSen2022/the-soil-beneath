import { useEffect, useState } from "react";
import api from "../../api/axios";
import TestimonialCard from "../../components/testimonials/TestimonialCard"

type Testimonial = {
  id: number;
  customer_name: string;
  location: string;
  remarks: string;
  rating: number;
  date_posted: string;
};


const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get("/api/v1/testimonials");
        setTestimonials(res.data);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="p-6 mt-6 bg-blue-50">
      <h2 className="pb-6 text-4xl text-center text-blue-800">Customer Reviews</h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
        {testimonials.map((testimony) => (
          <TestimonialCard
            key={testimony.id}
            id={testimony.id}
            customer_name={testimony.customer_name}
            location={testimony.location}
            remarks={testimony.remarks}
            rating={testimony.rating}
            date_posted={testimony.date_posted}
          />          
        ))}
      </div>
    </section>
  );
};

export default Testimonials;