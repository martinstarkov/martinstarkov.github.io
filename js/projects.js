var tmp = "";
var posterCount = 0;

for (var index = 0; index < json_object.length; ++index) {
  tmp += '<div class="col-sm-12 col-lg-6 gallery-item" style="display:inline-block;float:none;"><div class="card" id="card-' + index.toString() + '"><div id="carousel-' +
    index.toString() +
    '" class="card-img-top carousel slide carousel-fade" data-interval="14000"><div class="carousel-inner">';

  var value = json_object[index];
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
    // https://stackoverflow.com/questions/680929/how-to-extract-extension-from-filename-string-in-javascript
    var re = /(?:\.([^.]+))?$/;
    let extension = re.exec(value.images[image_index])[1];
    if (extension === "webm") {
      posterCount++;
      tmp += '<video playsinline autoplay muted loop preload="auto" class="d-block w-100" ';
    } else {
      tmp += '<img decoding="auto" class="d-block w-100" ';
    }
    tmp += 'src="resources/' + value.image_folder + "/" + value.images[image_index] + '">';
    if (extension === "webm") {
      tmp += '</video>';
    } else {
    }
    if (value.images.length > 1) {
      tmp += "  </a>";
    }
    tmp += "</div>";
  }
  tmp += '</div></div><div class="card-body">';
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
  tmp += '</div><div class="card-footer"><small class="text-muted">' + value.completion + '</small><a tabindex="0" class="btn btn-secondary info-button" role="button" data-toggle="popover" data-trigger="focus" data-placement="top" data-content="';
  if (value.hasOwnProperty("info")) {
    tmp += value.info;
  } else {
    tmp += '" style="visibility:hidden;';
  }
  tmp += '">i</a></div></div></div></div></div>';
}

$("#gallery").prepend(tmp);

$(document).ready(function () {
  $(function () {
    $('[data-toggle="popover"]').popover({html:true})
  });
  $('.popover-dismiss').popover({
    trigger: 'focus'
  });
});

var $grid = $('#gallery').imagesLoaded( function() {
  // init Masonry after all images have loaded
  $grid.masonry({
    itemSelector : '.gallery-item',
    horizontalOrder: true
  });
});

var postersLoaded = 0;

$('video').on('loadeddata',function (){

  postersLoaded++;
  
  if (postersLoaded >= posterCount) {
  
  
    $('#gallery').masonry({
      itemSelector : '.gallery-item',
      horizontalOrder: true
    });
  
      $('#gallery').masonry('reloadItems');
      $('#gallery').masonry('layout');
  
  }
});