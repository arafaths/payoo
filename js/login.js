document.getElementById('btn-login')
  .addEventListener('click', function () { 
    // 01. input number
    const inputNumber = document.getElementById('input-number');
    const num = inputNumber.value;
    // 02. input pin
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;
    // 03. rules mach
    if (num == '01234567890' && pin == '1234') {
      alert('Login Success');
      window.location.assign('./home.html')
    }
    else {
      alert('Login Filed');
    }
  });