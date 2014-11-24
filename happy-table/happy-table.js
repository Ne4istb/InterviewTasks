
var tableModule = (function () {

	function startRedraw(rowNumber, columnNumber, timeout) {

		var container = document.getElementById('container');

		var redraw = function () {
			container.removeChildren();
			container.appendChild(createTable(rowNumber, columnNumber));
		};

		setInterval(redraw, timeout);
	}

	Element.prototype.removeChildren =	function (){
		while (this.firstChild) {
			this.removeChild(this.firstChild);
		}
	};

	function createTable(rowNumber, columnNumber) {

		var table = document.createElement('table');

		for (var i = 0; i < rowNumber; i++) {
			table.appendChild(createRow(columnNumber));
		}

		return table;
	}

	function createRow(columnNumber) {

		var row = document.createElement('tr');

		for (var j = 0; j < columnNumber; j++) {
			row.appendChild(createCell());
		}

		return row;
	}

	function createCell() {

		var cell = document.createElement('td');
		cell.style.background = getRandomColor();

		return cell;
	}

	function getRandomColor() {

		var letters = '0123456789ABCDEF'.split('');
		var color = '#';

		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}

		return color;
	}

	return {
		startRedraw: startRedraw
	}
}());

function start(){

	var rowNumber = parseInt(document.getElementById('row-number').value, 10);
	var columnNumber = parseInt(document.getElementById('column-number').value, 10);
	var timeout = parseInt(document.getElementById('timeout').value, 10);

	if (rowNumber && columnNumber && timeout)
		tableModule.startRedraw(rowNumber, columnNumber, timeout);
	else
		alert('Fill all fields with numbers!')
}
