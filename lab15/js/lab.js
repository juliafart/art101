/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.
   * This script handles the API call and dynamically updates the DOM.

   Author: Julia Gomez
   Date: 11/7/2024
*/

$(document).ready(function () {
    // API endpoint (Example: Yes or No API)
    const apiURL = "https://yesno.wtf/api";

    // Click event for the button
    $("#activate").click(function () {
        $.ajax({
            url: apiURL,
            type: "GET",
            dataType: "json",
            success: function (data) {
                // Parse and display data
                console.log("API Data:", data);
                const output = `
                    <p><strong>Answer:</strong> ${data.answer}</p>
                    <img src="${data.image}" alt="Response Image" style="max-width: 100%; height: auto;">
                `;
                $("#output").html(output); // Update #output with response
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error("Error:", textStatus, errorThrown);
                $("#output").text("An error occurred while fetching data. Please try again."); // Error message
            }
        });
    });
});