/*
  ////////////////////////////////
              slider
  ///////////////////////////////
 */
$(window).load(function() {
    $('.flexslider').flexslider({
        touch: true,
        pauseOnAction: false,
        pauseOnHover: false,
        animation: 'slide',
    });
});


/*
  ////////////////////////////////
              menu
  ///////////////////////////////
 */
function openNav() {
    document.getElementById("menu-resposivo").style.width = "300px";
    document.getElementById("header").style.marginRight = "300px";
}

function closeNav() {
    document.getElementById("menu-resposivo").style.width = "0";
    document.getElementById("header").style.marginRight= "0";
}


/*
  ////////////////////////////////
              scroll
  ///////////////////////////////
 */
// $(window).on('scroll', function(event) {
//   if ($(window).scrollTop()) {
//     $('.menu-geral').addClass('activo');
//   } else {
//     $('.menu-geral').removeClass('activo');
//   }
// });


/*
  ////////////////////////////////
              su-menu
  ///////////////////////////////
 */
// $(document).ready(function() {
//       $(".btn-open-menu").click(function() {
//         $(".ul-menu").toggleClass('ul-on');
//       });
//      $(".dropup").click(function() {
//        $(this).toggleClass('active');
//      });
// });


/*
///////////////////////////////////
              button top
//////////////////////////////////
*/            
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("myBtn").style.display = "block";
//     } else {
//         document.getElementById("myBtn").style.display = "none";
//     }
// }

// function topFunction() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }


/*
  ////////////////////////////////
     botoes de fotos de trabalhos feitos
  ///////////////////////////////
 */
filterSelection("1-categoria") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("li-geral");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}

// // Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = document.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }