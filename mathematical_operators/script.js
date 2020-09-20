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
  speed.innerHTML = `The Average Speed of the user is : ${averageSpeed} km/hr`;
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

/*--Task 4--*/

const bodyMass = document.getElementById('bodyMass');

const calculateMass = () => {
  const weight = document.getElementById('weight');
  const height = document.getElementById('height');
  const BMI = weight.value / (height.value * height.value);

  if (BMI < 18.5) {
    bodyMass.innerHTML = `Your Body Mass Index is : ${BMI}. BMI Weight Status : Underweight`;
  }
  if (BMI > 18.5 && BMI < 24.9) {
    bodyMass.innerHTML = `Your Body Mass Index is : ${BMI}. BMI Weight Status : Normal or Healthy Weight`;
  }
  if (BMI > 25 && BMI < 29.9) {
    bodyMass.innerHTML = `Your Body Mass Index is : ${BMI}. BMI Weight Status : Overweight`;
  }
  if (BMI > 30) {
    bodyMass.innerHTML = `Your Body Mass Index is : ${BMI}. BMI Weight Status : Obese`;
  }
};
