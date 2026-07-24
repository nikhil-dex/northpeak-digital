"use client";
import { useState } from "react";

function Services() {
    const [open, setOpen] = useState(null);


const services = [
  {
    id: "01",
    title: "Web Development",
    description:
      "Custom websites built with modern technologies and optimized for performance."
  },
  {
    id: "02",
    title: "Shopify Development",
    description:
      "Scalable e-commerce experiences tailored for growing businesses."
  },
  {
    id: "03",
    title: "SEO Optimization",
    description:
      "Improve visibility and search rankings with technical and on-page SEO."
  },
  {
    id: "04",
    title: "UI/UX Design",
    description:
      "User-centered interfaces designed to maximize engagement and conversions."
  },
  {
    id: "05",
    title: "Digital Marketing",
    description:
      "Campaigns and strategies that drive traffic and generate leads."
  },
  {
    id: "06",
    title: "Maintenance & Support",
    description:
      "Continuous updates, monitoring, and support for your digital products."
  }
];


    
  return (
    <>
    <section className="services" id="services">
  <ul className="services__list">
    {services.map((service, index) => (
      <li
        key={service.id}
        className="services__item"
        data-open={open === index}
      >
        
        <button
          className="services__trigger"
          onClick={() =>
            setOpen(open === index ? null : index)
          }
        >
            
          <span className="services__num">
            {service.id}
          </span>

          <span className="services__name">
            {service.title}
          </span>

          <span className="services__arrow">
            +
          </span>
        </button>
        <div className="services__panel">
  <div className="services__panel-inner">
    <div className="services__panel-content">
      <p className="services__desc">
        {service.description}
      </p>
    </div>
  </div>
</div>
      </li>
    ))}
  </ul>
</section>
    
    
    
    
    </>
  )
}

export default Services
