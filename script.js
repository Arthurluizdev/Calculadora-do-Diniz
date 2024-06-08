function checkEvenOdd() {
  const number = document.getElementById('number').value;
  const result = number % 2 === 0 ? 'Par' : 'Ímpar';
  document.getElementById('result').innerText = `O número ${number} é ${result}.`;
}

function checkPrime() {
  const number = parseInt(document.getElementById('number').value);
  if (number <= 1) {
      document.getElementById('result').innerText = `O número ${number} não é primo.`;
      return;
  }
  for (let i = 2; i < number; i++) {
      if (number % i === 0) {
          document.getElementById('result').innerText = `O número ${number} é composto.`;
          return;
      }
  }
  document.getElementById('result').innerText = `O número ${number} é primo.`;
}

function handleSelectionChange() {
  const operation = document.getElementById('operation-select').value;
  switch (operation) {
      case 'evenodd':
          checkEvenOdd();
          break;
      case 'prime':
          checkPrime();
          break;
      case 'mmc':
      case 'mdc':
      case 'modulus':
          openModal(operation);
          break;
      case 'factorize':
          factorize();
          break;
      default:
          break;
  }
}

let currentOperation;

function openModal(operation) {
  currentOperation = operation;
  const modal = document.getElementById('modal');
  const modalPrompt = document.getElementById('modal-prompt');
  const modalInput1 = document.getElementById('modal-input1');
  const modalInput2 = document.getElementById('modal-input2');
  modalPrompt.innerText = `Insira os números para ${operation === 'mmc' ? 'MMC' : operation === 'mdc' ? 'MDC' : 'Módulo'}`;
  modalInput1.value = '';
  modalInput2.value = '';
  modalInput2.style.display = 'block';
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById('modal');
  const modalInput1 = document.getElementById('modal-input1');
  const modalInput2 = document.getElementById('modal-input2');
  modal.style.display = "none";
  modalInput1.value = '';
  modalInput2.value = '';
}

function submitModal() {
  const number1 = parseInt(document.getElementById('modal-input1').value);
  const number2 = parseInt(document.getElementById('modal-input2').value);
  if (isNaN(number1) || isNaN(number2)) {
      document.getElementById('result').innerText = "Por favor, insira números válidos.";
      closeModal();
      return;
  }
  
  let result;
  switch (currentOperation) {
      case 'mmc':
          result = calculateMMC(number1, number2);
          break;
      case 'mdc':
          result = calculateMDC(number1, number2);
          break;
      case 'modulus':
          result = calculateModulus(number1, number2);
          break;
  }
  
  document.getElementById('result').innerText = `O resultado é ${result}.`;
  closeModal();
}

function calculateMMC(number1, number2) {
  let max = Math.max(number1, number2);
  let min = Math.min(number1, number2);
  let mmc = max;
  while (mmc % min !== 0) {
      mmc += max;
  }
  return mmc;
}

function calculateMDC(number1, number2) {
  while (number2) {
      [number1, number2] = [number2, number1 % number2];
  }
  return number1;
}

function calculateModulus(number1, number2) {
  return number1 % number2;
}

function factorize() {
  const number = parseInt(document.getElementById('number').value);
  const factors = [];
  for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
          factors.push(i);
      }
  }
  document.getElementById('result').innerText = `Os fatores de ${number} são: ${factors.join(', ')}.`;
}

function handleCalculate() {
  const operation = document.getElementById('operation-select').value;
  switch (operation) {
      case 'evenodd':
          checkEvenOdd();
          break;
      case 'prime':
          checkPrime();
          break;
      case 'mmc':
      case 'mdc':
      case 'modulus':
          openModal(operation);
          break;
      case 'factorize':
          factorize();
          break;
      default:
          break;
  }
}

