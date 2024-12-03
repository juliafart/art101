/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.
   * This script handles the API call and dynamically updates the DOM.

   Author: Julia Gomez
   Date: 11/7/2024
*/
$(document).ready(function () {
    // Fetch the current XKCD comic
    $.ajax({
        url: "https://xkcd.com/info.0.json",
        type: "GET",
        dataType: "json",
        success: function (comicObj) {
            console.log(comicObj); // Debugging: log the data to the console

            // Create and append elements to display the comic
            const title = $('<h3>').text(comicObj.title);
            const image = $('<img>')
                .attr('src', comicObj.img)
                .attr('alt', comicObj.alt)
                .attr('title', comicObj.alt);
            const description = $('<p>').text(comicObj.alt);

            // Append to the results div
            $('#output').append(title, image, description);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error fetching comic:", textStatus, errorThrown);
            $('#output').text("Failed to fetch the comic. Please try again later.");
        }
    });
});