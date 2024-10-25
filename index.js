document.getElementById('loginForm').addEventListener('submit',
  function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log(email);
    console.log(password);


    const validEmail = 'anandhan@gmail.com';
    const validPassword = 'anand123';
    if(email === validEmail && password ===validPassword) {
      window.location.href = 'homepage.html';
    }
    else{
      document.getElementById('error-message').textContent = 'invalid email or password.';
    }


  });






// // Get the modal
// var modal = document.getElementById('id01');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }