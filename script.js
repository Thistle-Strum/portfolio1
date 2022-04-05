$(document).ready(function() { 
 
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
   
    let pulse = window.setInterval(function() {
    const indexNumber = $(".aboutImgs").children().length;
 
    let indexArray = [];
    for (i = indexNumber; i >= 1; i--) {
        indexArray.push(i);
    }

    shuffle(indexArray)

    $(".aboutImg1").css("z-index", indexArray[0]).fadeOut(1000).next(1000).fadeIn(2000);
    $(".aboutImg2").css("z-index", indexArray[1]).fadeOut(4000).next(1000).fadeIn(1000);
    $(".aboutImg3").css("z-index", indexArray[2]).fadeOut(3000).next(700).fadeIn(2000);
    $(".aboutImg4").css("z-index", indexArray[3]).fadeOut(4000).next(800).fadeIn(3000);
    $(".aboutImg5").css("z-index", indexArray[4]).fadeOut(1000).next(900).fadeIn(4000);
    $(".aboutImg6").css("z-index", indexArray[5]).fadeOut(4000).next(1000).fadeIn(1000);
    
    }, 5000);

});
   
    

const menuButton = document.querySelector('.menuButton')
let menuOpen = false;
menuButton.addEventListener('click', function() {
    menuButton.classList.toggle('open');
    console.log("jello")
});

