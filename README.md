<!DOCTYPE html>
<html>
<head>
	<title>Dashboard</title>
	<link rel="stylesheet" type="text/css" href="dashboard.css">
</head>
<body>
    <div class="page-bar">
        <ul>
          <li><a href="trade_entry.html">Trade Entry</a></li>
          <li><a href="#">Dashboard</a></li>
        </ul>
      </div>
      
	</div>
	<div class="container">
		<div class="tabs">
			<a href="trade_entry.html">Trade Entry</a>
		</div>
		<div class="profit">
			<h2>Profit:</h2>
			<p id="profitAmount">$0</p>
		</div>
		<table>
			<thead>
				<tr>
					<th>Date</th>
					<th>Symbol</th>
					<th>Entry</th>
					<th>Exit</th>
					<th>Size $</th>
					<th>Side</th>
					<th>Return $</th>
					<th>Setup</th>
					<th>Result</th>
				</tr>
			</thead>
			<tbody id="tradeTableBody">
			</tbody>
		</table>
	</div>

	<script type="text/javascript" src="dashboard.js"></script>
</body>
</html>
body {
	margin: 0;
	padding: 0;
	font-family: Arial, sans-serif;
}

.header {
	background-color: #333;
	color: #fff;
	text-align: center;
	padding: 10px;
}

.container {
	margin: 20px;
}

.tabs {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
}

.tabs a {
	padding: 10px;
	background-color: #333;
	color: #fff;
	text-decoration: none;
	border-radius: 5px;
}

.tabs a:hover {
	background-color: #666;
}

.profit {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
}

.profit h2 {
	margin-right: 10px;
}

.profitAmount {
	font-size: 24px;
	font-weight: bold;
	color: green;
}

table {
	width: 100%;
	border-collapse: collapse;
}

thead {
	background-color: #333;
	color: #fff;
}

th, td {
	padding: 10px;
	border: 1px solid #ddd;
	text-align: center;
}

tbody tr:nth-child(even) {
	background-color: #f2f2f2;
}
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
})<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="trade_entry.css">
</head>
<body>
	<div class="page-bar">
		<ul>
		  <li><a href="#">Trade Entry</a></li>
		  <li><a href="dashboard.html">Dashboard</a></li>
		</ul>
	  </div>
	  
	</div>
	<div class="container">
		<form>
			<label for="date">Date:</label>
			<input type="date" id="date" name="date" required>

			<label for="symbol">Symbol:</label>
			<input type="text" id="symbol" name="symbol" required>

			<label for="entry">Entry:</label>
			<input type="number" id="entry" name="entry" required>

			<label for="exit">Exit:</label>
			<input type="number" id="exit" name="exit" required>

			<label for="size">Size $:</label>
			<input type="number" id="size" name="size" required>

			<label for="side">Side:</label>
			<select id="side" name="side" required>
				<option value="">Select Side</option>
				<option value="Long">Long</option>
				<option value="Short">Short</option>
			</select>

			<label for="return">Return $:</label>
			<input type="number" id="return" name="return" required>

			<label for="setup">Setup:</label>
			<input type="text" id="setup" name="setup" required>

			<label for="result">Result:</label>
			<input type="text" id="result" name="result" required>

			<button type="button" id="addTrade">Add Trade</button>
		</form>
	</div>

	<script type="text/javascript" src="trade_entry.js"></script>
</body>
</html>
body {
	margin: 0;
	padding: 0;
	font-family: Arial, sans-serif;
}

.header {
	background-color: #333;
	color: #fff;
	text-align: center;
	padding: 10px;
}

.container {
	margin: 20px;
}

form {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 10px;
}

label {
	display: block;
}

input[type="number"] {
	width: 100%;
	padding: 10px;
}

input[type="text"] {
	width: 100%;
	padding: 10px;
}

select {
	width: 100%;
	padding: 10px;
}

button {
	padding: 10px;
	background-color: #333;
	color: #fff;
	border: none;
	cursor: pointer;
}

button:hover {
	background-color: #666;
}
// Get the form and the add trade button
var form = document.querySelector('form');
var addTradeBtn = document.querySelector('#addTrade');

// Add an event listener to the add trade button
addTradeBtn.addEventListener('click', function(e) {
	// Prevent the form from submitting
	e.preventDefault();

	// Get the form values
	var date = form.elements.date.value;
	var symbol = form.elements.symbol.value;
	var entry = form.elements.entry.value;
	var exit = form.elements.exit.value;
	var size = form.elements.size.value;
	var side = form.elements.side.value;
	var returnVal = form.elements.return.value;
	var setup = form.elements.setup.value;
	var result = form.elements.result.value;

	// TODO: Add code to do something with the form values, e.g. send them to a server or update the dashboard page

	// Reset the form
	form.reset();

	// Hide the information tab
	var informationTab = document.getElementById("information-tab");
	informationTab.style.display = "none";
});
fetch('https://github.com/tuvSH3112/forex-jurnal.git')
.then(response => response.json())
.then(data => {
  // Do something with the data
});
addTradeBtn.addEventListener('click', function(e) {
    e.preventDefault();

    // Get the form values
    var date = form.elements.date.value;
    var symbol = form.elements.symbol.value;
    var entry = form.elements.entry.value;
    var exit = form.elements.exit.value;
    var size = form.elements.size.value;
    var side = form.elements.side.value;
    var returnVal = form.elements.return.value;
    var setup = form.elements.setup.value;
    var result = form.elements.result.value;

    // Send the trade data to the server
    fetch('/add_trade', {
        method: 'POST',
        body: JSON.stringify({
            date: date,
            symbol: symbol,
            entry: entry,
            exit: exit,
            size: size,
            side: side,
            return: returnVal,
            setup: setup,
            result: result
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function(response) {
        // If the request was successful, reset the form and show the success message
        if (response.ok) {
            form.reset();
            var informationTab = document.getElementById("information-tab");
            informationTab.style.display = "none";
            alert('Trade added successfully');
        }
    }).catch(function(error) {
        // If there was an error, show an error message
        alert('Error adding trade: ' + error.message);
    });
});
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// Parse JSON request bodies
app.use(bodyParser.json());

// Handle POST requests to /add_trade
app.post('/add_trade', function(req, res) {
    // Get the trade data from the request body
    var trade = req.body;

    // Save the trade data to a file or a database
    // For example, to save to a file:
    fs.appendFileSync('trades.txt', JSON.stringify(trade) + '\n');

    // Send a success response
    res.sendStatus(200);
});

// Start the server
app.listen(3000, function() {
    console.log('Server listening on port 3000');
});
