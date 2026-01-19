// Simple contact form submission
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you for your message! I will contact you soon.");
  this.reset();
});
