<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

  (function() {
    emailjs.init('yiy_3l_eMkeMFwqZJ'); // Replace with your actual EmailJS public key
  })();

  function SubmitMail() {
    var params = {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value
    };
    
    emailjs.send("service_uxcwhzm", "template_sq174r9", params)
      .then(function(response) {
        alert("Message Sent Successfully!");
        document.getElementById("contact-form").reset();
      }, function(error) {
        alert("Failed to send message. Please try again later.");
      });
  }
