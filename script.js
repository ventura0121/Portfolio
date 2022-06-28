// Layout the website using HTML and CSS. 
// Add necessary information to meet requirements such as bio. 
// Link resume and additional contact information. 
// Add a row to display projects
// Use Javascript to create 3 points of interactions
// Implement Responsive design. 

//console.log connected

const projectElement = document.querySelector(".flex-container2");

projectElement.addEventListener('mouseenter', entering);
function entering() {
    projectElement.classList.toggle('blue')
    }

const gifElement = document.querySelector('img');

gifElement.addEventListener('click', expandGif);
function expandGif() {
    gifElement.classList.toggle('imgResize');
    }


const informationElement = document.querySelector('.projects');
const informationLinks = document.querySelector('.flex-container2');

informationElement.addEventListener('click', hideFont);
function hideFont() {
    informationLinks.classList.toggle('hide');
    }

