

document.getElementById('programMenu').addEventListener('click', function() {
    var programContent = document.getElementById('programContent');
    var academicYearContent = document.getElementById('academicYearContent');
    var studentContent = document.getElementById('studentContent');

    if (programContent.style.display === 'none' || programContent.style.display === '') {
        programContent.style.display = 'block';
        academicYearContent.style.display = 'none';
        studentContent.style.display = 'none';
    } else {
        programContent.style.display = 'none';
    }
});



document.getElementById('academicYearMenu').addEventListener('click', function() {
    var academicYearContent = document.getElementById('academicYearContent');
    var programContent = document.getElementById('programContent');
    var studentContent = document.getElementById('studentContent');

    if (academicYearContent.style.display === 'none' || academicYearContent.style.display === '') {
        academicYearContent.style.display = 'block';
        programContent.style.display = 'none';
        studentContent.style.display = 'none';
        renderAcademicYearTable();
    } else {
        academicYearContent.style.display = 'none';
    }
});


document.getElementById('studentMenu').addEventListener('click', function() {
   var studentContent=  document.getElementById('studentContent');
   var academicYearContent= document.getElementById('academicYearContent');
   var programContent = document.getElementById('programContent');
  if(studentContent.style.display=== 'none' || studentContent.style.display === ''){
    studentContent.style.display ='block';
    academicYearContent.style.display ='none';
    programContent.style.display='none';
  }
  else{
    studentContent.style.display = 'none';
  }
});

document.getElementById('addNewStudent').addEventListener('click', function() {
    document.getElementById('studentModal').style.display = 'block';
});

document.querySelectorAll('.close').forEach(function(element) {
    element.addEventListener('click', function() {
        element.parentElement.parentElement.style.display = 'none';
    });
});

document.getElementById('saveStudent').addEventListener('click', function() {
    // Add code to save the student record
    document.getElementById('studentModal').style.display = 'none';
});




document.getElementById('saveStudent').addEventListener('click', function() {
    // Get the input values
    var studentId = document.getElementById('studentId').value;
    var studentName = document.getElementById('studentName').value;
    var studentProgram = document.getElementById('studentProgram').value;

    // Create a new row and cells
    var table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    // Insert data into cells
    cell1.innerHTML = table.rows.length; // Automatically numbers the rows
    cell2.innerHTML = studentId;
    cell3.innerHTML = studentName;
    cell4.innerHTML = studentProgram;
    cell5.innerHTML = '<button class="edit">Edit</button> <button class="delete">Delete</button>'; // Example actions

    // Clear the form inputs
    document.getElementById('studentId').value = '';
    document.getElementById('studentName').value = '';
    document.getElementById('studentProgram').value = '';

    // Hide the modal
    document.getElementById('studentModal').style.display = 'none';
});



// Modal logic for Program section
const modal = document.getElementById("programModal");
const btn = document.getElementById("addNew");
const span = document.getElementsByClassName("close")[0];
const saveBtn = document.getElementById("saveProgram");
const cancelBtn = document.getElementById("cancel");

// Close the Academic Year Modal when clicking the "x" button
const closeAcademicYearSpan = document.querySelector('#academicYearModal .close');

closeAcademicYearSpan.onclick = function() {
    academicYearModal.style.display = "none";
}

// Optional: You can also close the modal by clicking outside of it
window.onclick = function(event) {
    if (event.target == academicYearModal) {
        academicYearModal.style.display = "none";
    }
}


btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

cancelBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

saveBtn.addEventListener('click', function() {
    const pcode = document.getElementById('pcode').value;
    const description = document.getElementById('description').value;
    const type = document.getElementById('type').value;

    if (pcode && description && type) {
        const programTableBody = document.querySelector('#programTable tbody');
        const newRow = document.createElement('tr');
        const rowCount = programTableBody.rows.length + 1;

        newRow.innerHTML = `
            <td>${rowCount}</td>
            <td>${pcode}</td>
            <td>${description}</td>
            <td>${type}</td>
        `;

        programTableBody.appendChild(newRow);
        modal.style.display = "none";
    } else {
        alert('Please fill in all fields.');
    }
});

// Modal logic for Academic Year section
const academicYearModal = document.getElementById("academicYearModal");
const createNewBtn = document.getElementById("createNew");
const closeAcademicYearBtn = document.getElementById("close");
const saveAcademicYearBtn = document.getElementById("saveAcademicYear");

createNewBtn.onclick = function() {
    academicYearModal.style.display = "block";
}

closeAcademicYearBtn.onclick = function() {
    academicYearModal.style.display = "none";
}

saveAcademicYearBtn.onclick = function() {
    const ayCode = document.getElementById('ayCode').value;
    const semester = document.getElementById('semester').value;
    const status = document.getElementById('status').value;

    if (ayCode && semester && status) {
        const academicYearTableBody = document.querySelector('#academicYearTableBody');
        const newRow = document.createElement('tr');
        const rowCount = academicYearTableBody.rows.length + 1;

        newRow.innerHTML = `
            <td>${rowCount}</td>
            <td>${ayCode}</td>
            <td>${semester}</td>
            <td>${status}</td>
            <td>
                <button class="btn btn-primary">Edit</button>
                <button class="btn btn-secondary">Delete</button>
            </td>
        `;

        academicYearTableBody.appendChild(newRow);
        academicYearModal.style.display = "none";
    } else {
        alert('Please fill in all fields.');
    }
}














