document.getElementById('btn-cashout')
  .addEventListener('click', function () { 
    // 01. get the agent number
    const inputAgentnum = document.getElementById('agent-numbet');
    const inputAgent = inputAgentnum.value;
    if (inputAgent.length != 11) {
      alert('Invalid agent number');
      return;
    }
    // 02. get the amount
    const inputAmountnum = document.getElementById('amount-number');
    const inputAmoun = inputAmountnum.value;
    // 03. get the balance
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    // 04. new balance calculate
    const newBalance = Number(balance) - Number(inputAmoun);
    if (newBalance < 0) {
      alert('Invalid Balance');
      return;
    }
    // 05. get the pin and verify
    const cashoutPinInput = document.getElementById('cashout-pin');
    const cashoutPin = cashoutPinInput.value;
    if (cashoutPin === '1234') {
      alert('cashout successful');
      balanceElement.innerText = newBalance; 
    }
    else {
      alert('Invalid Pin');
      return;
    }
  });