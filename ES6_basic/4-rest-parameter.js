export default function returnHowManyArguments(...AddArg) {
   let total = 0;
  for (const arg of AddArg) {
    total += 1;
  }
  return total; 
}
