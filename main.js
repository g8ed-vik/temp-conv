const celsiusInput = document.querySelector('#celsius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

const roundtoTwo = (num) => {
  return num.toFixed(2);
};

const celsius2FanKel = () => {
    const cTemp = parseFloat(celsiusInput.value);
    const fTemp = (cTemp * 1.8) + 32;
    const kTemp = cTemp + 273.15;
    fahrenheitInput.value = roundtoTwo(fTemp);
    kelvinInput.value = roundtoTwo(kTemp);
    };

const fahrenheit2CenKel = () => {
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5 / 9);
    const kTemp = (fTemp + 459.67) * 5 / 9;
    celsiusInput.value = roundtoTwo(cTemp);
    kelvinInput.value = roundtoTwo(kTemp);
    };

const kelvin2CenFa = () => {
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273;
    const fTemp = 1.8 * (kTemp - 273) + 32;
    celsiusInput.value = roundtoTwo(cTemp);
    fahrenheitInput.value = roundtoTwo(fTemp);
    };
    
const main = () => {
    celsiusInput.addEventListener('input', celsius2FanKel);
    fahrenheitInput.addEventListener('input', fahrenheit2CenKel);
    kelvinInput.addEventListener('input', kelvin2CenFa);
    };

main();    