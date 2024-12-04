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
  const apiUrl = comicNum
    ? `https://xkcd.com/${comicNum}/info.0.json`
    : "https://xkcd.com/info.0.json";

  $.ajax({
    url: apiUrl,
    type: "GET",
    dataType: "json",
    success: function (comicObj) {
      console.log(comicObj);
      currentComicNum = comicObj.num;

      const comicTitle = `<h3>${comicObj.title}</h3>`;
      const comicImg = `<img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}">`;

      const navButtons = `
        <button id="prev">Previous</button>
        <button id="next">Next</button>
      `;

      $("#output").html(comicTitle + comicImg + navButtons);

      // Event listeners for buttons
      $("#prev").click(() => fetchXKCDComic(currentComicNum - 1));
      $("#next").click(() => fetchXKCDComic(currentComicNum + 1));
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.error("Error fetching comic:", textStatus, errorThrown);
      $("#output").html("<p>Error fetching comic. Please try again later.</p>");
    }
  });
}

// Initial call
$(document).ready(function () {
  fetchXKCDComic();
});