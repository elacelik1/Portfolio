// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("button").style.display = "block";
  } else {
    document.getElementById("button").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//nachricht versenden

  $('#senden').on('click', function (event) {
    var email = 'celike@bzz.ch';
    var subject = $('#betreff').val();
    var emailBody = $('#message').val();
    window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
  });

