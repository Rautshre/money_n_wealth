import React from 'react';
import './FinancialPlans.css';

const plans = [
  {
    title: "Retirement Plans",
    desc: "Plan for a secure and comfortable retirement with our personalized retirement solutions. Estimate your retirement needs, choose the right investment vehicles, and ensure a steady income post-retirement.",
    invested: 60,
    color: "#42a5f5",
    stats: [
      { label: "Avg. Return", value: "8% p.a." },
      { label: "Recommended Tenure", value: "20+ yrs" }
    ]
  },
  {
    title: "Estate Plans",
    desc: "Protect your legacy and ensure your assets are distributed according to your wishes. Our estate planning services include will creation, trust setup, and succession planning.",
    invested: 35,
    color: "#66bb6a",
    stats: [
      { label: "Avg. Cost Saved", value: "₹50,000+" },
      { label: "Peace of Mind", value: "High" }
    ]
  },
  {
    title: "Financial Planning",
    desc: "Achieve your financial goals with expert planning and ongoing support. We provide budgeting, debt management, and holistic financial advice tailored to your life stage.",
    invested: 75,
    color: "#ffa726",
    stats: [
      { label: "Goal Success Rate", value: "92%" },
      { label: "Avg. Savings Growth", value: "₹1.5L/year" }
    ]
  },
  {
    title: "Life Insurance",
    desc: "Safeguard your loved ones with comprehensive life insurance coverage. We offer term, whole, and unit-linked insurance plans to suit your needs.",
    invested: 50,
    color: "#ab47bc",
    stats: [
      { label: "Avg. Cover", value: "₹1 Cr" },
      { label: "Claim Settlement", value: "98.5%" }
    ]
  },
  {
    title: "Mutual Funds",
    desc: "Grow your wealth by investing in a diverse range of mutual funds. Our experts help you select funds based on your risk profile and financial goals.",
    invested: 80,
    color: "#26c6da",
    stats: [
      { label: "Avg. Return", value: "12% p.a." },
      { label: "Risk Level", value: "Moderate" }
    ]
  },
  {
    title: "Health Insurance",
    desc: "Protect yourself and your family with reliable health insurance plans. Get coverage for hospitalization, critical illness, and more.",
    invested: 40,
    color: "#ef5350",
    stats: [
      { label: "Avg. Cover", value: "₹10L" },
      { label: "Cashless Hospitals", value: "6000+" }
    ]
  }
];

const CircularProgress = ({ percent, color }) => (
  <svg className="circular-progress" width="80" height="80" viewBox="0 0 80 80">
    <circle
      className="circular-bg"
      cx="40"
      cy="40"
      r="34"
      stroke="#e0e7ef"
      strokeWidth="10"
      fill="none"
    />
    <circle
      className="circular-bar"
      cx="40"
      cy="40"
      r="34"
      stroke={color}
      strokeWidth="10"
      fill="none"
      strokeDasharray={2 * Math.PI * 34}
      strokeDashoffset={2 * Math.PI * 34 * (1 - percent / 100)}
      strokeLinecap="round"
    />
    <text
      x="50%"
      y="54%"
      textAnchor="middle"
      fontSize="1.2em"
      fill={color}
      fontWeight="bold"
      dy=".3em"
    >
      {percent}%
    </text>
  </svg>
);

const FinancialPlans = () => (
  <div className="financial-plans-hero">
    <div className="financial-plans-hero-content">
      <div>
        <h1>Plan Your Money, Secure Your Future</h1>
        <p>
          Discover how smart financial planning can help you achieve your dreams. Invest in the right plans and watch your wealth grow with confidence.
        </p>
        <button className="financial-plans-cta">Get Started Free</button>
      </div>
      <img
        src="https://c8.alamy.com/comp/2BG0JAD/realistic-dark-laptop-mock-up-with-analytics-dashboards-charts-and-graph-business-financial-and-digital-marketing-account-administrative-panel-2BG0JAD.jpg"
        alt="Financial Dashboard"
        className="financial-plans-hero-img"
      />
    </div>
    <div className="financial-plans-highlights-title">Our Financial Plans</div>
    <div className="financial-plans-list">
      {plans.map((plan, idx) => (
        <div className="financial-plan-card" key={idx}>
          <div className="financial-plan-graph">
            <CircularProgress percent={plan.invested} color={plan.color} />
          </div>
          <div className="financial-plan-info">
            <h2>{plan.title}</h2>
            <p>{plan.desc}</p>
            <div className="financial-plan-stats">
              {plan.stats.map((stat, i) => (
                <div className="financial-plan-stat" key={i}>
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-value">{stat.value}</span>
                </div>
              ))}
            </div>
            <button className="financial-plan-invest-btn">Invest in {plan.title}</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default FinancialPlans;