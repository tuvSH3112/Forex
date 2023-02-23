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
