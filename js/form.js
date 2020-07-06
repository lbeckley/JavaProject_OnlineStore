//PHONE NUMBER 
$(document).ready(function(){
    $('#submit').attr('disabled',true);
    $('#name,#address,#city,#state,#zip,#telephone,#email-field').keyup(function(){
        if($(this).val().length !=0)
            $('#submit').attr('disabled', false);            
        else
            $('#submit').attr('disabled',true);
    })
});  

$('#telephone').keyup(function(){
    if(this.value !== '' && !isValidPhoneNumber(this.value)) {
      $('#phone-validation-message').show();
      $('#submit').prop('disabled', true);
    } else {
      $('#phone-validation-message').hide();
      $('#submit').prop('disabled', false);
    }
  });
  
  $('#submit').click(function(e){
    e.preventDefault();
  });
  
  //Checks if phone number is valid.  
  function isValidPhoneNumber(phoneNumber) {
      var pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      return pattern.test(phoneNumber);
  };

  //EMAIL ADDRESS
  $('#email-field').keyup(function(){
    if(this.value !== '' && !isValidEmailAddress(this.value)) {
      $('#email-validation-message').show();
      $('#submit').prop('disabled', true);
    } else {
      $('#email-validation-message').hide();
      $('#submit').prop('disabled', false);
    }
  });
  
  $('#submit').click(function(e){
    e.preventDefault();
  });
  
  //Checks if email address is valid.  
  function isValidEmailAddress(emailAddress) {
      var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
      return pattern.test(emailAddress);
  };

  function SubForm (){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/680/',
        type:'post',
        data:$("#myForm").serializeArray(),
        success: function(){
        alert("Thank you for joining ModernRoots mailing list! :)")
        },
        error: function(){
        alert("There was an error :(")
        }
    });
}