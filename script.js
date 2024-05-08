function showSidebar() {
    console.log('clicked')
    const sidebar = document.querySelector('.sidebar');
    if (sidebar && sidebar.style.display === "block") {
        sidebar.style.display = "none";
    } else if (sidebar) {
        sidebar.style.display = "block";
    }
}


document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('video-background-sec2');
    var replayButton = document.getElementById('replay');

    replayButton.style.display = 'none'; // Hide replay button initially

    replayButton.addEventListener('click', function () {
        video.currentTime = 0;
        video.play();
    });

    // Show replay button after 15 seconds
    setTimeout(function () {
        replayButton.style.display = 'block';
    }, 32000); // 15 seconds in milliseconds

    // Smooth scroll behavior for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const hrefValue = this.getAttribute('href');
            // Prevent default behavior only if href is not just '#'
            if (hrefValue !== '#') {
                e.preventDefault();
                const target = document.querySelector(hrefValue);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    const sidebar = document.querySelector('.sidebar');

    if (sidebar) {
        
    }




    // Initial trigger of animations on page load
    animateElements();
});


function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    if (sidebar && sidebar.style.display === "none") {
        sidebar.style.display = "block";
    } else if (sidebar) {
        sidebar.style.display = "none";
    }
}





// Function to add animation class to elements when they enter the viewport
function animateElements() {
    const elements = document.querySelectorAll('.animated-item');
    elements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('animate');
        }
    });
}

// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add event listener to trigger animations on scroll
window.addEventListener('scroll', animateElements);


document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('emailInput');
    const subscribeButton = document.getElementById('btn');

    subscribeButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default form submission behavior
        const email = emailInput.value.trim(); // Trim any leading/trailing spaces

        // Check if the email input is not empty
        if (email !== '') {
            // Here you can add your code to submit the form or perform any other action

            // Clear the email input after submission
            emailInput.value = '';
        }
    });
});



let slideIndex = 0;
showSlides();


// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

  // Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 5000); // Change image every 2 seconds
} 


const sec3 = document.querySelector('#sec3');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = document.querySelectorAll('.counter');


            counters.forEach(counter => {
                counter.innerText = '0';
            
                const updateCounter = () =>{
                    const target = counter.getAttribute('data-target');
            
                    const c = +counter.innerText;
            
                    const increment = target/250;
            
                    if(c <target){
                        counter.innerText = `${Math.ceil(c + 
                        increment)}`;
                        setTimeout(updateCounter,35)
                    }else{
                        counter.innerText = target
                    }
                };
            
                updateCounter();
            })
        }
    });
});

observer.observe(sec3);

// jOURNEY

// VARIABLES
const elH = document.querySelectorAll(".timeline li > div");

// START
window.addEventListener("load", init);

function init() {
  setEqualHeights(elH);
}

// SET EQUAL HEIGHTS
function setEqualHeights(el) {
  let counter = 0;
  for (let i = 0; i < el.length; i++) {
    const singleHeight = el[i].offsetHeight;

    if (counter < singleHeight) {
      counter = singleHeight;
    }
  }

  for (let i = 0; i < el.length; i++) {
    el[i].style.height = `${counter}px`;
  }
}
