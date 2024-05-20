function validateForm() {
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    
    if (email.trim() === "" || subject.trim() === "" || message.trim() === "") {
        alert("Будь ласка, заповніть всі поля форми.");
        return false;
    } else {
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        
        alert("Форма успішно відправлена!");
        return true;
    }
}
