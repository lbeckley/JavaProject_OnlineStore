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
