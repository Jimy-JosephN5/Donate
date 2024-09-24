const donateNow = document.getElementById('btn-donateNow');
const addMoney = document.getElementById('addMoney');
const donateBalance = document.getElementById('donate-balance');
const myBalance = document.getElementById('my-balance');



donateNow.addEventListener('click', function(event){
event.preventDefault();
const addMoneyValue = addMoney.value;
const addMoneyInNumber = parseFloat(addMoneyValue);
if(addMoneyValue <= 0){
  alert('Please input a valid amount')
}
else{
  console.log('okay done');
  
}

})

