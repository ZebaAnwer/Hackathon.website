function toggleMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
  }


document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector(".hero-content h1");
    text.style.opacity = "0";
    text.style.transform = "translateY(20px)";
    
    setTimeout(() => {
      text.style.transition = "all 1s ease-in-out";
      text.style.opacity = "1";
      text.style.transform = "translateY(0)";
    }, 200);
  });


window.addEventListener("load", () => {
    const section = document.querySelector(".science-section");
    section.style.opacity = "0";
    section.style.transition = "opacity 1s ease-in-out";
    setTimeout(() => {
      section.style.opacity = "1";
    }, 500);
  }); 
  //... 
  // You can add interactive elements here, such as:
// - Hover effects on benefits
// - Expanding/collapsing details
// - Dynamic content updates based on user input

// Example: Hover effect on benefits
const benefitsList = document.querySelectorAll('.benefits-list ul li');

benefitsList.forEach(benefit => {
    benefit.addEventListener('mouseover', () => {
        benefit.style.color = '#007bff';
    });

    benefit.addEventListener('mouseout', () => {
        benefit.style.color = '#666';
    });
}); 
//... 
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
}); 
//zaiba new code 
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send data to server (replace with your server-side code)
    // Example: Using Fetch API
    fetch('/send-email', { // Replace with your server-side endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
            contactForm.reset(); // Clear form fields
        } else {
            alert('Error sending message.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
}); 
/*firebase use*/ 
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqnBzHWNHvW7Bs6JuLGuk-i1RZ3uhC0yk",
  authDomain: "zeba-d9daf.firebaseapp.com",
  projectId: "zeba-d9daf",
  storageBucket: "zeba-d9daf.firebasestorage.app",
  messagingSenderId: "59010325305",
  appId: "1:59010325305:web:02cb15043e16ac7db266e8",
  measurementId: "G-4P53LM3YW9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
