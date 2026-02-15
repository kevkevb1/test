const form = document.getElementById('converter-form');
const minutesInput = document.getElementById('minutes');
const resultText = document.getElementById('result-text');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const minutes = Number(minutesInput.value);

  if (!Number.isInteger(minutes) || minutes < 0) {
    resultText.textContent = 'Please enter a non-negative whole number.';
    return;
  }

  const seconds = window.convert(minutes);
  resultText.textContent = `${minutes} minute${minutes === 1 ? '' : 's'} = ${seconds} second${seconds === 1 ? '' : 's'}`;
});
