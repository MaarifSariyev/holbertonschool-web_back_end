export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);

  const fullBudget = {
    ...budget,
    income, 
    getIncomeInDollars() {
      return `$${this.income}`; 
    },
    getIncomeInEuros() {
      return `${this.income} euros`; 
    },
  };

  return fullBudget;
}




