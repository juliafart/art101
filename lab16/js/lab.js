/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.
   * This script handles the API call and dynamically updates the DOM.

   Author: Julia Gomez
   Date: 11/7/2024
*/

let currentComicNum;

// Function to fetch and display a comic
function fetchXKCDComic(comicNum) {
  // If a comic number is passed, fetch that comic, else fetch the latest comic
  const apiUrl = comicNum
    ? `https://xkcd.com/${comicNum}/info.0.json`
    : "https://xkcd.com/info.0.json";

  console.log(`Fetching comic from: ${apiUrl}`); // Debugging URL

  $.ajax({
    url: apiUrl,
    type: "GET",
    dataType: "json",
    success: function (comicObj) {
      console.log(comicObj);  // Log the comic object for debugging
      currentComicNum = comicObj.num;  // Store the current comic number

      // Create the HTML content for the comic
      const comicTitle = `<h3>${comicObj.title}</h3>`;
      const comicImg = `<img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}">`;

      // Create navigation buttons for previous and next comics
      const navButtons = `
        <button id="prev">Previous</button>
        <button id="next">Next</button>
      `;

      // Inject the content into the output div
      $("#output").html(comicTitle + comicImg + navButtons);

      // Event listeners for navigation buttons
      // Prevent duplicate event listeners with .off("click")
      
      $("#prev").off("click").click(() => {
        if (currentComicNum > 1) {
          fetchXKCDComic(currentComicNum - 1);  // Load previous comic
        } else {
          alert("No earlier comics!");  // Alert if no earlier comics are available
        }
      });

      // Assuming the latest comic number is 2745 (latest comic at the time of writing)
      $("#next").off("click").click(() => {
        if (currentComicNum < 2745) {
          fetchXKCDComic(currentComicNum + 1);  // Load next comic
        } else {
          alert("No more comics!");  // Alert if no more comics are available
        }
      });
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.error("Error fetching comic:", textStatus, errorThrown);  // Log the error
      $("#output").html("<p>Error fetching comic. Please try again later.</p>");  // Show error message
    }
  });
}

// Initial call to load the latest comic when the page is ready
$(document).ready(function () {
  fetchXKCDComic();  // Load the latest comic on page load
});