//submit birthday then show horoscope sign
document.getElementById('horoscopeForm').addEventListener('submit', function (event) {
event.preventDefault(); //so page doesnt refresh
  let birthdayValue = document.getElementById('birthday').value;
  if (birthdayValue) {
    let date = new Date(birthdayValue);
    let day = date.getDate();          
    let month = date.getMonth() + 1;    
    let sign = getHoroSign(day, month);
    displayResult(sign);
  }
});

//takes birthday month and day then returns horoscope string
function getHoroSign(day, month) {
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius';
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Pisces';
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus';
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini';
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer';
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra';
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio';
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius';
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn';
  return 'Error. Try Again!'; 
}

//display horoscope string and image with added text. also add display style
function displayResult(sign) {
  let signName = document.getElementById('signName'); 
  let signImage = document.getElementById('signImage');  
  if (sign !== 'Error. Try Again!') {
    signName.textContent = 'Your Zodiac Sign is: ' + sign;
    signImage.src = 'img/' + sign.toLowerCase() + '.png';
    signImage.style.display = 'block';                   
  } else {
    signName.textContent = 'Please enter a valid birthday.'; //comeback to this, bc didnt show up
    signImage.style.display = 'none';    //no image shown           
}
}

//after submiting sign and date, you get a prediction
document.getElementById('getPrediction').addEventListener('click', function () {
  let selectedSign = document.getElementById('chooseSign').value;
  let selectedDate = document.getElementById('chooseDate').value;
  let resultBox = document.getElementById('fortuneResult');
//establish java object
  let fortunes = {
    Today: selectedSign + ':  Today, your wishes will come true. Trust the process.',
    Tomorrow: selectedSign + ':  Tomorrow may bring unexpected joy to those in need.',
    NextWeek: selectedSign + ':  A change in energy will be coming forth this week. Be cautious.'
  };
//{ key: value } label each fortune by date
  if (fortunes[selectedDate]) {
    resultBox.textContent = fortunes[selectedDate];
  } else {
    resultBox.textContent = 'The stars are unclear… try again.';
  }
});

//toggle display of all signs with click button
let toggleButton = document.getElementById('toggleSigns');
let signGrid = document.querySelector('.sign-grid');

//upon load of page, display of signs is set to none
document.addEventListener('DOMContentLoaded', function () {
  signGrid.style.display = 'none';
});

//if no display of signs then make toggle button show all signs. if all horoscope signs displayed show button as hide all horoscopes
toggleButton.addEventListener('click', function () {
  if (signGrid.style.display === 'none') {
    signGrid.style.display = 'grid'; //arrages signs as grid
    toggleButton.textContent = 'Hide All Horoscopes';
  } else {
    signGrid.style.display = 'none'; // no display of signs
    toggleButton.textContent = 'Show All Horoscopes';
  }
});
