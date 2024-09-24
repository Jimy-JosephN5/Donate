const donateNow = document.getElementById('btn-donateNow');
const addMoney = document.getElementById('addMoney');
const donateBalance = document.getElementById('donate-balance');
const myBalance = document.getElementById('my-balance');



donateNow.addEventListener('click', function(event){
event.preventDefault();
const addMoneyValue = addMoney.value;
const addMoneyInNumber = parseFloat(addMoneyValue);

const balance = donateBalance.innerText;
const balanceInNumber = parseFloat(balance);

const mainBalance = myBalance.innerText;
const mainBalanceInNumber = parseFloat(mainBalance);

if(addMoneyInNumber <= 0){
  alert('Please input a valid amount')
}
else{
  const newBalance = balanceInNumber + addMoneyInNumber;
  const mainNewBalance = mainBalanceInNumber - addMoneyValue;
  donateBalance.innerText = newBalance;
  myBalance.innerText = mainNewBalance;
}

})

