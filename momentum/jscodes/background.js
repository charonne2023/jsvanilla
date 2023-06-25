const images = [ "1.jpeg","2.jpeg","3.jpeg"];

const chosenImage = images[Math.floor(Math.random()* images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

bgImage.addEventListener("load", function() {
    document.body.style.backgroundImage = `url(${bgImage.src})`;
    document.body.style.backgroundSize = "auto";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "repeat";
  });
  

//document.body.appendChild(bgImage);
