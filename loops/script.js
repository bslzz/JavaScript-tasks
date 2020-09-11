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
