export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  
  const fullBudget = {
    ...budget,
    getIncomeInDollars: function getIncomeInDollars () {
      return `$${this.income}`; 
    },
    getIncomeInEuros: function  getIncomeInEuros() {
      return `${this.income} euros`; 
    },
  };

  return fullBudget;
}



