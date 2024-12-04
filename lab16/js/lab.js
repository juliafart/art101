/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.
   * This script handles the API call and dynamically updates the DOM.

   Author: Julia Gomez
   Date: 11/7/2024
*/

let currentComicNum;

function fetchXKCDComic(comicNum) {
  const apiUrl = comicNum
    ? `https://xkcd.com/${comicNum}/info.0.json`
    : "https://xkcd.com/info.0.json";

  console.log(`Fetching comic from: ${apiUrl}`); // Debugging URL

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

      // Prevent duplicate event listeners
      $("#prev").off("click").click(() => {
        if (currentComicNum > 1) fetchXKCDComic(currentComicNum - 1);
        else alert("No earlier comics!");
      });

      $("#next").off("click").click(() => fetchXKCDComic(currentComicNum + 1));
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.error("Error fetching comic:", textStatus, errorThrown);
      $("#output").html("<p>Error fetching comic. Please try again later.</p>");
    }
  });
}

$(document).ready(function () {
  fetchXKCDComic(); // Load the latest comic on page load
});