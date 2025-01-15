function myFunction(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}
//Alternative Solution (returning NaN)
function myFunction(a,b){
  return a/b
}