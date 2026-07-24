export default function Pricing() {
    const pricing = [
  {
    title: "Starter",
    price: "$499",
    features: [
      "5 Pages",
      "Responsive Design",
      "SEO Ready",
      "1 Week Delivery",
    ],
  },
  {
    title: "Growth",
    price: "$999",
    features: [
      "10 Pages",
      "Analytics Setup",
      "CMS Integration",
      "Priority Support",
    ],
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited Pages",
      "Dedicated Support",
      "Custom Integrations",
      "Consultation Included",
    ],
  },
];
  return (
    <section id="pricing">
      <div className="section-head">
        <span className="section-head__num">
          [05]
        </span>

        <h2 className="section-head__title">
          Pricing
        </h2>

        <span className="section-head__count">
          03 Plans
        </span>
      </div>

      <div className="pricing">
        {pricing.map((plan, index) => (
          <div
            key={index}
            className={`pricing__card ${
              plan.title === "Growth"
                ? "pricing__featured"
                : ""
            }`}
          >
            <h3>{plan.title}</h3>

            <h2>{plan.price}</h2>

            <ul>
              {plan.features.map(
                (feature, i) => (
                  <li key={i}>
                    ✓ {feature}
                  </li>
                )
              )}
            </ul>

            <button>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}