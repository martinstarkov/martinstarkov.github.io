$( document ).ready(function() {

  var tmp = '';

  for (var index = 0; index < json_object.length; ++index) {
    var new_row = index % 4 == 0;
    var last_element = (index + 1) % 4 == 0;

    // Add this tag for every 4th element including 0.
    if (new_row && !last_element) {
      tmp += '<div class="card-deck">'
    }

    var value = json_object[index];

    // Consider empty {} json objects as invisible blank grid occupiers. 
    // Used to ensure that each entry takes up 1/4th of a row.
    if (!value.hasOwnProperty("title")) {
      tmp += '<div class="card" style="visibility: hidden;">'
      tmp += '</div>'
    } else {

      tmp += '<div class="card">'
      tmp += ' <div id="carousel-' + index.toString() + '" class="card-img-top carousel slide" data-ride="carousel"> '
      tmp += '  <div class="carousel-inner">'

      // Add each image to the carousel.
      for (var image_index = 0; image_index < value.images.length; image_index++) {
        if (image_index == 0) {
          tmp += '   <div class="carousel-item active">'
        } else {
          tmp += '   <div class="carousel-item">'
        }
        // An image can be styled to add padding by replacing the string with an
        // array with first element filepath and second element styling string.
        if (value.images[image_index].constructor == [].constructor) {
          tmp += '    <img class="d-block w-100" src="resources/' + value.image_folder + '/' + value.images[image_index][0] + '" style="' + value.images[image_index][1] + '">'
        } else if (value.images[image_index].constructor == "".constructor) {
          tmp += '    <img class="d-block w-100" src="resources/' + value.image_folder + '/' + value.images[image_index] + '">'
        }
        tmp += '   </div>'
      }

      tmp += '  </div>'
      // Only add carousel if there is more than one image.
      if (value.images.length > 1) {
        tmp += '  <a class="carousel-control-prev invert" href="#carousel-' + index.toString() + '" role="button" data-slide="prev">'
        tmp += '   <span class="carousel-control-prev-icon" aria-hidden="true"></span>'
        tmp += '   <span class="sr-only">Previous</span>'
        tmp += '  </a>'
        tmp += '  <a class="carousel-control-next invert" href="#carousel-' + index.toString() + '" role="button" data-slide="next">'
        tmp += '   <span class="carousel-control-next-icon" aria-hidden="true"></span>'
        tmp += '   <span class="sr-only">Next</span>'
        tmp += '  </a>'
      }
      tmp += ' </div>'
      tmp += ' <div class="card-body">'
      // Add links to title text if applicable.
      if (value.hasOwnProperty("link")) {
        tmp += '  <h5 class="card-title"><a href="' + value.link + '">' + value.title + '</a></h5>'
      } else {
        tmp += '  <h5 class="card-title">' + value.title + '</h5>'
      }
      tmp += ' </div>'
      tmp += ' <div class="card-footer">'
      tmp += '  <small class="text-muted">' + value.completion + '</small>'
      tmp += ' </div>'
      tmp += '</div>'
        
    }

    // Add this tag for every 3rd element excluding 0.
    if (!new_row && last_element) {
      tmp += '</div>'
    }
  }
  
  $('#card-decks').prepend(tmp);
});