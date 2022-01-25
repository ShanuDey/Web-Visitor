import fetch from 'node-fetch';
import 'dotenv/config';

const visitWeb = () => {
  const url = process.env.URL || 'http://localhost';
  fetch(url)
    .then((res) => {
      if (res.statusText === 'OK') {
        console.log('website visited');
      } else {
        console.log('Opps : ', res.status);
      }
    })
    .catch((err) => {
      console.log('Error occured: ', err);
    });
};

const generateInterval = (maxSeconds) => {
  const randomDigit = Math.floor(Math.random() * 10); //range 0 to 10
  const seconds = randomDigit === 0 ? 100 : randomDigit * 100; // range 0.1 to 1 seconds
  return maxSeconds * seconds;
};

console.log('Starting ...');
setInterval(visitWeb, generateInterval(60)); // max interval 60 sec = 1min
