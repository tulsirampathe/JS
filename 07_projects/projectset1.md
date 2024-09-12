# Projects related to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1 solution
```javascript

console.log("Tulsiram Pathe")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button)
  button.addEventListener('click', function (e) {
    console.log(e)
    console.log(e.target)

    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project 2 solution
```javascript
const form = document.querySelector('form');

// this usecase will give you empty value
// let height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let height = parseInt(document.querySelector('#height').value);
  let weight = parseInt(document.querySelector('#weight').value);
  let results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let BW = '';
    if (bmi < 18.6) BW = 'Under Weight';
    else if (bmi > 24.9) BW = 'Overweight';
    else BW = 'Normal Range';

    // show the result
    results.innerHTML = `<span> ${bmi} ${BW} </span>`;
  }
});

```

## Project 3 solution code
```javascript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```