function sendMessage() {
    let name = document.getElementById("name").value;

    alert("Thank you, " + name + "! Your message has been received.");
<script>
function sendMessage() {

var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var message = document.getElementById("message").value;

var text =
"Hello Jenny Digital Solution,%0A%0A" +
"Name: " + name + "%0A" +
"Email: " + email + "%0A" +
"Phone: " + phone + "%0A%0A" +
"Message:%0A" + message;
window.location.href =
"https://api.whatsapp.com/send?phone=2349010841174&text=" +
encodeURIComponent(message);
</script>
    return false;
}