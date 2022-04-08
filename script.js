$(document).ready(function() { 
 
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
   
    let pulse = window.setInterval(function() {
    const indexNumber = $(".aboutImgs2").children().length;
    let indexArray = [];
    for (i = indexNumber; i >= 1; i--) {
        indexArray.push(i);
    }

    shuffle(indexArray)

    $(".keyboard2").css("z-index", indexArray[0]).fadeIn(4000).fadeOut(3000);
    $(".piano2").css("z-index", indexArray[1]).fadeIn(3000).fadeOut(2000);
    // $(".aboutImg3").css("z-index", indexArray[2]).fadeOut(3000).next(700).fadeIn(2000);
    // $(".aboutImg4").css("z-index", indexArray[3]).fadeOut(4000).next(800).fadeIn(3000);
    }, 200);

});
   
const menuButton = document.querySelector('.menuButton')

let menuOpen = false;
menuButton.addEventListener('click', function() {
    menuButton.classList.toggle('open');
});

  const toolsContainer = document.querySelectorAll('.tools');

  let timeout = false;

document.addEventListener('scroll', function () {
  
  if (timeout) {
    clearTimeout(timeout); 
    timeout = false;
  } else {
    toolsContainer.forEach( toolContainer => {
    toolContainer.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    toolContainer.style.transition = 'ease-in-out  .5s';
      });
    }
  }); 


    



