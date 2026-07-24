import React from 'react'

export default function Results() {
    const results = [
  {
    number: "120+",
    title: "Projects Delivered",
  },
  {
    number: "98%",
    title: "Client Satisfaction",
  },
  {
    number: "3.2x",
    title: "Average Growth",
  },
  {
    number: "24/7",
    title: "Support Available",
  },
];
  return (
    <section id="results">
      <div className="section-head">
        <span className="section-head__num">
          [03]
        </span>

        <h2 className="section-head__title">
          Results
        </h2>

        <span className="section-head__count">
          04 Metrics
        </span>
      </div>

      <div className="results">
        {results.map((item, index) => (
          <div
            className="results__card"
            key={index}
          >
            <h3>{item.number}</h3>

            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
