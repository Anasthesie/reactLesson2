import { TestimonialCard } from "./testimonial-card";

export function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Developers Say</h2>

      <TestimonialCard
        src={"https://cdn-icons-png.flaticon.com/512/3541/3541871.png"}
        alt={"User 1"}
        quote={"DevConnect helped me land my first remote React job!"}
        name={"Alex Frontend"}
      />

      <TestimonialCard
        src={"https://cdn-icons-png.flaticon.com/512/3541/3541871.png"}
        alt={"User 2"}
        quote={
          "The tutorials and challenges here are better than most courses I'vepaid for."
        }
        name={"Maria JS"}
      />
    </section>
  );
}
