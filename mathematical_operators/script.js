/*--Task 1--*/

const price = document.getElementById('price');
const amount = document.getElementById('amount');
const result = document.getElementById('result');

const submitGasoline = () => {
  let finalResult = amount.value / price.value;
  result.innerHTML = `You will get ${finalResult} litres of gasoline with the amount`;
};
/*--Task 2--*/

const distance = document.getElementById('distance');
const time = document.getElementById('time');
const speed = document.getElementById('speed');

const averageSpeed = () => {
  let averageSpeed = distance.value / time.value;
  speed.innerHTML = `The Average Speed of the user is : ${averageSpeed} cm/hr`;
};

/*--Task 3--*/

const convertFinal = document.getElementById('convertFinal');

const convert = () => {
  let inch = document.querySelector('#inch').value;
  let cm = document.querySelector('#cm');
  const InchToCm = inch * 2.54;
  cm.value = `${InchToCm}`;
  convertFinal.innerHTML = `${inch} inch is ${InchToCm} centimeter.`;
};
