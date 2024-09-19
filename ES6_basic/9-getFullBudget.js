import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);

  const fullBudget = {
    ...budget,
    getIncomeInDollars() {
      return `$${income}`;
    },
    getIncomeInEuros() {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
// 9-main.js
import getFullBudgetObject from './9-getFullBudget.js';

const fullBudget = getFullBudgetObject(20, 50, 10);

console.log(fullBudget.getIncomeInDollars()); // Outputs: $20
console.log(fullBudget.getIncomeInEuros());   // Outputs: 20 euros







