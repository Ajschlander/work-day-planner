const dateElement = document.getElementById('date');
let dateAndTime = moment().format("dddd, MMMM Do YYYY");
dateElement.innerHTML = dateAndTime;
