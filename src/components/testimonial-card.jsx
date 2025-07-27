export function TestimonialCard({ src, alt, quote, name }) {
  return (
    <div className="testimonial">
      <img src={src} alt={alt} />
      <blockquote>{quote}</blockquote>
      <p>- {name}</p>
    </div>
  );
}
