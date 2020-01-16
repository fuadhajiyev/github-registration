// FORM validation:

$(document).ready(function() {
  //pass-example hide  and  show
  $('input[type="password"]').focusin(function() {
    $(".pass-example").css("display", "none");
  });
  $('input[type="password"]').focusout(function() {
    $(".pass-example").css("display", "block");
  });

  //visibility toggle
  var PwdField = $('input[name="password"]');
  $('a[type="button"]').on("click", function() {
    if (PwdField.attr("type") == "password") {
      PwdField.attr("type", "text");
    } else {
      PwdField.attr("type", "password");
    }
  });
  
  //visibility toggle
  // var pass = $('input[name="password"]');

  // use keyup event on email field
  $("#email").keyup(function() {
    if (validateEmail()) {
      // if the email is validated
      // set input email border green
      $("#email").css("border", "1px solid #a6abbd");
      $(".email-example").css("color", "#a6abbd");
      $(".lab-email").css("color", "#a6abbd");
    } else {
      // if the email is not validated
      // set border red
      $("#email").css("border", "1px solid #db122a");
      $(".email-example").css("color", "#db122a");
      $(".lab-email").css("color", "#db122a");
    }
  });

  $("#username").keyup(function() {
    if (userName()) {
      // if the email is validated
      // set input email border green
      $("#username").css("border", "1px solid #a6abbd");
      $(".username-example").css("color", "#a6abbd");
      $(".lab-user").css("color", "#a6abbd");
    } else {
      // if the email is not validated
      // set border red
      $("#username").css("border", "1px solid #db122a");
      $(".username-example").css("color", "#db122a");
      $(".lab-user").css("color", "#db122a");
    }
  });

  // use keyup event on password
  $("#password").keyup(function() {
    // check
    if (validatePassword()) {
      // set input password border green
      //set passMsg
      $("#password").css("border", "1px solid #a6abbd");
      $(".pass-example").css("color", "#a6abbd");
      $(".lab-pass").css("color", "#a6abbd");
    } else {
      // set input password border red
      //set passMsg
      $("#password").css("border", "1px solid #db122a");
      $(".pass-example").css("color", "#db122a");
      $(".lab-pass").css("color", "#db122a");
    }
  });
});

function validateEmail() {
  // get value of input email
  var email = $("#email").val();
  // use reular expression
  var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  if (reg.test(email)) {
    return true;
  } else {
    return false;
  }
}
function userName() {
  // get value of input username
  var username = $("#username").val();
  // use reular expression
  var usernameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
  if (usernameRegex.test(username)) {
    return true;
  } else {
    return false;
  }
}

function validatePassword() {
  //get input password value
  var pass = $("#password").val();
  // check it s length
  if (pass.length > 8) {
    return true;
  } else {
    return false;
  }
}

// password validation

var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
};

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
};

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if (myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
};
