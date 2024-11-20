var tmp = "";

for (var index = 0; index < json_object.length; ++index) {
  var number_of_images_per_row = 3;
  var new_row = index % number_of_images_per_row == 0;
  var last_element = (index + 1) % number_of_images_per_row == 0;

  var value = json_object[index];

  tmp += '<div class="masonry-brick">';
  tmp += '<div class="masonry-content">';
  // Consider empty {} json objects as invisible blank grid occupiers.
  // Used to ensure that each entry takes up 1/Xth of a row.
  if (!value.hasOwnProperty("title")) {
    tmp += '<div class="card" style="visibility: hidden;">';

    tmp += "</div>";
  } else {
    tmp += '<div class="card" id="card-' + index.toString() + '">';

    tmp +=
      ' <div id="carousel-' +
      index.toString() +
      '" class="card-img-top carousel slide carousel-fade" data-ride="carousel"> ';
    tmp += '  <div class="carousel-inner">';

    // Add each image to the carousel.
    for (
      var image_index = 0;
      image_index < value.images.length;
      image_index++
    ) {
      if (image_index == 0) {
        tmp += '   <div class="carousel-item active">';
      } else {
        tmp += '   <div class="carousel-item">';
      }
      // Only add carousel click if there is more than one image.
      if (value.images.length > 1) {
        tmp +=
          ' <a href="#carousel-' +
          index.toString() +
          '" role="button" data-slide="next" id="carousel-click-next-' +
          index.toString() +
          '">';
      }
      tmp +=
        '    <video playsinline autoplay muted loop class="d-block w-100" style="pointer-events: none;">';
      tmp += '<source type="video/webm" src="resources/' +
        value.image_folder +
        "/";

      // An image can be styled to add padding by replacing the string with an
      // array with first element filepath and second element styling string.
      if (value.images[image_index].constructor == "".constructor) {
        tmp += value.images[image_index] + '">';
      } else if (value.images[image_index].constructor == [].constructor) {
        tmp +=
          value.images[image_index][0] +
          '" style="' +
          value.images[image_index][1] +
          '">';
      }
      if (value.images.length > 1) {
        tmp += "  </a>";
      }
      tmp += "</div>";
    }

    tmp += "</div>";
    tmp += " </div>";
    tmp += ' <div class="card-body">';
    // Add links to title text if applicable.
    if (value.hasOwnProperty("link")) {
      tmp +=
        '  <h5 class="card-title"><a href="' +
        value.link +
        '">' +
        value.title +
        "</a></h5>";
    } else {
      tmp += '  <h5 class="card-title">' + value.title + "</h5>";
    }
    tmp += " </div>";
    tmp += ' <div class="card-footer">';
    tmp += '  <small class="text-muted">' + value.completion + "</small>";
    if (value.hasOwnProperty("info")) {
      tmp += '<a tabindex="0" class="btn btn-secondary info-button" role="button" data-toggle="popover" data-trigger="focus" data-placement="top" data-content="';
      tmp += value.info;
      tmp += '">i</a>';
    }
    tmp += " </div>";
    tmp += "</div>";
    tmp += "</div>";
    tmp += "</div>";
  }
}

$("#card-decks").prepend(tmp);

$(document).ready(function () {
  jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 0; // 2 seconds
  $(function () {
    $('[data-toggle="popover"]').popover()
  });
  $('.popover-dismiss').popover({
    trigger: 'focus'
  });
});

for (var index = 0; index < json_object.length; ++index) {
  var card = document.getElementById("card-" + index.toString());
  new ResizeObserver(function () {
    resizeAllMasonryItems();
  }).observe(card);
}

/* Resize all the grid items on the load and resize events */
var masonryEvents = ["load", "resize"];
masonryEvents.forEach(function (event) {
  window.addEventListener(event, resizeAllMasonryItems);
});

/* Do a resize once more when all the images finish loading */
waitForImages();
