
function sendContact() {
    
    var fName = document.getElementById('firstName').value;
    var lName = document.getElementById('lastName').value;
    
    if (!isNaN(fName)) {
        alert('First Name can only include letters?')
        return false;
    }
    
    if (!isNaN(lName)) {
        alert('Last Name can only include letters?')
        return false;
    }
    
    return true;
}

