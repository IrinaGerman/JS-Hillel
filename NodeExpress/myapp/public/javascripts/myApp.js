
var $sum = document.querySelector("#sum")

document.querySelector("#add").addEventListener("click", function () {
	
	var $num1 = document.querySelector("#num1").value;
	var $num2 = document.querySelector("#num2").value;

	var myHeaders = new Headers({'Content-Type': 'application/json'});

	fetch('inputPage', {
		method: 'POST',
		headers: myHeaders,
		body: JSON.stringify({
			num1: $num1,
			num2: $num2
		})
	}).then(function(res) {
		return res.json();
	}).then(function(json) {
		$sum.textContent = json; 
	})
})
	