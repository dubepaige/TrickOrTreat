const candy_options = 5;

var images = [
    "images/3musketeers.pdf",
    "images/bag.pdf",
    "images/kitkat.pdf",
    "images/reeses.jpg",
    "images/skittles.webp"
  ];
  
  function candyGenerator() {
    var randomNum = Math.floor(Math.random() * candy_options);
     document.getElementById("myPicture").src = images[randomNum];
  }

  
