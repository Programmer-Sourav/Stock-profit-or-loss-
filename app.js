// Step 1 - selecting all the elements
var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

// Ex-06
submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
}

// Ex-05
function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;

    showOutput(
      `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`
    );
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;

    showOutput(
      `Hey, the profit is ${profit} and the percent is ${profitPercentage}%`
    );
  } else {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss/ initial) * 100;
    showErrorOutput( `Ooops! You are at a loss. The loss is ${loss} and the percent is ${lossPercentage}%`);
  }
}

function showOutput(message) {
  outputBox.innerHTML = <span style='color: green;'>message </span>;
}

function showErrorOutput(message){
  outputBox.innerHTML = <span style='color: red;'>message </span>;
}