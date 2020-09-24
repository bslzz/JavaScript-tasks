const arrayList = () => {
  let numbers = [4, -5, -2, 7, 15, -9, 0, 6, 7, 2];
  const myArray = numbers.map((number) => parseInt(number));

  const result = document.getElementById('result');

  result.innerHTML = `
    <ol>
      <li>number ${myArray[0]}</li>
      <li>number ${myArray[1]}</li>
      <li>number ${myArray[2]}</li>
      <li>number ${myArray[3]}</li>
      <li>number ${myArray[4]}</li>
      <li>number ${myArray[5]}</li>
      <li>number ${myArray[6]}</li>
      <li>number ${myArray[7]}</li>
      <li>number ${myArray[8]}</li>
      <li>number ${myArray[9]}</li>
    </ol>
  `;
};
