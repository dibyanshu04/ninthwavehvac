console.log('It Works')

$(document).ready(function () {
    $('.submit').click(function(event){
        console.log('Clicked Button')

        var firstname = $(".firstname").val();
        var lastname = $(".lastname").val();
        var email = $(".email").val();
        var mobilenum = $(".mobilenum").val();
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status') 
        statusElm.empty()

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>email is valid</div>')
        } else {
            event.preventDefault(); 
            statusElm.append('<div>Email is not valid</div>')
        }

        if(mobilenum.length >= 10) {
          statusElm.append('<div>Mobile number is valid</div>')
        } else {
          event.preventDefault();    
          statusElm.append("<div>Mobile number is not valid</div>");
        }
        if(message.length > 10) {
          statusElm.append('<div>message is valid</div>')
        } else {
          event.preventDefault(); 
          statusElm.append('<div>message is not valid</div>')
        }
    })
})