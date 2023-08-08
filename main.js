let imageContainer = document.querySelector("img");
let caption = document.querySelector("p");
let newPhotoButton = document.querySelector("button");


// Get a random number >= 0 and less than n
function randInt(upperLimit) {
    return Math.floor(Math.random() * upperLimit);
}