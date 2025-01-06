import React from "react";
import "./RotatingCards.css";

const RotatingCards = () => {
  const cards = [{ 
    id: 1, title: "What is BudgetFlo?", content: "Your personal finance companion! Track income, expenses, and manage budgets all in one place." },
    { id: 2, title: "Track Expenses Easily", content: "Categorize your spending and gain insights with interactive charts." },
    { id: 3, title: "Export Data", content: "Export your transactions to PDF or CSV for detailed analysis." },
    { id: 4, title: "Secure and Reliable", content: "Your data is safely stored and accessible only by you." },
    { id: 5, title: "Save Time", content: "Automated calculations and reporting simplify your financial management." },
    { id: 7, title: "Personalized Insights", content: "Tailored suggestions based on your spending habits." },
  ];

  return (
    <div className="rotating-cards">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <div className="card-inner">
            <div className="card-front">
              <h2>{card.title}</h2>
            </div>
            <div className="card-back">
              <p>{card.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RotatingCards;
