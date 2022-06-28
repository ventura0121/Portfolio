// Layout the website using HTML and CSS. 
// Add necessary information to meet requirements such as bio. 
// Link resume and additional contact information. 
// Add a row to display projects
// Use Javascript to create 3 points of interactions
// Implement Responsive design. 

//console.log connected

//grabs projects and gives it an eventlistener to highlight projects when clicked 
const projectElement = document.querySelector(".flex-container2");

projectElement.addEventListener('click', entering);
function entering() {
    projectElement.classList.toggle('blue')
    }

// Expands gif size when clicked
const gifElement = document.querySelector('img');

gifElement.addEventListener('click', expandGif);
function expandGif() {
    gifElement.classList.toggle('imgResize');
    }

//Hides the projects when header is double clicked.
const informationElement = document.querySelector('.projects');
const informationLinks = document.querySelector('.flex-container2');

informationElement.addEventListener('dblclick', hideFont);
function hideFont() {
    informationLinks.classList.toggle('hide');
    }

