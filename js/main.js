//REVIEW FUNCTION


//VARIABLES FROM FORM
const reviewName = document.getElementById('reviewName');
const reviewText = document.getElementById('reviewText');
const submitReview = document.getElementById('submitReview');


//VARIABLES TO CREATE FORM
const inputHtml =   `<div class="review-textarea"><h5 id="name"></h5><p id="text"></p></div`;
const newReview = document.getElementById('newReview');

submitReview.addEventListener('click', function(){
  newReview.insertAdjacentHTML("beforebegin", inputHtml)
  document.getElementById('name').innerHTML = reviewName.value;
  document.getElementById('text').innerHTML = reviewText.value;

});



// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: 40.2330185, lng: -111.6644888};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 18, center: uluru});

  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
