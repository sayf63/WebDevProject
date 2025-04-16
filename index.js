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
    //home page admin sign in Btn
    $('#btnAdminSignIn').on('click',function(){
        $('#frmHomePage').slideUp('slow')
        $('#frmAdminLogin').slideDown('fast')
    })
    //login page admin back btn
    $('#btnAdminHomeBack').on('click',function(){
        $('#frmAdminLogin').slideUp('slow')
        $('#frmHomePage').slideDown('fast')
    })

    //admin logout
    $('#btnAdminLogOut').on('click',function(){
        $('#frmInstructorClasses').slideUp('slow')
        $('#frmHomePage').slideDown('fast')
    })

    //register swap - instructor
    $('#btnAdminRegister').on('click',function(){
        $('#frmAdminLogin').slideUp('slow')
        $('#frmAdminRegister').slideDown('fast')
    })
    //back button on registeration page - instructor
    $('#btnAdminReturn').on('click',function(){
        $('#frmAdminRegister').slideUp('slow')
        $('#frmAdminLogin').slideDown('fast')
    })


    //add questions
    let questionCount = 0

    function addQuestion() {
        questionCount++
        const container = document.getElementById('questionsContainer')

        const questionDiv = document.createElement('div')
        questionDiv.classList.add('mb-3')

        questionDiv.innerHTML = `
            <label for="question${questionCount}" class="form-label">Question ${questionCount}</label>
            <input type="text" class="form-control mb-2" id="question${questionCount}" name="question${questionCount}" placeholder="Enter your question">

            <label for="answer${questionCount}" class="form-label">Answer</label>
            <textarea class="form-control" id="answer${questionCount}" name="answer${questionCount}" rows="2" placeholder="Enter your answer"></textarea>`
        container.appendChild(questionDiv)
    }

    $('#Assignbtn').on('click', function(){
        Swal.fire({
            title: "Form Assigned",
            html: strMessage,
            icon: "success"
        })
    })

    function filterStudents() {
        const classSelect = document.getElementById('classFilter')
        const studentSelect = document.getElementById('studentSelect')
        const selectedClass = classSelect.value

        studentSelect.innerHTML = ''

        if (selectedClass && studentData[selectedClass]) {
            studentData[selectedClass].forEach(student => {
                const option = document.createElement('option')
                option.value = student
                option.textContent = student
                studentSelect.appendChild(option)
            })
        }
    }

    // Populate student list based on selected class
    function filterStudents() {
        const classSelect = document.getElementById('classFilter')
        const studentSelect = document.getElementById('studentSelect')
        const selectedClass = classSelect.value

        studentSelect.innerHTML = ''

        if (selectedClass && studentData[selectedClass]) {
            studentData[selectedClass].forEach(student => {
                const option = document.createElement('option')
                option.value = student
                option.textContent = student
                studentSelect.appendChild(option)
            })
        }
    }

    // Add group function (triggered by btnAddGroup)
    function addGroup() {
        const groupName = document.getElementById('groupName').value.trim()
        const classFilter = document.getElementById('classFilter').value
        const className = document.getElementById('classFilter').selectedOptions[0].text
        const studentSelect = document.getElementById('studentSelect')
        const selectedStudents = Array.from(studentSelect.selectedOptions).map(opt => opt.value)

        if (!groupName || !classFilter || selectedStudents.length === 0) {
            alert("Please fill in all fields and select at least one student.")
            return
        }

        //push new group to the array
        groups.push({
            name: groupName,
            class: className,
            students: selectedStudents
        })

        document.getElementById('frmCreateGroup').reset()
        document.getElementById('studentSelect').innerHTML = ''

        //update view page
        renderGroups()
    }

    //dynamic groups
    function renderGroups() {
        const container = document.getElementById('groupsContainer')
        container.innerHTML = ''

        if (groups.length === 0) {
            container.innerHTML = '<p class="text-muted">No groups have been created yet.</p>'
            return
        }

        groups.forEach(group => {
            const card = document.createElement('div')
            card.classList.add('border', 'rounded', 'p-3', 'mb-3', 'bg-light')

            card.innerHTML = 
               `<h5 class="mb-1">${group.name}</h5>
                <p class="mb-2"><strong>Class:</strong> ${group.class}</p>
                <p><strong>Members:</strong><br>${group.students.join('<br>')}</p>`

            container.appendChild(card)
        })
    }

    $('#btnAddGroup').on('click',function(){
        $('#frmViewGroups').slideUp('slow')
        $('#frmCreateGroup').slideDown('fast')
    })

    $('#btnViewGroups').on('click',function(){
        $('#frmInstructorClasses').slideUp('slow')
        $('#frmViewGroups').slideDown('fast')
    })
    //adds classes for isntructor
    document.getElementById("btnAddClass").addEventListener("click", () => {
        Swal.fire({
          title: 'Add New Class',
          html: `<input id="classID" class="swal2-input" placeholder="Class ID">
                 <input id="className" class="swal2-input" placeholder="class name">
                 <input id="credits" class="swal2-input" placeholder="credit hours">`,
          focusConfirm: false,
          showCancelButton: true,
          preConfirm: () => [
            document.getElementById('classID').value,
            document.getElementById('className').value,
            document.getElementById('credits').value
          ]
        }).then(({value}) => {
          if (value) document.querySelector("#class-table tbody").insertAdjacentHTML('beforeend', 
            `<tr><td>${value[0]}</td><td>${value[1]}</td><td>${value[2]}</td></tr>`)
        })
      })

    //nav bar buttons (this sections is very long)
// Instructor Dashboard (0)
$('#btnStudentGroups0').click(() => {
    $('#frmInstructorClasses').slideUp('slow')
    $('#frmViewGroups').slideDown('fast')
  })
  $('#btnSendAssignment0').click(() => {
    $('#frmInstructorClasses').slideUp('slow')
    $('#frmWork').slideDown('fast')
  })
  $('#btnViewSubmissions0').click(() => {
    $('#frmInstructorClasses').slideUp('slow')
    $('#frmViewSubmissions').slideDown('fast')
  })
  $('#btnAdminLogOut0').click(() => {
    $('#frmInstructorClasses').slideUp('slow')
    $('#frmAdminLogin').slideDown('fast')
  })
  
  // Work Tab (1)
  $('#btnClasses1').click(() => {
    $('#frmWork').slideUp('slow')
    $('#frmInstructorClasses').slideDown('fast')
  })
  $('#btnStudentGroups1').click(() => {
    $('#frmWork').slideUp('slow')
    $('#frmViewGroups').slideDown('fast')
  })
  $('#btnSendAssignment1').click(() => {
    $('#frmWork').slideUp('slow')
    $('#frmWork').slideDown('fast')
  })
  $('#btnViewSubmissions1').click(() => {
    $('#frmWork').slideUp('slow')
    $('#frmViewSubmissions').slideDown('fast')
  })
  $('#btnAdminLogOut1').click(() => {
    $('#frmWork').slideUp('slow')
    $('#frmAdminLogin').slideDown('fast')
  })
  
  // Create Group Tab (2)
  $('#btnClasses2').click(() => {
    $('#frmCreateGroup').slideUp('slow')
    $('#frmInstructorClasses').slideDown('fast')
  })
  $('#btnStudentGroups2').click(() => {
    $('#frmCreateGroup').slideUp('slow')
    $('#frmViewGroups').slideDown('fast')
  })
  $('#btnSendAssignment2').click(() => {
    $('#frmCreateGroup').slideUp('slow')
    $('#frmWork').slideDown('fast')
  })
  $('#btnViewSubmissions2').click(() => {
    $('#frmCreateGroup').slideUp('slow')
    $('#frmViewSubmissions').slideDown('fast')
  })
  $('#btnAdminLogOut2').click(() => {
    $('#frmCreateGroup').slideUp('slow')
    $('#frmAdminLogin').slideDown('fast')
  })
  
  // View Groups Tab (3)
  $('#btnClasses3').click(() => {
    $('#frmViewGroups').slideUp('slow')
    $('#frmInstructorClasses').slideDown('fast')
  })
  $('#btnStudentGroups3').click(() => {
    $('#frmViewGroups').slideUp('slow')
    $('#frmViewGroups').slideDown('fast')
  })
  $('#btnSendAssignment3').click(() => {
    $('#frmViewGroups').slideUp('slow')
    $('#frmWork').slideDown('fast')
  })
  $('#btnViewSubmissions3').click(() => {
    $('#frmViewGroups').slideUp('slow')
    $('#frmViewSubmissions').slideDown('fast')
  })
  $('#btnAdminLogOut3').click(() => {
    $('#frmViewGroups').slideUp('slow')
    $('#frmAdminLogin').slideDown('fast')
  })

  // View Submissions Tab (4)
  $('#btnClasses4').click(() => {
    $('#frmViewSubmissions').slideUp('slow')
    $('#frmInstructorClasses').slideDown('fast')
  })
  $('#btnStudentGroups4').click(() => {
    $('#frmViewSubmissions').slideUp('slow')
    $('#frmViewGroups').slideDown('fast')
  })
  $('#btnSendAssignment4').click(() => {
    $('#frmViewSubmissions').slideUp('slow')
    $('#frmWork').slideDown('fast')
  })
  $('#btnViewSubmissions4').click(() => {
    $('#frmViewSubmissions').slideUp('slow')
    $('#frmViewSubmissions').slideDown('fast')
  })
  $('#btnAdminLogOut4').click(() => {
    $('#frmViewSubmissions').slideUp('slow')
    $('#frmAdminLogin').slideDown('fast')
  })
  

    