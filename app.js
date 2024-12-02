const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const amexBtn = document.getElementById("amexBtn");
const creditBtn = document.getElementById("creditBtn");
const masterBtn = document.getElementById("masterBtn");
const paypalBtn = document.getElementById("paypalBtn");
const verveBtn = document.getElementById("verveBtn");
const googleBtn = document.getElementById("googleBtn");
const myInput = document.getElementById("myInput");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const myDiv = document.getElementById("myDiv");
const mySelect = document.getElementById("mySelect");
const myBtn = document.getElementById("myBtn");

const myH1 = document.getElementById("myH1");
const myH2 = document.getElementById("myH2");
const myH3 = document.getElementById("myH3");
const myH4 = document.getElementById("myH4");
const myH5 = document.getElementById("myH5");
const myH6 = document.getElementById("myH6");
const myToll = document.getElementById("myToll");

myBtn.onclick = () => {
  if (myCheckbox.checked){
    myH1.textContent = "Welcome, " + firstName.value;
  }
  else {
    myH1.textContent = "Hello, " + firstName.value + " " + "You haven't Subscribed to this project !" ;
  }



  if (visaBtn.checked){
    myH2.textContent = "Payment Method: Visa";
  }
  else if (amexBtn.checked){
    myH2.textContent = "Payment Method: American Express";
  }
  else if (creditBtn.checked){
    myH2.textContent = "Payment Method: Credit Card";
  }
  else if (masterBtn.checked){
    myH2.textContent = "Payment Method: Master Card";
  }
  else if (paypalBtn.checked){
    myH2.textContent = "Payment Method: PayPal";
  }
  else if (verveBtn.checked){
    myH2.textContent = "Payment Method: Verve";
  }
  else if (googleBtn.checked){
    myH2.textContent = "Payment Method: Google Pay";
  }
  else{
    myH2.textContent = "Payment Method: Please enter your payment  method !";
  }

  if (myInput.value === "" ){
    myH3.textContent = "Email: Please enter your email!";
  }
  else{
    myH3.textContent = "Email: " + myInput.value;
  }
  if (mySelect.value === ""){
    myH4.textContent = "Color: default";
  }
  else{
    myH4.textContent = "Color: " + mySelect.value;
  }
  if (firstName.value === ""){
    myH5.textContent = "Name: Please enter your Name!";
  }
  else{
    myH5.textContent = "Name: " + firstName.value + " " + lastName.value;
  }
  
}