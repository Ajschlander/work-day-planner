const dateElement = document.getElementById('date');
let dateAndTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
dateElement.innerHTML = dateAndTime;
