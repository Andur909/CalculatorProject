window.addEventListener("load",addListeners)

var total = 0;
var label = "";
var num1 = "0";
var num2 = "0";
var operation = "";

function addListeners()
{
	document.getElementById("btndot").addEventListener("click",dot);
	document.getElementById("btnzero").addEventListener("click",zero);
	document.getElementById("btnone").addEventListener("click",one);
	document.getElementById("btntwo").addEventListener("click",two);
	document.getElementById("btnthree").addEventListener("click",three);
	document.getElementById("btnfour").addEventListener("click",four);
	document.getElementById("btnfive").addEventListener("click",five);
	document.getElementById("btnsix").addEventListener("click",six);
	document.getElementById("btnseven").addEventListener("click",seven);
	document.getElementById("btneigth").addEventListener("click",eight);
	document.getElementById("btnnine").addEventListener("click",nine);
	document.getElementById("btnplus").addEventListener("click",plus);



}

function dot()
{
	if (label === "") {
		label = "0"
	}
	label = label + "."
	document.getElementById("calculation").value = label;
	document.getElementById("btndot").disabled = true;
}

function zero()
{
	label = label + "0"
	document.getElementById("calculation").value = label;
}

function one()
{
	label = label + "1"
	document.getElementById("calculation").value = label;
}

function two()
{
	label = label + "2"
	document.getElementById("calculation").value = label;
}

function three()
{
	label = label + "3"
	document.getElementById("calculation").value = label;
}

function four()
{
	label = label + "4"
	document.getElementById("calculation").value = label;
}

function five()
{
	label = label + "5"
	document.getElementById("calculation").value = label;
}

function six()
{
	label = label + "6"
	document.getElementById("calculation").value = label;
}

function seven()
{
	label = label + "7"
	document.getElementById("calculation").value = label;
}

function eight()
{
	label = label + "8"
	document.getElementById("calculation").value = label;
}

function nine()
{
	label = label + "9"
	document.getElementById("calculation").value = label;
}

function plus()
{
	if (label === "")
	{
		label = ""
		return
	}
	if (operation != "") {
		num2 = label
		operations()
	}
	num1 = label;
	operation = "+";
	label = ""
	
}

function operations()
{
	if (operation === "+")
	{
		label = parseInt(label)
		num1 = parseInt(label)
		num2 = parseInt(label)
		label = num1 + num2
		label = String(label)
		num1 = String(num2)
		num2 = String(num2)

		document.getElementById("calculation").value = label;

	}
	operation = "";
	num1 = "";
	num2 = "";
	
}