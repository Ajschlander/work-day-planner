// Select everything
const dateElement = document.getElementById('date');

// Set date and time and write it to the header tag
let dateAndTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
dateElement.innerHTML = dateAndTime;

// Any time slots that have passed that hour it currently is turn to grey background and make it so they cant edit the content inside
