const transactions = [
    { name: "Rent", category: "Housing", subCategory: "Fixed", amount: "₹20000" },
    { name: "Groceries", category: "Food", subCategory: "Essentials", amount: "₹3500" },
    { name: "Electricity", category: "Housing", subCategory: "Utilities", amount: "₹3000" },
    { name: "Dining Out", category: "Food", subCategory: "Leisure", amount: "₹1200" },
    { name: "Netflix", category: "Entertainment", subCategory: "Subscriptions", amount: "₹500" },
    { name: "Internet", category: "Housing", subCategory: "Utilities", amount: "₹999" }
  ];
  
  const categoryTotals = {};
  const subCategoryTotals = {};
  
  for (const tx of transactions) {
    const amount = parseInt(tx.amount.replace("₹", ""), 10);
  
    
    if (!categoryTotals[tx.category]) {
      categoryTotals[tx.category] = 0;
    }
    categoryTotals[tx.category] += amount;
  
    if (!subCategoryTotals[tx.subCategory]) {
      subCategoryTotals[tx.subCategory] = 0;
    }
    subCategoryTotals[tx.subCategory] += amount;
  }
  

  let maxSubCategory = null;
  let maxSubAmount = 0;
  
  for (const sub in subCategoryTotals) {
    if (subCategoryTotals[sub] > maxSubAmount) {
      maxSubAmount = subCategoryTotals[sub];
      maxSubCategory = sub;
    }
  }
  
  const result = {
    categoryTotals,
    maxSubCategory,
    maxSubAmount
  };
  
  console.log(result);
  