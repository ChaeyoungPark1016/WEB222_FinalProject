//Contact Info Form 
function frmSub() { 
    if($("#name").val() == '') {
        $("#name").attr(required, "required");
        return;
    }
    if($("#email").val() == '') {
        alert('Please Input Email');
        return;
    }
    if($("#job").val() == '') {
        alert('Please Input Job Totle');
        return;
    }
    if($("#phone").val() == '') {
        alert('Please Input Phone Number');
        return;
    }
    if($("#message").val() == '') {
        alert('Please Input Message');
        return;
    }
    $("#frm").submit();
}

// Validation Email
function email_check(email) {

var reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

return reg.test(email);

}

// Validation if it is out of form 
$(".email").blur(function() {
    var email = $(".email").val();

    if($("#name").val() != ''){
        if(!email_check(email)){
            $(".email_txt").text("Please Check the Email Format");
            $(".email").focus();
            return false;
        } else {
            $(".email_txt").text("");
        }
    }
});

$(".phoneNumber").keyup(function() { $(this).val( $(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|[0-9]{3}|^0[0-9]{3})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-") ); });
