function toggleMenu(){document.getElementById('nav').classList.toggle('show')}
function sendForm(e){
  e.preventDefault();
  const name=document.getElementById('name').value;
  const business=document.getElementById('business').value;
  const email=document.getElementById('email').value;
  const service=document.getElementById('service').value;
  const details=document.getElementById('details').value;
  const message=`Hello Daves Digital, my name is ${name}. Business: ${business || 'Not provided'}. Email: ${email}. I need: ${service}. Project details: ${details}`;
  document.getElementById('form-message').textContent='Your project message is ready. You can copy it and send it to Daves Digital.';
  console.log(message);
}
