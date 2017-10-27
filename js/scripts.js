(function(){

    var lastScrollTop = 0;

    $(window).scroll(function(event){

       var st = $(this).scrollTop();

        /*
        *
        *   MENU
        *
        */

       var menu_bottom_line_show = $('.footer').position().top - $(window).height()/4;

       if(st  > menu_bottom_line_show){

            $('#navbartitle').show();

        }else{

            if (st > lastScrollTop){
                // downscroll code
                $('#navbartitle').hide(500);
            } else {
               // upscroll code
               $('#navbartitle').show(300);
            }

        }

        /*
         *  Always hide menu list on scroll
         *
         */

        $('#navbar').hide(500);



        lastScrollTop = st;






    });
    /*
     *
     *  Menu button
     *
     *
     */

    $('#navbartitle').click(function(e){
        $('#navbar').show(500);
        $('#navbartitle').hide(500);
    });

    /**
     *
     *
     *
     * chenge color menu* */
    // $('.navigation').click(function () {
    //   if ($(this).hasClass('changeColorText')) {
    //     $(this).removeClass('changeColorText');
    //   } else {
    //     $('.navigation').removeClass('changeColorText');
    //     $(this).addClass('changeColorText');
    //
    //   }
    // });
})();


$(document).ready(function(){

  function freshDot(){
    this.obj = document.createElement("div");

    this.obj.classList.add("box");

    var container = $('#dotsAnimate');


    // console.log(container.innerHeight);
    // console.log(container.innerHeight*Math.random());


    this.obj.style.top = (container.height() * Math.random()) + 'px';
    this.obj.style.left = (container.width() * Math.random()) + 'px';

    // this.size = Math.floor(0 * Math.random()) + 8;
    // this.size = 8;

    // this.obj.style.height =  this.size + 'px';
    // this.obj.style.width = this.size + 'px';

    // document.body.appendChild(this.obj);  //
    // console.log(this.obj);

    container.append(this.obj);
  }

//   freshDot();
  var dot = [];

  for(var i = 0 ; i < 9 ; i++ ){
    dot.push(new freshDot());
  }


  /*
  $(window).resize(function(){
    for(i=0;i<200;i++){
      document.body.removeChild(dot[i]);
    }
  });
  */
});

$(window, document, undefined).ready(function() {

  $('input').blur(function() {
    var $this = $(this);
    if ($this.val())
      $this.addClass('used');
    else
      $this.removeClass('used');
  });

  var $ripples = $('.ripples');

  $ripples.on('click.Ripples', function(e) {

    var $this = $(this);
    var $offset = $this.parent().offset();
    var $circle = $this.find('.ripplesCircle');

    var x = e.pageX - $offset.left;
    var y = e.pageY - $offset.top;

    $circle.css({
      top: y + 'px',
      left: x + 'px'
    });

    $this.addClass('is-active');

  });

  $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
    $(this).removeClass('is-active');
  });

});

// var smartgrid = require('smart-grid');
//
// /* It's principal settings in smart grid project */
// var settings = {
//   outputStyle: 'scss', /* less || scss || sass || styl */
//   columns: 12, /* number of grid columns */
//   offset: '30px', /* gutter width px || % */
//   container: {
//     maxWidth: '1600px', /* max-width оn very large screen */
//     fields: '18px' /* side fields */
//   },
//   breakPoints: {
//
//     xlg: {
//       width: '1920px',
//       fields: '18px'
//     },
//     lg: {
//       width: '1200px',
//       fields: '13px'
//     },
//     md: {
//       width: '992px',
//       fields: '15px'
//     },
//     sm: {
//       width: '768px',
//       fields: '15px'
//     },
//     xs: {
//       width: '480px',
//       fields: '15px'
//     },
//
//     xxs: {
//       width: '320px',
//       fields: '15px'
//     }
//
//   }
// };

// smartgrid('style/modules', settings);


// var smartgrid = require('smart-grid');
//
// /* It's principal settings in smart grid project */
// var settings = {
//   outputStyle: 'scss', /* less || scss || sass || styl */
//   columns: 12, /* number of grid columns */
//   offset: '30px', /* gutter width px || % */
//   mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
//   container: {
//     maxWidth: '1600px', /* max-width оn very large screen */
//     fields: '30px' /* side fields */
//   },
//   breakPoints: {
//     xxlg: {
//       width: '1920px',
//       offset: '30px'
//     },
//     xlg: {
//       width: '1440px',
//       offset: '30px'
//     },
//     lg: {
//       width: '1280px',
//       offset: '27px'
//     },
//     md: {
//       width: '992px',
//       offset: '27px'
//     },
//     sm: {
//       width: '768px',
//       offset: '16px'
//     },
//     xs: {
//       width: '480px',
//       offset: '10px'
//
//     },
//     xxs: {
//       width: '320px',
//       offset: '10px'
//
//     }
//   }
// };
// smartgrid('style/modules', settings);


// var btn_prev = document.getElementById('prev');
// var btn_next = document.getElementById('next');
// var images = document.getElementsByClassName('image-slide');
// var i = 0;
//
// btn_prev.addEventListener('click', function() {
//   images[i].classList.remove("active");
//   i--;
//   if(i < 0) {
//     i = images.length - 1;
//   }
//   images[i].classList.add('active');
// });
//
// btn_next.addEventListener('click', function() {
//   images[i].classList.remove("active");
//   i++;
//   //console.log(i);
//   if(i >= images.length) {
//     i = 0;
//   }
//   images[i].classList.add('active');
// });


// function myFunction() {
//   var x = document.getElementById('myDIV');
//   if (x.style.display === 'none') {
//     x.style.display = 'block';
//   } else {
//     x.style.display = 'none';
//   }
// }
