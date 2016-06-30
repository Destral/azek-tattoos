/**
 * Created by DAVID on 01/07/2016.
 */
var $overlay_work = $('<div id="overlay-work"></div>');

var $image_work = $("<img >");

//An image to overlay
$overlay_work.append($image_work);

//Add overlay
// $("body").append($overlay);
$("#work").append($overlay_work);

//click the image and a scaled version of the full size image will appear
$("#photo-gallery-work a").click( function(event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");

    //update overlay with the image linked in the link
    $image_work.attr("src", imageLocation);

    //show the overlay
    $overlay_work.show();
} );

$("#overlay-work").click(function() {
    $( "#overlay-work" ).hide();
});

