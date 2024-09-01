$(document).ready(function(){
    $("#Sig-Form").validate({
        rules:{
            fname: {
                required:true,
                minlength:5

            },
            email:{
                required:true,
                minlength:7,
                email:true
            },
            password:{
                required:true,
                minlength:8,
                maxlength:15,
                password:true
            }
        },
        messages:{
            fname:{
                required:"This field is compulsory",
                minlength:"Minimum 5 charectors are compulsory"
            },
            email:{
                email:'Format is wrong'
            },
            password:{
                minlength:"should contain minimum of 8 charectors",
                password:'Invalid password type'
            }
        }
    })
})