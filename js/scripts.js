var btn_prev = document.getElementById('prev');
var btn_next = document.getElementById('next');
var images = document.getElementsByClassName('image-slide');
var i = 0;

btn_prev.addEventListener('click', function() {
  images[i].classList.remove("active");
  i--;
  if(i < 0) {
    i = images.length - 1;
  }
  images[i].classList.add('active');
});

btn_next.addEventListener('click', function() {
  images[i].classList.remove("active");
  i++;
  //console.log(i);
  if(i >= images.length) {
    i = 0;
  }
  images[i].classList.add('active');
});


// function myFunction() {
//   var x = document.getElementById('myDIV');
//   if (x.style.display === 'none') {
//     x.style.display = 'block';
//   } else {
//     x.style.display = 'none';
//   }
// }

// var smartgrid = require('smart-grid');
//
// /* It's principal settings in smart grid project */
// var settings = {
//   outputStyle: 'scss', /* less || scss || sass || styl */
//   columns: 12, /* number of grid columns */
//   offset: '36px', /* gutter width px || % */
//   container: {
//     maxWidth: '1600px', /* max-width оn very large screen */
//     fields: '18px' /* side fields */
//   },
//   breakPoints: {
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
//
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
//     fields: '18px' /* side fields */
//   },
//   breakPoints: {
//     xlg: {
//       width: '1920px',
//       fields: '18px'
//     },
//     lg: {
//       width: '1280px',
//       fields: '14px'
//     },
//     md: {
//       width: '992px',
//       fields: '8px'
//     },
//     sm: {
//       width: '768px',
//       fields: '8px'
//     },
//     xs: {
//       width: '480px',
//       fields: '5px'
//
//     },
//     xxs: {
//       width: '320px',
//       fields: '5px'
//
//     }
//   }
// };
// smartgrid('style/modules', settings);
