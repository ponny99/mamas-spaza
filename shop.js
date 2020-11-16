
function save() {
  var info = {}; 

  
  info.fname = document.getElementById("fname").value;
  info.lname = document.getElementById("lname").value;
  info.phone = document.getElementById("phone").value;
  info.email = document.getElementById("email").value;

  if (
    info.fname === "" ||
    info.lname === "" ||
    info.email === "" ||
    info.phone === ""
  ) {
    alert("Fields must be fill out first");
    return;
  }

 
  console.log(info);

  
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  
  localStorage.setItem("First Name", fname);
  localStorage.setItem("Last Name", lname);
  localStorage.setItem("Email", email);
  localStorage.setItem("Phone Number", phone);

  
  localStorage.setItem("Info", JSON.stringify(info));
}


function deleteElement() {
  localStorage.removeItem("First Name");
  localStorage.removeItem("Last Name");
  localStorage.removeItem("Email");
  localStorage.removeItem("Phone Number");
  localStorage.removeItem("Info");
  readAll();
}


function readAll() {
  
  var formLocalStorage = JSON.parse(localStorage.getItem("Info"));

  if (formLocalStorage === null) {
   
    document.getElementById("display-data").innerHTML =
      "Sorry, no data to show";
  } else {
    document.getElementById(
      "display-data"
    ).innerHTML = `<h4>User Information:</h4>
                 First Name: ${formLocalStorage.fname}<br> 
                 Last Name: ${formLocalStorage.lname}<br>
                 Email: ${formLocalStorage.email}<br>
                 Phone Number: ${formLocalStorage.phone}`;
  }
  document.getElementById("display-data").removeAttribute("hidden");
}
