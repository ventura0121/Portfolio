// Layout the website using HTML and CSS. COMPLETED
// Add necessary information to meet requirements such as bio. COMPLETE
// Link resume and additional contact information. COMPLETE
// Add a row to display projects
// Use Javascript to create 3 points of interactions
// Implement Responsive design. COMPLETE

//console.log connected

// const projectElement = document.querySelector(".flex-container2");
// projectElement.addEventListener('mouseover', mouseOver);

// function mouseOver() {
//     projectElement.classList.toggle('blue')
//     }



// const gifElement = document.querySelector('img');
// gifElement.addEventListener('mouseover', expandGif);

// function expandGif() {
//     gifElement.classList.toggle('size');
//     }

const informationElement = document.querySelector('.projects');
const informationLinks = document.querySelector('.flex-container2');

informationElement.addEventListener('click', hideFont);

function hideFont() {
    informationLinks.classList.toggle('hide');;
    }

