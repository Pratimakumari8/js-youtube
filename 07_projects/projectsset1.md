#Prjacts related to DOM
##project link 
[click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)
const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")
buttons.forEach(function(button){
console.log(button);
button.addEventListener('click' , function(e){
console.log(e)
console.log(e.target)
if(e.target.id ==="grey"){
  body.style.backgroundColor = e.target.id
} 
if(e.target.id ==="white"){
  body.style.backgroundColor = e.target.id
} 
if(e.target.id ==="blue"){
  body.style.backgroundColor = e.target.id
} 
if(e.target.id ==="yellow"){
  body.style.backgroundColor = e.target.id
} 

})
});

...

//project 2 code 
const form = document.querySelector('form')
form.addEventListener('submit' , function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if(height === '' || height<0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
  }
  else if(weight === '' || weight<0 || isNaN(weight)){
    results.innerHTML = `Please give a valid ${weight}`;
  }
else{
  const bmi= (weight / ((height*height)/10000)).toFixed(2);
  //show the result
  results.innerHTML = `<span>${bmi}</span>`;
  let category = "";
  if(bmi<18.6){
    category = "underweight";
  }else if (bmi>18.6 && bmi<24.9){
    category = "Normal Range ";
  }
  else{
    category = "overweight";
  }
  results.innerHTML = `<span>Your BMI is: ${bmi} (${category})</span>`;
}
})

...
//project 4
const clock = document.getElementById('clock');
//const clock = document.querySelector('#clock')

setInterval(function(){
  let date = new Date();
// console.log(date.toLocaleDateString());
clock.innerHTML = date.toLocaleTimeString();
}, 1000);