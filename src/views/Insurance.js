import React from 'react';
import './insurance.css';

const insuranceTypes = [
  {
    title: "Health Insurance",
    desc: "Comprehensive plans for individuals and families.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    story: "Priya, a young professional, avoided huge hospital bills thanks to her health insurance.",
  },
  {
    title: "Life Insurance",
    desc: "Secure your family's future with our life cover options.",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    story: "After Ramesh's untimely demise, his family's dreams stayed alive because of his life insurance.",
  },
  {
    title: "Car Insurance",
    desc: "Protect your vehicle against accidents and theft.",
    img: "https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=80",
    story: "When Anjali's car was damaged in a flood, her insurance covered all repair costs.",
  },
  {
    title: "Home Insurance",
    desc: "Safeguard your home and valuables from unforeseen events.",
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80",
    story: "The Sharmas rebuilt their home after a fire, thanks to their home insurance.",
  },
  {
    title: "Travel Insurance",
    desc: "Travel worry-free with our global coverage.",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    story: "Rahul's lost luggage was quickly reimbursed during his Europe trip.",
  },
  {
    title: "Business Insurance",
    desc: "Custom solutions for your business needs.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=80",
    story: "Amit's startup survived a cyberattack because of business insurance.",
  },
];

const handleBuyInsurance = (type) => {
  window.location.href = `/buy-insurance?type=${encodeURIComponent(type)}`;
};

const Insurance = () => (
  <div className="insurance-container">
    <h1 className="insurance-title">Our Insurance Plans</h1>
    <div className="insurance-list">
      {insuranceTypes.map((item, idx) => (
        <div className="insurance-card animated-fadein" key={idx}>
          <img src={item.img} alt={item.title} className="insurance-img" />
          <h2>{item.title}</h2>
          <p className="insurance-desc">{item.desc}</p>
          <div className="insurance-story">
            <span className="insurance-story-label">Story:</span> {item.story}
          </div>
          <button
            className="insurance-btn"
            onClick={() => handleBuyInsurance(item.title)}
          >
            Interested? Buy Insurance
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default Insurance;