// IMPORTANT: replace 919999999999 with your WhatsApp number in international format.
// Example for an Indian number: 919876543210 (no +, spaces or brackets).
const WHATSAPP_NUMBER = "919999999999";

document.getElementById("orderForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const service = document.getElementById("service").value;
  const deadline = document.getElementById("deadline").value.trim() || "Not specified";
  const details = document.getElementById("details").value.trim();

  const message =
`Hello StudentHub!%0A%0A` +
`*New Order*%0A` +
`Name: ${encodeURIComponent(name)}%0A` +
`Service: ${encodeURIComponent(service)}%0A` +
`Deadline: ${encodeURIComponent(deadline)}%0A` +
`Requirements: ${encodeURIComponent(details)}`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
});