function calculateBmi(height, weight) {
  height = height / 100;
  let result = weight / (height * height);
  return result.toFixed(2);
}

function clearCode() {
  document.querySelector('#result').innerHTML = '';
}

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  clearCode;

  let height = document.getElementById('height-param').value;
  let weight = document.getElementById('weight-param').value;

  if (height.trim() == '' || weight.trim() == '') {
    alert('لطفا همه فیلد ها را پر کنید');

    return false;
  }

  height = parseInt(height);
  weight = parseInt(weight);

  if (isNaN(height) || isNaN(weight)) {
    alert('لطفا مقادیر را به عدد وارد کنید')

    return false;
  }

  if (height < 0 || weight < 0) {
    alert('مقادیر باید بزرگتر از صفر باشند');

    return false;
  }

  document.querySelector('#result').innerHTML = calculateBmi(height, weight);
})

document.querySelector('input#height-param')
  .addEventListener('keydown', clearCode)

document.querySelector('input#weight-param')
  .addEventListener('keydown', clearCode)