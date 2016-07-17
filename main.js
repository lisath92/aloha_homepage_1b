$(document).ready(function(event){ 



  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  function isEmailAddress(emailAddress) {
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    return pattern.test(emailAddress);
  };

  $('#subscribe').submit(function(event){
    event.preventDefault();
    var input = $('#email')

    if(isEmailAddress(input.val()) && input.val().length>0){
      alert('Thanks for subscribing!');
      $('#email').reset();
    } else{
      alert('Please enter a valid email address.');
    }
  });


});