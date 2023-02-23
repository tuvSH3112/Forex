// Get the table body and the profit amount element
var tableBody = document.querySelector('#tradeTableBody');
var profitAmount = document.querySelector('#profitAmount');

// Initialize the trade array
var trades = [];

// Function to add a trade to the table
function addTradeToTable(trade) {
	// Create a new row
	var row = document.createElement('tr');

	// Create the cells
	var dateCell = document.createElement('td');
	dateCell.textContent = trade.date;
	var symbolCell = document.createElement('td');
	symbolCell.textContent = trade.symbol;
	var entryCell = document.createElement('td');
	entryCell.textContent = trade.entry;
	var exitCell = document.createElement('td');
	exitCell.textContent = trade.exit;
	var sizeCell = document.createElement('td');
	sizeCell.textContent = trade.size;
	var sideCell = document.createElement('td');
	sideCell.textContent = trade.side;
	var returnCell = document.createElement;}
    fetch('https://github.com/tuvSH3112/forex-jurnal.git')
    .then(response => response.json())
    .then(data => {
      // Do something with the data
    });
  // Get the table body and the profit amount element
var tableBody = document.querySelector('#tradeTableBody');
var profitAmount = document.querySelector('#profitAmount');

// Fetch the list of trades from the server
fetch('/trades').then(function(response) {
    if (response.ok) {
        // If the request was successful, parse the response JSON
        return response.json();
    } else {
        // If there was an error, throw an error with the status text
        throw new Error(response.statusText);
    }
}).then(function(trades) {
    // If parsing the JSON was successful, add the trades to the table and calculate
})