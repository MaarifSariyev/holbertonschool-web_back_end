import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  
  const fullBudget = {
    ...budget,
    getIncomeInDollars() {
      return `$${this.income}`; // Accessing income using 'this'
    },
    getIncomeInEuros() {
      return `${this.income} euros`; // Same here
    },
  };

  return fullBudget;
}

const fullBudget = getFullBudgetObject(20, 50, 10);

console.log(fullBudget.getIncomeInDollars());
console.log(fullBudget.getIncomeInEuros());

