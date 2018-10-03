function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

$( document ).ready(function() {
    $("#email").keyup(function() {
        
        var email = $(this).val();
        if(validateEmail(email)){
            $('#email').css('border', '3px solid green')
            $("#email_feedback").text("Valid email address")
        }else{
            $('#email').css('border','3px solid red')
            $("#email_feedback").text("Invalid email address")
        }
      });
});