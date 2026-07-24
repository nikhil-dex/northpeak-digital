export default function Testimonials() {
    const testimonials = [
  {
    name: "Sarah M.",
    role: "E-commerce Founder",
    quote:
      "NorthPeak Digital transformed our online presence and increased conversions significantly.",
    rating: "★★★★★"
  },
  {
    name: "John D.",
    role: "Startup Founder",
    quote:
      "The team delivered a beautiful website ahead of schedule. Highly recommended.",
    rating: "★★★★"
  },
  {
    name: "Emily R.",
    role: "Marketing Director",
    quote:
      "Professional, responsive, and incredibly easy to work with.",
    rating: "★★★★"
  }
];
  return (
    <section id="testimonials">
      <div className="section-head">
        <span className="section-head__num">
          [04]
        </span>

        <h2 className="section-head__title">
          Testimonials
        </h2>

        <span className="section-head__count">
          03 Reviews
        </span>
      </div>

      <div className="testimonials">
        {testimonials.map((item, index) => (
          <div
            className="testimonial__card"
            key={index}
          >
            <h3>{item.name}</h3>

            <p className="testimonial__role">
              {item.role}
            </p>

            <p className="testimonial__quote">
              "{item.quote}"
            </p>

            <span>{item.rating}</span>
          </div>
        ))}
      </div>
    </section>
  );
}