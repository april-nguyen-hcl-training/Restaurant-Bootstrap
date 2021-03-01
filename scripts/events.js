function submitted() {
  document.getElementById("sumbitMessage").innerHTML="Thank you for contacting us. Your message has been submitted!";
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
function checkInput() {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()  // prevents from submitting a form
          event.stopPropagation() // prevents propagation of the same event from being called
        }

        if (form.checkValidity()) {
          submitted()
          event.preventDefault()  // prevents reloading form
        }

        form.classList.add('was-validated')
      }, false)
    })
}
