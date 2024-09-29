const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
  const words = ["Full Stack Python Developer", "Data Analytics"];
  let wordIndex = 0;
  let charIndex = 0;
  let currentWord = '';
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const newWordDelay = 2000;

  function type() {
      if (charIndex < words[wordIndex].length) {
          currentWord += words[wordIndex].charAt(charIndex);
          document.querySelector('.typing-animation').textContent = currentWord;
          charIndex++;
          setTimeout(type, typingSpeed);
      } else {
          setTimeout(erase, newWordDelay);
      }
  }

  function erase() {
      if (charIndex > 0) {
          currentWord = currentWord.slice(0, -1);
          document.querySelector('.typing-animation').textContent = currentWord;
          charIndex--;
          setTimeout(erase, erasingSpeed);
      } else {
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(type, typingSpeed + 1100);
      }
  }

  type();
});



// Animate progress bars
const progressBars = document.querySelectorAll('.progress-done');

progressBars.forEach(bar => {
    setTimeout(() => {
        bar.style.width = bar.getAttribute('data-done') + '%';
        bar.style.opacity = 1;
    }, 500);
});

// Animate circular skills
// const circles = document.querySelectorAll('.circle');

// circles.forEach(circle => {
//     let percent = circle.getAttribute('data-percent');
//     circle.style.setProperty('--percent', percent);
// });
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Change the port number if needed

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like your HTML/CSS)
app.use(express.static('public'));

// POST route to handle form submission
app.post('/submit-contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    // You can add your form processing logic here
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);

    // Send a response to the client after processing
    res.send('Form submitted successfully! Thank you for contacting us.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${saivarma1}`);
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('/submit-contact', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        const responseMessage = document.getElementById('responseMessage');
        responseMessage.textContent = data;
        responseMessage.style.display = 'block';
        document.getElementById('contactForm').reset();
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
});
// Initialize EmailJS
(function(){
    emailjs.init("service_1r18h09"); // Replace with your EmailJS user ID
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission

    // Collect form data
    const formData = {
        name: document.querySelector('input[name="name"]').value,
        email: document.querySelector('input[name="email"]').value,
        subject: document.querySelector('input[name="subject"]').value,
        message: document.querySelector('textarea[name="message"]').value,
    };

    // Send email via EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
    .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);
        document.getElementById('responseMessage').style.display = 'block';
        document.getElementById('responseMessage').innerHTML = 'Form submitted successfully!';

        // Optional: Clear the form after submission
        document.getElementById("contactForm").reset();
    }, function(error) {
        console.error("FAILED...", error);
        document.getElementById('responseMessage').style.color = 'red';
        document.getElementById('responseMessage').innerHTML = 'Error submitting form!';
    });
});
