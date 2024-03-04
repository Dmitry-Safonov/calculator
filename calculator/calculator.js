//function to put the numbers 0 (zero)
function enterButtonZero(buttonId) {
  const input = document.querySelector('#resultOfCalculator');
  const btn = document.getElementById(buttonId);
  if (input.value[0] >= 1 || input.value[1] === "." || input.value[0] === "-") {
    input.value = String(input.value + btn.value);
  }
  else {
    input.value = String(input.value);
  }
}
//function to put the numbers from 1 to 9
function enterButtonNumber(buttonId) {
  const input = document.querySelector('#resultOfCalculator');
  const btn = document.getElementById(buttonId);
  input.value = String(input.value + btn.value);
}
//function to put the 'comma'
function enterButtonComma() {
  const input = document.querySelector('#resultOfCalculator');
  const btn = document.querySelector('#znakZPTBox');
  //comma at plus
  const indexZnakaPlus = input.value.indexOf('+');
  const valueBeforePlus = input.value.substring(0, indexZnakaPlus);
  const valueAfterPlus = input.value.substring(indexZnakaPlus + 1, input.value.length);
  if (input.value.length === 0) {
    input.value = String('0' + btn.value).replace(',', '.');
    return;
  }
  if (valueBeforePlus.includes(".")) {
    input.value = String(input.value).replace(',', '.');
  }
  if (valueAfterPlus.includes(".")) {
    input.value = String(input.value).replace(',', '.');
  }
  else {
    input.value = String(input.value + btn.value).replace(',', '.');
  }
  //comma at minus
  const indexZnakaMinus = input.value.indexOf('-', 1);
  const valueBeforeMinus = input.value.substring(0, indexZnakaMinus);
  const valueAfterMinus = input.value.substring(indexZnakaMinus + 1, input.value.length);
  if (valueBeforeMinus.includes(".")) {
    input.value = String(input.value).replace(',', '.');
  }
  if (valueAfterMinus.includes(".")) {
    input.value = String(input.value).replace(',', '.');
  }
  else {
    input.value = String(input.value + btn.value).replace(',', '.');
  }
  //comma when dividing
  const indexZnakaDelenie = input.value.indexOf('/');
  const valueBeforeDelenie = input.value.substring(0, indexZnakaDelenie);
  const valueAfterDelenie = input.value.substring(indexZnakaDelenie + 1, input.value.length);
  if (valueBeforeDelenie.includes(".")) {
    input.value = String(input.value).replace(',', '.');
  }
  if (valueAfterDelenie.includes(".")) {
    input.value = String(input.value).replace(',', '.');
  }
  else {
    input.value = String(input.value + btn.value).replace(',', '.');
  }
  //comma when multiplying
  const indexZnakaMultiply = input.value.indexOf('*');
  const valueBeforeMultiply = input.value.substring(0, indexZnakaMultiply);
  const valueAfterMultiply = input.value.substring(indexZnakaMultiply + 1, input.value.length);
  if (valueBeforeMultiply.includes(".")) {
    input.value = String(input.value).replace(',', '.');
  }
  if (valueAfterMultiply.includes(".")) {
    input.value1 = String(input.value).replace(',', '.');
  }
  else {
    input.value = String(input.value + btn.value).replace(',', '.');
  }
}
// function to put Multiply
function enterButtonMultiply() {
  const input = document.querySelector('#resultOfCalculator');
  const btn = document.querySelector('#multiplyBox');
  const indexZnakaMultiply = input.value.indexOf('*');
  if (indexZnakaMultiply < 0) {
    if (input.value.includes("+")) {
      return input.value = input.value.replace('+', '*');
    }
    if (input.value.includes("-", 1)) {
      return input.value = String(input.value.substring(0, 1) + input.value.substring(1).replace('-', '*'));
    }
    if (input.value.includes("/")) {
      return input.value = String(input.value).replace('/', '*');
    }
    else {
      return input.value = String(input.value + btn.value).replace(btn.value, "*");
    }
  } else {
    return
  }
}
// function to put Plus
function enterButtonPlus() {
  const input = document.querySelector('#resultOfCalculator');
  const btn = document.querySelector('#znakPlusBox');
  const indexZnakaPlus = input.value.indexOf('+');
  if (indexZnakaPlus < 0) {
    if (input.value.includes("*")) {
      return input.value = parseFloat(input.value).replace("*", "+");
    }
    if (input.value.includes("-", 1)) {
      return input.value = String(input.value.substring(0, 1) + input.value.substring(1).replace("-", "+"));
    }
    if (input.value.includes("/")) {
      return input.value = input.value.replace("/", "+");
    }
    else {
      return input.value = String(input.value + btn.value);
    }
  } else {
    return;
  }
}
// function to put Divide
function enterButtonDivide() {
  const input = document.querySelector('#resultOfCalculator');
  const btn = document.querySelector('#znakDelenieBox');
  const ZnakDelenie = btn.value;
  const indexZnakaDelenie = input.value.indexOf('/');
  if (indexZnakaDelenie < 0) {
    if (input.value.includes("*")) {
      return input.value = input.value.replace('*', '/');
    }
    if (input.value.includes("-", 1)) {
      return input.value = String(input.value.substring(0, 1) + input.value.substring(1).replace(ZnakDelenie, "/"));
    }
    if (input.value.includes("+")) {
      return input.value = input.value.replace('+', '/');
    }
    else {
      return input.value = String((input.value + btn.value)).replace(ZnakDelenie, "/");
    }
  } else {
    return;
  }
}
// function to put Minus
function enterButtonMinus() {
  const input = document.querySelector('#resultOfCalculator');
  const btn = document.querySelector('#znakMinusBox');
  const indexZnakaMinus = input.value.indexOf('-', [1]);
  const newBtnValue = btn.value.replace('—', '-');
  if (indexZnakaMinus < 0) {
    if (input.value.includes("*")) {
      return input.value = input.value.replace('*', '-');
    }
    if (input.value.includes("/")) {
      return input.value = input.value.replace('/', '-');
    }
    if (input.value.includes("+")) {
      return input.value = input.value.replace('+', '-');
    }
    else {
      return input.value = String(input.value + newBtnValue);
    }
  } else {
    return;
  }
}
//function to clear input and result of calculation
function enterButtonClear() {
  const btn = document.querySelector('#numerCBox');
  const input = document.querySelector('#resultOfCalculator');
  input.value = btn.placeholder;
}
//function to use procent (%) of value
function enterButtonProcent() {
  const input = document.querySelector('#resultOfCalculator');
  if (input.value.length == 0) {
    return;
  }
  // if we have 'Plus' in expression
  const indexZnakaPlus = input.value.lastIndexOf('+');
  if (indexZnakaPlus > 0) {
    const valueBeforeIndexPlus = Number(input.value.substring(0, indexZnakaPlus));
    const valueAfterIndexPlus = Number(input.value.substring(indexZnakaPlus + 1, input.value.length));
    input.value = parseFloat(String((valueBeforeIndexPlus + (valueAfterIndexPlus * Math.abs(valueBeforeIndexPlus) / 100)).toFixed(5)));
  }
  // if we have 'Minus' in expression
  const indexZnakaMinus = input.value.lastIndexOf('-');
  if (indexZnakaMinus > 0) {
    const valueBeforeIndexMinus = Number(input.value.substring(0, indexZnakaMinus));
    const valueAfterIndexMinus = Number(input.value.substring(indexZnakaMinus + 1, input.value.length));
    input.value = parseFloat(String((valueBeforeIndexMinus - (valueAfterIndexMinus * Math.abs(valueBeforeIndexMinus) / 100)).toFixed(5)));
  }
  // if we have 'Divide' in expression
  const btnDelenie = document.querySelector('#znakDelenieBox');
  const ZnakDelenie = btnDelenie.value;
  const newInput = input.value.replace(ZnakDelenie, "/");
  const indexZnakaDelenie = newInput.indexOf('/');
  if (indexZnakaDelenie > 0) {
    const valueBeforeIndexDelenie = Number(input.value.substring(0, indexZnakaDelenie));
    const valueAfterIndexDelenie = Number(input.value.substring(indexZnakaDelenie + 1, input.value.length));
    if (valueBeforeIndexDelenie > 0) {
      input.value = parseFloat(String((valueBeforeIndexDelenie / (valueAfterIndexDelenie * valueBeforeIndexDelenie / 100)).toFixed(5)));
    }
    else {
      input.value = - parseFloat(String((valueBeforeIndexDelenie / (valueAfterIndexDelenie * valueBeforeIndexDelenie / 100)).toFixed(5)));
    }
  }
  // if we have 'Multiply' in expression
  const btnMultiply = document.querySelector('#multiplyBox');
  const ZnakMultiply = btnMultiply.value;
  const newInputMultiply = input.value.replace(ZnakMultiply, "*");
  const indexZnakaMultiply = newInputMultiply.indexOf('*');
  if (indexZnakaMultiply > 0) {
    const valueBeforeIndexMultiply = Number(input.value.substring(0, indexZnakaMultiply));
    const valueAfterIndexMultiply = Number(input.value.substring(indexZnakaMultiply + 1, input.value.length));
    if (valueBeforeIndexMultiply > 0) {
      input.value = parseFloat(String((valueBeforeIndexMultiply * (valueAfterIndexMultiply * valueBeforeIndexMultiply / 100)).toFixed(5)));
    }
    else {
      input.value = - parseFloat(String((valueBeforeIndexMultiply * (valueAfterIndexMultiply * valueBeforeIndexMultiply / 100)).toFixed(5)));
    }
  }
  else {
    return input.value = input.value / 100;
  }
}
// function to use Plus/Minus
function enterButtonPlusMinus() {
  const input = document.querySelector('#resultOfCalculator');
  if (input.value.length == 0 || input.value.includes("*") || input.value.includes("+") || input.value.includes("/") || input.value.includes("-", 1)) {
    return;
  }
  else {
    return input.value = - input.value;
  }
}
//function to reduce and put all the values in arrea of calculator 
function reduceSizeOfCalculator() {
  const input = document.querySelector('#resultOfCalculator');

  if (input.value.length < 4) {
    input.style.fontSize = "80px";
  }
  else if (input.value.length < 8) {
    input.style.fontSize = "70px";
  }
  else if (input.value.length < 11) {
    input.style.fontSize = "45px";
  }
  else if (input.value.length < 13) {
    input.style.fontSize = "31px";
  }
  else if (input.value.length >= 15) {
    input.value = input.value.substring(0, 15);
  }
}
// function for using the "Enter" key to calculate expressions
function useEnterKey(event) {
  if (event.keyCode == 13) {
    document.getElementById('znakRavnoBox').click();
  }
}
// //функция для клавиши % - с косяком, потому что значек % остается вместе с результатом.
// function searchKeyPressProcent(event) {
//   let input = document.querySelector('#resultOfCalculator');
//   if (event.keyCode === 53) {
//     if (event.shiftKey) {
//       document.getElementById('znakProcentBox').click();
//     }
//     return input.value;
//   }
// };
//function (=) to calculate expressions and getting the result 
function getResultOfCalculator() {
  const input = document.querySelector('#resultOfCalculator');
  // if we have 'Plus' in expression
  const indexZnakaPlus = input.value.lastIndexOf('+');
  if (indexZnakaPlus > 0) {
    const valueBeforeIndexPlus = Number(input.value.substring(0, indexZnakaPlus));
    const valueAfterIndexPlus = Number(input.value.substring(indexZnakaPlus + 1, input.value.length));
    const valueAfterIndexPlusStr = input.value.substring(indexZnakaPlus + 1, input.value.length);
    if (String(valueAfterIndexPlusStr) === '') {
      return input.value = parseFloat(String((valueBeforeIndexPlus + valueBeforeIndexPlus).toFixed(5)));
    } else {
      return input.value = parseFloat(String((valueBeforeIndexPlus + valueAfterIndexPlus).toFixed(5)));
    }
  }
  //if we have 'Minus' in expression
  const indexZnakaMinus = input.value.lastIndexOf('-');
  if (indexZnakaMinus > 0) {
    const valueBeforeIndexMinus = Number(input.value.substring(0, indexZnakaMinus));
    const valueAfterIndexMinus = Number(input.value.substring(indexZnakaMinus + 1, input.value.length));
    const valueAfterIndexMinusStr = input.value.substring(indexZnakaMinus + 1, input.value.length);
    if ((valueAfterIndexMinusStr) === '') {
      return input.value = parseFloat(String((valueBeforeIndexMinus - valueBeforeIndexMinus).toFixed(5)));
    } else {
      return input.value = parseFloat(String((valueBeforeIndexMinus - valueAfterIndexMinus).toFixed(5)));
    }
  }
  // if we have 'Multiply' in expression
  const btnMultiply = document.querySelector('#multiplyBox');
  const ZnakMultiply = btnMultiply.value;
  const newInputMultiply = input.value.replace(ZnakMultiply, "*");
  const indexZnakaMultiply = newInputMultiply.indexOf('*');
  if (indexZnakaMultiply > 0) {
    const valueBeforeIndexMultiply = Number(input.value.substring(0, indexZnakaMultiply));
    const valueAfterIndexMultiply = Number(input.value.substring(indexZnakaMultiply + 1, input.value.length));
    const valueAfterIndexMultiplyStr = input.value.substring(indexZnakaMultiply + 1, input.value.length);
    if ((valueAfterIndexMultiplyStr === '')) {
      return input.value = parseFloat(String((valueBeforeIndexMultiply * valueBeforeIndexMultiply).toFixed(5)));
    } else {
      return input.value = parseFloat(String((valueBeforeIndexMultiply * valueAfterIndexMultiply).toFixed(5)));
    }
  }
  // if we have 'Divide' in expression
  const btnDelenie = document.querySelector('#znakDelenieBox');
  const ZnakDelenie = btnDelenie.value;
  const newInput = input.value.replace(ZnakDelenie, "/");
  const indexZnakaDelenie = newInput.indexOf('/');
  if (indexZnakaDelenie > 0) {
    const valueBeforeIndexDelenie = Number(input.value.substring(0, indexZnakaDelenie));
    const valueAfterIndexDelenie = Number(input.value.substring(indexZnakaDelenie + 1, input.value.length));
    const valueAfterIndexDelenieStr = input.value.substring(indexZnakaDelenie + 1, input.value.length);
    if (valueAfterIndexDelenieStr === '') {
      return input.value = parseFloat(String((valueBeforeIndexDelenie / valueBeforeIndexDelenie).toFixed(5)));
    } if (valueAfterIndexDelenie === 0) {
      return input.value = 'NaN';
    }
    else {
      return input.value = parseFloat(String((valueBeforeIndexDelenie / valueAfterIndexDelenie).toFixed(5)));
    }
  }
}