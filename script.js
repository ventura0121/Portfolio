// Layout the website using HTML and CSS. COMPLETED
// Add necessary information to meet requirements such as bio. COMPLETE
// Link resume and additional contact information. COMPLETE
// Add a row to display projects
// Use Javascript to create 3 points of interactions
// Implement Responsive design. COMPLETE

//console.log connected

const gifElement = document.querySelectorAll('header')

gifElement.addEventListener('mouseenter', mouseOver);
console.log("hovered over")

function mouseOver() {
    document.getElementById("header").style.color = "red";
    }

    function mouseOut() {
    document.getElementById("header").style.color = "red";
    }

