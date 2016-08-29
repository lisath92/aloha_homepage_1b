$(function() {

//Smooth scrolling
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var header_height = $('.header').outerHeight();
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top) - header_height
          }, 900);
          return false;
        }
      }
    });

//To verify email addresses for the subscription
  function isEmailAddress(emailAddress) {
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    return pattern.test(emailAddress);
  };

//Submit email to subscribe
  $('#subscribe').submit(function(event){
    event.preventDefault();
    var input = $('#email')

    if(isEmailAddress(input.val()) && input.val().length>0){
      alert('Thanks for subscribing!');
      $('input[type="email"]').text('');
    } else{
      alert('Please enter a valid email address.');
    }
  });

//Skip link focus when using tabs
   $("a[href^='#']").not("a[href='#']").click(function() {
      $("#"+$(this).attr("href").slice(1)+"").focus();
   });

//Add to cart icon incrementing
    var button = $('.add-to-cart'),
    numberDiv = $('.number'),
    value = $('.number').html();

      button.on('click', function(event){ 
      event.preventDefault();
      numberDiv.html(++value);
      numberDiv.css("display", "flex");
      return;
    })
});
