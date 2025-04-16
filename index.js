    //login event and validation for student
    
    document.querySelector("#btnStudentLogin").addEventListener("click",(e) => {
        const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        let strUsername = document.querySelector("#txtStudentUsername").value
        const strPassword = $('#txtStudentPassword').val()
        strUsername = strUsername.toLowerCase()
        let blnError = false
        let strMessage = ''
        let strSuccessMessage = 'The time for feedback is now!'

        if(!regEmail.test(strUsername)){
            blnError = true
            strMessage += '<p  class="mb-0 mt-0">Username must be an email address</p>'
        }
        
        if(strPassword.length < 1){
            blnError = true
            strMessage += '<p class="mb-0 mt-0">Password Cannot Be Blank</p>'
        }
        
        if(blnError){
            Swal.fire({
                title: "Oh no, you have an error!",
                html: strMessage,
                icon: "error"
            })
        } else {
            Swal.fire({
                title: "It's feedbacking time!",
                html: strSuccessMessage,
                icon: "success"
            })
            $('#frmStudentLogin').slideUp('slow')
            $('#frmFeedback').slideDown('fast')
        }
    })
    //registration validation for student
    document.querySelector("#registerStudentbtn").addEventListener("click",(e) => {
        const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        let strUsername = document.querySelector("#txtStudentEmail").value
        const strRegisterPassword = $('#txtStudentRegisterPassword').val()
        const strPasswordConfirm = $('#txtStudentPasswordConfirm').val()
        const strFirstName = $('#txtStudentFirstName').val()
        const strLastName = $('#txtStudentLastName').val()

        strUsername = strUsername.toLowerCase()
        let blnError = false
        let strMessage = ''
        
        if(!regEmail.test(strUsername)){
            blnError = true
            strMessage += '<p  class="mb-0 mt-0">Username must be an email address.</p>'
        }
        
        if(strRegisterPassword.length < 1 || strUsername.length < 1 || strPasswordConfirm.length < 1 || strFirstName.length <1 || strMiddleName.length<1 || strLastName.length <1 || strAddress1.length <1 || strAddress2.length <1 || strCity.length<1 ||strState.length <1 || strZip.length <1){
            blnError = true
            strMessage += '<p class="mb-0 mt-0">Please fill out each field.</p>'
        }

        if(strRegisterPassword != strPasswordConfirm){
            blnError = true
            strMessage += '<p class="mb-0 mt-0">Passwords must match. passwordconfirm:</p>' +strPasswordConfirm
            strMessage += '<p class="mb-0 mt-0">Passwords must match. password:</p>' +strPassword 


        }
        if(blnError){
            Swal.fire({
                title: "Oh no, something went wrong!",
                html: strMessage,
                icon: "error"
            })
        }else{
            strMessage += '<p class="mb-0 mt-0">Account Registered</p>' 
            Swal.fire({
                title: "Registration Successful",
                html: strMessage,
                icon: "success"
            })
        }
    })

    //instructor login
    document.querySelector("#btnAdminLogin").addEventListener("click",(e) => {
        const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        let strUsername = document.querySelector("#txtAdminUsername").value
        const strPassword = $('#txtAdminPassword').val()
        strUsername = strUsername.toLowerCase()
        let blnError = false
        let strMessage = ''
        let strSuccessMessage = 'The time for feedback is now!'

        if(!regEmail.test(strUsername)){
            blnError = true
            strMessage += '<p  class="mb-0 mt-0">Username must be an email address</p>'
        }
        
        if(strPassword.length < 1){
            blnError = true
            strMessage += '<p class="mb-0 mt-0">Password Cannot Be Blank</p>'
        }
        
        if(blnError){
            Swal.fire({
                title: "Oh no, you have an error!",
                html: strMessage,
                icon: "error"
            })
        }else{
            $('#frmAdminLogin').slideUp('slow')
            $('#frmInstructorClasses').slideDown('fast')        
        }
})

    //register swap
    $('#btnStudentSwapLogin').on('click',function(){
        $('#frmStudentLogin').slideUp('slow')
        $('#frmStudentRegister').slideDown('fast')
    })
    //back button on registeration page
    $('#btnStudentReturn').on('click',function(){
        $('#frmStudentRegister').slideUp('slow')
        $('#frmStudentLogin').slideDown('fast')
    })


    //home page student sign in Btn
    $('#btnStudentSignIn').on('click',function(){
        $('#frmHomePage').slideUp('slow')
        $('#frmStudentLogin').slideDown('fast')
    })
    //login page student back btn
    $('#btnStudentHomeBack').on('click',function(){
        $('#frmStudentLogin').slideUp('slow')
        $('#frmHomePage').slideDown('fast')
    })
   