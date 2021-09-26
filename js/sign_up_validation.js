$(document).ready(function(){
    $("#username_check").hide();
    $("#email_check").hide();
    $("#pass_check").hide();
    $("#cpass_check").hide();

    var username_err = true;
    var email_err = true;
    var pass_err = true;
    var cpass_err = true;
  

    $("#username").keyup(function(){
        username_check();
    })
    $("#email").keyup(function(){
        email_check();
    })
  
    $("#pass").keyup(function(){
        pass_check();
    })
    $("#cpass").keyup(function(){
        cpass_check();
    })

        // username validation
    function username_check(){
        var username_val = $("#username").val();
        var user_correct = /^[a-z]+$/;
        if(username_val.length == ''){
            $("#username_check").show();
            $("#username_check").html("** username cannot be empty!");
            $("#username").focus();
            $("#username_check").css('color','red');
            $("#username").css('border','1px solid red');
            username_err = false;
            return false;
        }
        else{
            $("#username_check").hide();
            $("#username").css('border','1px solid green');
        }
     

        
        if(username_val.length < 3 || username_val.length > 20){
            $("#username_check").show();
            $("#username_check").html("** username must be between 3 and 20 characters!");
        
            $("#username_check").css('color','red');
            $("#username").css('border','1px solid red');
            username_err = false;
            return false;
        }
        else{
            $("#username_check").hide();
            $("#username").css('border','1px solid green');
        }
    
    }

        // email id validation
     
    function email_check(){
        var email_val = $("#email").val();
        if(email_val.length == ''){
            $("#email_check").show();
            $("#email_check").html("** email-id must be required!");
            // $("#email").focus();
            $("#email_check").css('color','red');
            $("#email").css('border','1px solid red');
            email_err = false;
            return false;
        }
        else{
            $("#email_check").hide();
            $("#email").css('border','1px solid green');
        }
   
        
        // if(username_val.length < 3 || username_val.length > 20){
        //     $("#username_check").show();
        //     $("#username_check").html("** username must be between 3 and 20 characters!");
        //     $("#username_check").focus();
        //     $("#username_check").css('color','red');
        //     $("#username").css('border','1px solid red');
        //     username_err = false;
        //     return false;
        // }
        // else{
        //     $("#username_check").hide();
        //     $("#username").css('border','1px solid green');
        // }
    }


        // password validation
    function pass_check(){
        var pass_val = $("#pass").val();
        if(pass_val.length == ''){
            $("#pass_check").show();
            $("#pass_check").html("** password cannot be empty!");
            // $("#pass").focus();
            $("#pass_check").css('color','red');
            $("#pass").css('border','1px solid red');
            pass_err = false;
            return false;
        }
        else{
            $("#pass_check").hide();
            $("#pass").css('border','1px solid green');
        }
        
        if(pass_val.length < 5 || pass_val.length > 20){
            $("#pass_check").show();
            $("#pass_check").html("** password must be between 5 and 20 digits");
            // $("#pass").focus();
            $("#pass_check").css('color','red');
            $("#pass").css('border','1px solid red');
            pass_err = false;
            return false;
        }
        else{
            $("#pass_check").hide();
            $("#pass").css('border','1px solid green');
        }
    }



        // confirm password validation
    function cpass_check(){
        var cpass_val = $("#cpass").val();
        var pass_val = $("#pass").val();
        if(cpass_val.length == ''){
            $("#cpass_check").show();
            $("#cpass_check").html("** Confirm password cannot be empty!");
            // $("#cpass").focus();
            $("#cpass_check").css('color','red');
            $("#cpass").css('border','1px solid red');
            cpass_err = false;
            return false;
        }
        else{
            $("#cpass_check").hide();
            $("#cpass").css('border','1px solid green');
        }
        
        if(pass_val != cpass_val){
            $("#cpass_check").show();
            $("#cpass_check").html("** Confirm password do not match!");
            // $("#cpass").focus();
            $("#cpass_check").css('color','red');
            $("#cpass").css('border','1px solid red');
            cpass_err = false;
            return false;
        }
        else{
            $("#cpass_check").hide();
            $("#cpass").css('border','1px solid green');
        }
    }

    $("#submit").click(function(){

        
         username_err = true;
         email_err = true;
        
         pass_err = true;
         cpass_err = true;
         username_check();
         email_check();
 
         pass_check();
         cpass_check();

         if((username_err == true) && (email_err == true) && (pass_err == true) && (cpass_err == true)){
            ("#username").focus(); 
            return true;
         }else{
            return false;

         }
    });

});

