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
let questionCount = 0;

function addQuestion() {
    questionCount++;
    const container = document.getElementById('questionsContainer');

    const questionDiv = document.createElement('div');
    questionDiv.classList.add('mb-3');

    questionDiv.innerHTML = `
        <label for="question${questionCount}" class="form-label">Question ${questionCount}</label>
        <input type="text" class="form-control mb-2" id="question${questionCount}" name="question${questionCount}" placeholder="Enter your question">

        <label for="answer${questionCount}" class="form-label">Answer</label>
        <textarea class="form-control" id="answer${questionCount}" name="answer${questionCount}" rows="2" placeholder="Enter your answer"></textarea>`
    container.appendChild(questionDiv);
}

$('#Assignbtn').on('click', function(){
    Swal.fire({
        title: "Form Assigned",
        html: strMessage,
        icon: "success"
    })
})

function filterStudents() {
    const classSelect = document.getElementById('classFilter');
    const studentSelect = document.getElementById('studentSelect');
    const selectedClass = classSelect.value;

    // Clear existing options
    studentSelect.innerHTML = '';

    if (selectedClass && studentData[selectedClass]) {
        studentData[selectedClass].forEach(student => {
            const option = document.createElement('option')
            option.value = student
            option.textContent = student
            studentSelect.appendChild(option)
        });
    }
}

// Populate student list based on selected class
function filterStudents() {
    const classSelect = document.getElementById('classFilter')
    const studentSelect = document.getElementById('studentSelect')
    const selectedClass = classSelect.value;

    studentSelect.innerHTML = '';

    if (selectedClass && studentData[selectedClass]) {
        studentData[selectedClass].forEach(student => {
            const option = document.createElement('option');
            option.value = student;
            option.textContent = student;
            studentSelect.appendChild(option);
        });
    }
}

// Add group function (triggered by btnAddGroup)
function addGroup() {
    const groupName = document.getElementById('groupName').value.trim();
    const classFilter = document.getElementById('classFilter').value;
    const className = document.getElementById('classFilter').selectedOptions[0].text;
    const studentSelect = document.getElementById('studentSelect');
    const selectedStudents = Array.from(studentSelect.selectedOptions).map(opt => opt.value);

    if (!groupName || !classFilter || selectedStudents.length === 0) {
        alert("Please fill in all fields and select at least one student.");
        return;
    }

    // Add new group to the array
    groups.push({
        name: groupName,
        class: className,
        students: selectedStudents
    });

    // Reset form
    document.getElementById('frmCreateGroup').reset();
    document.getElementById('studentSelect').innerHTML = '';

    // Update the group view
    renderGroups();
}

// Render group list
function renderGroups() {
    const container = document.getElementById('groupsContainer');
    container.innerHTML = '';

    if (groups.length === 0) {
        container.innerHTML = '<p class="text-muted">No groups have been created yet.</p>';
        return;
    }

    groups.forEach(group => {
        const card = document.createElement('div');
        card.classList.add('border', 'rounded', 'p-3', 'mb-3', 'bg-light');

        card.innerHTML = `
            <h5 class="mb-1">${group.name}</h5>
            <p class="mb-2"><strong>Class:</strong> ${group.class}</p>
            <p><strong>Members:</strong><br>${group.students.join('<br>')}</p>
        `;

        container.appendChild(card);
    });
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
        `<tr><td>${value[0]}</td><td>${value[1]}</td><td>${value[2]}</td></tr>`);
    });
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
$('#frmWork').slideDown('fast') // Already here
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
$('#frmViewGroups').slideDown('fast') // Already here
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
$('#frmViewGroups').slideDown('fast') // Already here
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


