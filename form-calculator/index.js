function mulValues(firstNum1, lastNum1, res1) {
    firstNum1 = Number(document.myCalculator1.firstNumber1.value);
    lastNum1 = Number(document.myCalculator1.lastNumber1.value);
    res1 = firstNum1 * lastNum1;
    const h1 = document.createElement('h1')
    h1.textContent = res1
    document.getElementsByTagName("div")[0].append(h1)
}

function addValues(firstNum2, lastNum2, res2) {
    firstNum2 = Number(document.myCalculator2.firstNumber2.value);
    lastNum2 = Number(document.myCalculator2.lastNumber2.value);
    res2 = firstNum2 + lastNum2;
    const h1 = document.createElement('h1')
    h1.textContent = res2
    document.getElementsByTagName("div")[1].append(h1)
}

function subValues(firstNum3, lastNum3, res3) {
    firstNum3 = Number(document.myCalculator3.firstNumber3.value);
    lastNum3 = Number(document.myCalculator3.lastNumber3.value);
    res3 = firstNum3 - lastNum3;
    const h1 = document.createElement('h1')
    h1.textContent = res3
    document.getElementsByTagName("div")[2].append(h1)
    // document.myCalculator3.textres3.value=res3;
}