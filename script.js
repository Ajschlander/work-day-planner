// Select everything
const dateElement = document.getElementById('date');
const saveElements = document.getElementsByClassName('save');
const contentElements = document.getElementsByClassName('content');
// select all content fields
const nineAM = document.getElementById('9am');
const tenAM = document.getElementById('10am');
const elevenAM = document.getElementById('11am');
const twelvePM = document.getElementById('12pm');
const onePM = document.getElementById('1pm');
const twoPM = document.getElementById('2pm');
const threePM = document.getElementById('3pm');
const fourPM = document.getElementById('4pm');
const fivePM = document.getElementById('5pm');

let toDoList = [];

const initPlanner = () => {
    getDateAndTime();
    addSaveButtons();
    checkTimes();
    saveToStorage();
}

// function to display date and time at top of page
const getDateAndTime = () => {
  let dateAndTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
  dateElement.innerHTML = dateAndTime;
}

const addSaveButtons = () => {
  for (var i = 0; i < saveElements.length; i++) {
    const saveBtn = saveElements[i];
    saveBtn.addEventListener("click", function(){
      
    });
  }
}

const saveToStorage = () => {

}

const checkTimes = () => {
  let currentTime = moment().hour();
  if (currentTime >= 9 && currentTime < 10) {
    nineAM.style.background = "#fa6c14";
  }
  else if (currentTime >= 10 && currentTime < 11) {
    nineAM.style.background = "lightgrey";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "#fa6c14";
  }
  else if (currentTime >= 11 && currentTime < 12) {
    nineAM.style.background = "lightgrey";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "lightgrey";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "#fa6c14";
  }
  else if (currentTime >= 12 && currentTime < 13) {
    nineAM.style.background = "lightgrey";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "lightgrey";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "lightgrey";
    elevenAM.setAttribute("readonly", true);
    twelvePM.style.background = "#fa6c14";
  }
  else if (currentTime >= 13 && currentTime < 14) {
    nineAM.style.background = "lightgrey";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "lightgrey";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "lightgrey";
    elevenAM.setAttribute("readonly", true);
    twelvePM.style.background = "lightgrey";
    twelvePM.setAttribute("readonly", true);
    onePM.style.background = "#fa6c14";
  }
  else if (currentTime >= 14 && currentTime < 15) {
    nineAM.style.background = "lightgrey";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "lightgrey";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "lightgrey";
    elevenAM.setAttribute("readonly", true);
    twelvePM.style.background = "lightgrey";
    twelvePM.setAttribute("readonly", true);
    onePM.style.background = "lightgrey";
    onePM.setAttribute("readonly", true);
    twoPM.style.background = "#fa6c14";
  }
  else if (currentTime >= 15 && currentTime < 16) {
    nineAM.style.background = "lightgrey";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "lightgrey";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "lightgrey";
    elevenAM.setAttribute("readonly", true);
    twelvePM.style.background = "lightgrey";
    twelvePM.setAttribute("readonly", true);
    onePM.style.background = "lightgrey";
    onePM.setAttribute("readonly", true);
    twoPM.style.background = "lightgrey";
    twoPM.setAttribute("readonly", true);
    threePM.style.background = "#fa6c14";
  }
  else if (currentTime >= 16 && currentTime < 17) {
    nineAM.style.background = "lightgrey";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "lightgrey";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "lightgrey";
    elevenAM.setAttribute("readonly", true);
    twelvePM.style.background = "lightgrey";
    twelvePM.setAttribute("readonly", true);
    onePM.style.background = "lightgrey";
    onePM.setAttribute("readonly", true);
    twoPM.style.background = "lightgrey";
    twoPM.setAttribute("readonly", true);
    threePM.style.background = "lightgrey";
    threePM.setAttribute("readonly", true);
    fourPM.style.background = "#fa6c14";
  }
  else if (currentTime >= 17 && currentTime < 18) {
    nineAM.style.background = "lightgrey";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "lightgrey";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "lightgrey";
    elevenAM.setAttribute("readonly", true);
    twelvePM.style.background = "lightgrey";
    twelvePM.setAttribute("readonly", true);
    onePM.style.background = "lightgrey";
    onePM.setAttribute("readonly", true);
    twoPM.style.background = "lightgrey";
    twoPM.setAttribute("readonly", true);
    threePM.style.background = "lightgrey";
    threePM.setAttribute("readonly", true);
    fourPM.style.background = "lightgrey";
    fourPM.setAttribute("readonly", true);
    fivePM.style.background = "#fa6c14";
  }
  else if (currentTime >= 18) {
    nineAM.style.background = "lightgrey";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "lightgrey";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "lightgrey";
    elevenAM.setAttribute("readonly", true);
    twelvePM.style.background = "lightgrey";
    twelvePM.setAttribute("readonly", true);
    onePM.style.background = "lightgrey";
    onePM.setAttribute("readonly", true);
    twoPM.style.background = "lightgrey";
    twoPM.setAttribute("readonly", true);
    threePM.style.background = "lightgrey";
    threePM.setAttribute("readonly", true);
    fourPM.style.background = "lightgrey";
    fourPM.setAttribute("readonly", true);
    fivePM.style.background = "lightgrey";
    fivePM.setAttribute("readonly", true);
  }

}

initPlanner();

// get the element that the info goes into

// decide on what it should look like
// and then update it...
// should this run in a loop and update the clock reguraly?
// create timeblocks with inputs and buttons
// loop and dynamically or I could hard code it.
// add events to the submit button to save what is in the
//     input to local storage
//  get the value out of local storage and populate
//     the input with the data
// check to see what the color of the input should be based on the time
//      moment?
// look at the css for classes later for this
// store data in localstrage as an object where the key is the hour of the day...
