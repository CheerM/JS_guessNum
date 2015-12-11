var target = 0;
var best = 0;
var steps = 0;
var finish = true;
var input_= document.getElementById("input");
var button_ = document.getElementById("button");
var target_ = document.getElementById("target");
var best_ = document.getElementById("best");
var steps_ = document.getElementById("steps");

window.onload = function () {
	button_.onclick = button_click;
}

function button_click() {
	if (finish) {
		button_.value = "OK";
		input_.value = "";
		finish = false;
		target = Math.floor(Math.random() * 100);
	}
	else {
		if (isNaN(input_.value)) {
			alert("wrong input!!");
		}
		else if (input_.value == target) {
			steps++;
			finish = true;
			button_.value = "restart";
			input_.value = "";
			if (best > steps || best == 0)best = steps;
			steps = 0;
			alert("you win!!");
		}
		else if (input_.value < target) {
			alert("too small!!");
			steps++;
		}
		else {
			alert("too large!!");
			steps++;
		}
	}
	best_.innerHTML = best;
	steps_.innerHTML = steps;
}