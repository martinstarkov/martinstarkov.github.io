$('.btn_nav').click(function() {
  // animate content
  $('.page__style').addClass('animate_content');
  $('.page__description').fadeOut(100).delay(2800).fadeIn();

  setTimeout(function() {
    $('.page__style').removeClass('animate_content');
  }, 3200);

  //remove fadeIn class after 1500ms
  setTimeout(function() {
    $('.page__style').removeClass('fadeIn');
  }, 1500);

});

// on click show page after 1500ms
$('.home_link').click(function() {
  setTimeout(function() {
    $('.home').addClass('fadeIn');
  }, 1500);
});

$('.projects_link').click(function() {
  setTimeout(function() {
    $('.projects').addClass('fadeIn');
  }, 1500);
});

$('.skills_link').click(function() {
  setTimeout(function() {
    $('.skills').addClass('fadeIn');
  }, 1500);
});

$('.about_link').click(function() {
  setTimeout(function() {
    $('.about').addClass('fadeIn');
  }, 1500);
});

$('.contact_link').click(function() {
  setTimeout(function() {
    $('.contact').addClass('fadeIn');
  }, 1500);
});


var txt1 = "Martin Starkov";
var txt2 = "Currently studying Mechanical Engineering at the University of Edinburgh. \n Interested in rockets, programming and everything in between.";

function slowWriter(id, text, counter, delay) {
  if (counter < text.length) {
    document.getElementById(id).innerHTML += text.charAt(counter);
    counter++;
    setTimeout(function(){ slowWriter(id, text, counter, delay) }, delay);
  }
}

setTimeout(function(){ slowWriter("title-name", txt1, 0, 50) }, 1000);
setTimeout(function(){ slowWriter("description", txt2, 0, 40) }, 1500);
