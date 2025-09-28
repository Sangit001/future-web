(function(){
   emailjs.init("rCBxulKZwX_5icvM6"); // Public Key
})();

let sendButton = document.getElementById("input-send-button");

sendButton.addEventListener("click", function() {
  let userEmail = document.getElementById("email");
  let userName = document.getElementById("username");
  let userMessage = document.getElementById("message-box");

  let details = {
    from_name: userName.value,
    from_email: userEmail.value,
    message: userMessage.value
  };

  emailjs.send("service_2kjzq5m", "template_87hi9ej", details)
    .then(function(response) {
      alert("Message sent successfully");
      userEmail.value = "";
      userName.value = "";
      userMessage.value = "";
    }, function(error) {
      alert("Something went wrong");
      console.log("FAILED...", error);
    });
});
