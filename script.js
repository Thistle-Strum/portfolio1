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
      // 
    let indexArray = [];
    for (i = indexNumber; i >= 1; i--) {
        indexArray.push(i);
    }

    shuffle(indexArray)

    $(".keyboard2").css("z-index", indexArray[0]).fadeIn(3000).fadeOut(2000);
    $(".piano2").css("z-index", indexArray[1]).fadeIn(4000).fadeOut(3000);
    // $(".aboutImg3").css("z-index", indexArray[2]).fadeOut(3000).next(700).fadeIn(2000);
    // $(".aboutImg4").css("z-index", indexArray[3]).fadeOut(4000).next(800).fadeIn(3000);
    // $(".aboutImg5").css("z-index", indexArray[4]).fadeOut(1000).next(900).fadeIn(4000);
    // $(".aboutImg6").css("z-index", indexArray[5]).fadeOut(4000).next(1000).fadeIn(1000);
    
    }, 200);

});
   
    

const menuButton = document.querySelector('.menuButton')

let menuOpen = false;
menuButton.addEventListener('click', function() {
    menuButton.classList.toggle('open');
});


// returns class name as a string
// toolsContainer = document.getElementsByClassName('tools')[0]
//                 .className.split(' ')[1]
// console.log(toolsContainer)

// toolsArray.map( item => {
  //     if(element[0].className === item.replace(/^./, '')) {
  //       let nextSibling = `.${element[0].nextElementSibling.className}`

  // let toolsContainer = document.getElementsByClassName('.frontEnd .progLangs .libraries .databases .workflow');

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
    
    // timeout = setTimeout( function () {
    //   toolContainer.style.backgroundColor = 'white';
    //   }, 20000); 
  
      });
    }
  }); 


      


      // const toolsArray = ['.webDevelopment', '.programmingLanguages', '.frameworks', '.databasesAndApis', '.workFlow']
 
// document.onmouseover = function(event) {
//   let element = document.getElementsByClassName(event.target.className)

  // console.log(element[0].className === toolsObject[0].replace(/^./, ''))

//   toolsArray.map( item => {
//     if(element[0].className === item.replace(/^./, '')) {
//       let nextSibling = `.${element[0].nextElementSibling.className}`
//       document.querySelector(nextSibling).style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
//       document.querySelector(nextSibling).style.transition = 'ease-in-out  .5s';

//       setTimeout(function() {
//         document.querySelector(nextSibling).style.backgroundColor = 'white';
//         }, 5000);
//       }
//     });
// }


// toolsObject.addEventListener('mouseover', function() {
//   document.querySelector('.frontEnd').style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
// })



