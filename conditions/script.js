const ask = () => {
  let result = document.getElementById('result');
  let age = prompt('What is your age?');
  if (age < 18) {
    result.innerHTML = 'Too Young';
    alert('Too Young');
  }
  if (age > 18 && age < 27) {
    result.innerHTML = 'Right age for military service';
    alert('Right age for military service');
  }
  if (age > 27 && age < 41) {
    result.innerHTML = 'You are in reserve';
    alert('You are in reserve');
  }
  if (age > 41 && age < 55) {
    result.innerHTML = 'You are in backup reserve';
    alert('You are in backup reserve');
  } else if (age > 55) {
    result.innerHTML = 'too aged';
    alert('too aged');
  }
};
