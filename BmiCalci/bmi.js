const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const res = document.querySelector('#results');

  if (height < 0 || height == '' || isNaN(height)) {
    res.innerHTML = `Please enter valid Height:${height}`;
  } else if (weight < 0 || weight == '' || isNaN(weight)) {
    res.innerHTML = `Please enter valid Weight:${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // res.innerHTML = `${bmi}`;

    if (bmi < 18.6)
      res.innerHTML = `You are Under Weight ,<span> bmi= ${bmi} </span>`;
    else if (bmi > 18.6 && bmi < 24.9)
      res.innerHTML = `You are FIT enough ,<br><span> bmi= ${bmi} </span>`;
    else res.innerHTML = `You are Over Weight , bmi= ${bmi}`;
  }
});
