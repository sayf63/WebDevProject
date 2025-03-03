
$("#btnSwapLogin").on('click', function(){
    $('#frmLogin').slideUp('slow')
    $('#frmRegister').slideDown('fast')
})
$("#btnAlreadyRegister").on('click', function(){
    $('#frmLogin').slideDown('slow')
    $('#frmRegister').slideUp('fast')
})
$("#btnLogin").on('click', function(){
    const strUsernamelgn = $('#txtUsernamelgn').val()
    const strPasswordlgn = $('#txtPasswordlgn').val()
    if(!strUsernamelgn.includes('@') || !strUsernamelgn.includes('.') || strUsernamelgn.trim().length < 6){
        blnError = true
        strMessage += '<p class ="mb-0 mt-0"> Username must be an email! </p>'
    }
    if(strPasswordlgn.length < 8){
        blnError = true
        strMessage += '<p class ="mb-0 mt-0"> Password is invalid! </p>'
    } else {
        Swal.fire({
        title: "You have successfully Logged into SwollenHippo!",
        text: "Hooray!",
        icon: "success"
        })
    }

})

document.querySelector("#btnRegister").addEventListener("click",(E)=>{
    let regEmail = ""
    const strUsername = $('#txtUsername').val()
    const strPassword = $('#txtPassword').val()
    const strFirstname = $("#txtfname").val()
    const strAddress1 = $("#txtaddress1").val()
    const strCity = $("#txtcity").val()
    const strState = $("#txtstate").val()
    const strZIP = $("#txtZIP").val()
    const strTelephone = $("#telphone").val()
    const phoneRegex = /^(?:\+?\d{1,3})?\d{10}$/;
    const strLastname = $("#txtlname").val()
    let blnError = false
    let strMessage = ''

    if(!strUsername.includes('@') || !strUsername.includes('.') || strUsername.trim().length < 6){
        blnError = true
        strMessage += '<p class ="mb-0 mt-0"> Username must be an email! </p>'
    }
    if(strPassword.length < 8){
        blnError = true
        strMessage += '<p class ="mb-0 mt-0"> Password is invalid! </p>'
    }
    if(strFirstname.length < 1){
        blnError = true
        strMessage += '<p class ="mb-0 mt-0"> First name is missing! </p>'
    }
    if(strAddress1.trim().length < 5){
        blnError = true
        strMessage += '<p class ="mb-0 mt-0"> Address is incorrect! </p>'
    }
    if(strCity.length < 1){
        blnError = true
        strMessage += '<p class ="mb-0 mt-0"> City is missing! </p>'
    }
    if(strState.length < 1 || strState > 2){
        blnError = true
        strMessage += '<p class ="mb-0 mt-0"> Incorrect Input for State! </p>'
    }
    if(strZIP.length < 5){
        blnError = true
        strMessage += '<p class ="mb-0 mt-0"> Incorrect ZIP code! </p>'
    }
    if(!phoneRegex.test(strTelephone)){
        blnError = true
        strMessage += '<p class ="mb-0 mt-0"> Incorrect phone number! </p>'
    }

    if(blnError == true){
        Swal.fire({
        title: "Error!",
        html: strMessage,
        icon: "error"
        });
    } else {
        Swal.fire({
        title: "You have successfully Registered to SwollenHippo!",
        text: "Hooray!",
        icon: "success"
        })
        $('#frmLogin').slideDown('slow')
        $('#frmRegister').slideUp('fast')
    }

})    

