$(document).ready(function() {

    // executes when HTML-Document is loaded and DOM is ready
    console.log("document is ready");

    $(".card").hover(
        function() {
            $(this)
                .addClass("shadow-lg")
                .css("cursor", "pointer");
        },
        function() {
            $(this).removeClass("shadow-lg");
        }
    );

    // document ready
});

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

/* Huy */

$("#your-custom-id-button").mdbDropSearch();

/* END Huy */