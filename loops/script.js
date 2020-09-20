// Task 1
const result = document.getElementById('result');

const oddNum = () => {
  let num = '';
  for (i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
      num += i + ' ';
      result.innerHTML = num;
    }
  }
};

// Task 2
const even = document.getElementById('even');

const evenNum = () => {
  let evenNumb = '';
  for (i = 1; i < 100; i++) {
    if (i % 2 === 0) {
      evenNumb += i + ' ';
      even.innerHTML = evenNumb;
    }
  }
};

// Task 3
const distance = document.getElementById('distance');
const time = document.getElementById('time');
const speed = document.getElementById('speed');

const averageSpeed = () => {
  let averageSpeed = distance.value / time.value;
  speed.innerHTML = `The Average Speed of the user is : ${averageSpeed} km/hr`;
};

//Task 4

const inputClick = () => {
  console.log('clicked');
  const inputValue = document.getElementById('inputValue').value;
  console.log(inputValue);
  const inputResult = document.getElementById('inputResult');
  const userInput = '';
  for (i = inputValue; i < inputValue.length; i++) {
    console.log(i);
  }
};
