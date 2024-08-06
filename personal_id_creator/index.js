document.getElementById('idForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the input values
    const name = document.getElementById('name').value;
    const idNumber = document.getElementById('idNumber').value;
    const department = document.getElementById('department').value;

    // Set the values in the ID card which want to display
    document.getElementById('cardName').textContent = name;
    document.getElementById('cardIdNumber').textContent = idNumber;
    document.getElementById('cardDepartment').textContent = department;

    // Show the ID card to user
    document.getElementById('idCard').style.display = 'block';
});
