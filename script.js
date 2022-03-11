function updateRate()
{
   var rateval =document.getElementById("rate").value;
   document.getElementById("rate_val").innerText=rateval;    
}

function compute()
{
 var principal = document.getElementById("principal").value;

  if( principal == 0 || principal <0)
  {
   alert("Please enter positive number!");
return false;
principal.focus();
}
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate/100;
var year = new Date().getFullYear()+parseInt(years);
var amount =parseInt(principal) + parseInt(interest);

document.getElementById("result").innertext=amount;

document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"% </mark> \<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>";
}
   