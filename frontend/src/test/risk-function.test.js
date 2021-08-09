import RiskEquation from "../components/risk-equation.js"

test('Return Output', () => {
  var riskTest=1;
  var expectedOutput= RiskEquation(1);
  if(riskTest == expectedOutput){
    return true;
  } else {
    return false;
  }
})

