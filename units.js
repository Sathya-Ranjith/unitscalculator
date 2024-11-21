var range1=document.getElementById("range");
var meter1=document.getElementById("meter");
var millimeter1=document.getElementById("millimeter");
var centimeter1=document.getElementById("centimeter");
var kilometer1=document.getElementById("kilometer");

console.log("slider value :" +range1.value);
meter1.innerText = range1.value;

range1.addEventListener( 'input',() =>{
    meter1.innerText=range1.value;
    convertunits(range1.value);
});

function convertunits(meter1){
 var millimeter2 =parseInt(meter1)*1000;
 var centimeter2 =parseInt(meter1)*100;
 var kilometer2 =parseFloat(meter1)/1000;

 millimeter1.innerText=millimeter2;
 centimeter1.innerText=centimeter2;
 kilometer1.innerText=kilometer2.toFixed(3);
}