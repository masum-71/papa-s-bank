//Add addEventListener for Deposit
document.getElementById("btn-deposit").addEventListener("click", (e) => {
  const depoInput = document.getElementById("deposit").value;
  document.getElementById("deposit").value = "";
  if (depoInput === "" || isNaN(depoInput)) {
    alert("you have to enter amount");
  } else {
    //set Deposit balance

    const depositTotal = document.getElementById("deposit-total");
    let previousDepositTotal = parseFloat(depositTotal.innerText);
    depositTotal.innerText = previousDepositTotal + parseFloat(depoInput);

    //set total balance
    const balance = document.getElementById("balance");
    let previousBalance = parseFloat(balance.innerText);
    balance.innerText = previousBalance + parseFloat(depoInput);
    document.getElementById("deposit").value = "";
  }
});

//Add addEventListener for Withdraw
document.getElementById("btn-withdraw").addEventListener("click", () => {
  const withdrawInput = document.getElementById("withdraw").value;
  document.getElementById("withdraw").value = "";
  const balance = document.getElementById("balance");
  let previousBalance = parseFloat(balance.innerText);
  if (withdrawInput === "" ||  isNaN(withdrawInput)) {
    alert("you have to enter amount");
  } else if (previousBalance < parseFloat(withdrawInput)) {
    alert("You can't withdraw more than Total Balance");
  } else {
    //Set withdraw Balance
    const withdrawTotal = document.getElementById("withdraw-total");
    let previousWithdrawTotal = parseFloat(withdrawTotal.innerText);
    withdrawTotal.innerText = previousWithdrawTotal + parseFloat(withdrawInput);

    //Set total Balance

    balance.innerText = previousBalance - parseFloat(withdrawInput);

    
  }
});
