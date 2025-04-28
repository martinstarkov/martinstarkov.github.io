var tmp = "";

for (var index = 0; index < json_object.length; ++index) {
    tmp +=
        '<div class="col-sm-12 col-lg-6 gallery-item" style="display:inline-block;float:none;"><div class="card" id="card-' +
        index.toString() +
        '"><div id="carousel-' +
        index.toString() +
        '" class="card-img-top carousel slide carousel-fade" data-interval="false"><div class="carousel-inner">';

    var value = json_object[index];
    // Add each image to the carousel.
    for (var image_index = 0; image_index < value.images.length; image_index++) {
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
        if (extension === "mp4") {
            tmp +=
                '<video playsinline autoplay muted loop preload="auto" class="d-block w-100 noselect" ';
        } else {
            tmp += '<img decoding="auto" class="d-block w-100 noselect" ';
        }
        tmp +=
            'src="resources/' +
            value.image_folder +
            "/" +
            value.images[image_index] +
            '">';
        if (extension === "mp4") {
            tmp += "</video>";
        } else {}
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
    tmp +=
        '</div><div class="card-footer"><small class="text-muted">' +
        value.completion +
        '</small><a tabindex="0" class="btn btn-secondary info-button" role="button" data-toggle="popover" data-trigger="focus" data-placement="top" data-content="';
    if (value.hasOwnProperty("info")) {
        tmp += value.info;
    } else {
        tmp += '" style="visibility:hidden;';
    }
    tmp += '">i</a></div></div></div></div></div>';
}

$("#gallery").prepend(tmp);

$(document).ready(function() {
    $('[data-toggle="popover"]')
        .popover({
            html: true,
            trigger: "manual",
        })
        .click(function(e) {
            e.preventDefault(); // Prevent default link behavior
            const $this = $(this);
            if ($this.hasClass("popover-displayed")) {
                $this.popover("hide");
                $this.removeClass("popover-displayed");
                $this.removeClass("popover-active");
            } else {
                $this.popover("show");
                $this.addClass("popover-displayed");
                $this.addClass("popover-active");
            }
        });

    $(".popover-dismiss").popover({ trigger: "focus" });
});

var $grid = $("#gallery").imagesLoaded(function() {
    // init Masonry after all images have loaded
    $grid.masonry({});
});

var postersLoaded = 0;

function waitForVidLoad(vids, callback) {
    if (vids.length === 0) {
        callback();
    }
    var vidsLoaded = 0;
    vids.on("loadeddata", function() {
        vidsLoaded++;
        if (vids.length === vidsLoaded) {
            callback();
        }
    });
}

var $container = $("#gallery");
var vids = $("#gallery").find("video");

waitForVidLoad(vids, function() {
    $container.imagesLoaded(function() {
        $container.masonry({
            itemSelector: ".gallery-item",
            horizontalOrder: true,
        });
    });
});

function setupCarouselTiming(carousel) {
    let timeout;
    const $carousel = $(carousel);

    function queueNextSlide() {
        clearTimeout(timeout); // Clear any previous timers

        const $activeItem = $carousel.find(".carousel-item.active");
        const $video = $activeItem.find("video").first();

        if ($video.length > 0) {
            const video = $video.get(0);
            const remainingTime = (video.duration - video.currentTime) * 1000;

            if (!isNaN(video.duration) && remainingTime > 5000) {
                timeout = setTimeout(() => {
                    $carousel.carousel("next");
                }, remainingTime);
            } else {
                timeout = setTimeout(() => {
                    $carousel.carousel("next");
                }, 5000);
            }
        } else {
            // If it's an image
            timeout = setTimeout(() => {
                $carousel.carousel("next");
            }, 5000);
        }
    }

    // When slide changes, requeue the next
    $carousel.on("slid.bs.carousel", function() {
        queueNextSlide();
    });

    // Also queue it initially
    queueNextSlide();
}

// Set up all carousels
$(".carousel").each(function() {
    setupCarouselTiming(this);
});