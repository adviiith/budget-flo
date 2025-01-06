import React, { useState } from "react";

const IncomeExpenseForm = ({ onAddEntry }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("income");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [customCategory, setCustomCategory] = useState("");
  const [categories, setCategories] = useState([
    "Food",
    "Entertainment",
    "Rent",
    "Utilities",
    "Shopping",
    "Travel",
    "Healthcare",
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalCategory =
      category === ""
        ? "Misc"
        : type === "expense"
        ? category === "Custom"
          ? customCategory
          : category
        : "N/A";

    const entry = {
      id: Date.now(),
      amount: parseFloat(amount),
      category: finalCategory,
      type,
    };

    onAddEntry(entry);

    setAmount("");
    setCategory("");
    setCustomCategory("");
  };

  const handleTypeChange = (type) => {
    setType(type);
    if (type === "expense") {
      setShowCategoryDropdown(true);
    } else {
      setShowCategoryDropdown(false);
    }
  };

  const handleAddCustomCategory = () => {
    if (customCategory.trim() && !categories.includes(customCategory)) {
      setCategories((prev) => [...prev, customCategory]);
      setCategory(customCategory);
      setCustomCategory("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="entry-form">
      <label htmlFor="amount">Amount</label>
      <input
        type="number"
        id="amount"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <div className="button-group">
        <button
          type="button"
          onClick={() => handleTypeChange("income")}
          className={type === "income" ? "active" : ""}
        >
          Credit
        </button>
        <button
          type="button"
          onClick={() => handleTypeChange("expense")}
          className={type === "expense" ? "active" : ""}
        >
          Debit
        </button>
      </div>

      {showCategoryDropdown && (
        <>
          <label htmlFor="category">Expense Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select an Expense Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
            <option value="Custom">Custom</option>
          </select>

          {category === "Custom" && (
            <div className="custom-category-input">
              <input
                type="text"
                placeholder="Enter custom category"
                value={customCategory}
                onChange={(e) => setCustomCategory(e.target.value)}
              />
              <button
                type="button"
                onClick={handleAddCustomCategory}
                disabled={!customCategory.trim()}
              >
                Add
              </button>
            </div>
          )}
        </>
      )}

      <button id="submit" type="submit">
        Add Entry
      </button>
    </form>
  );
};

export default IncomeExpenseForm;
