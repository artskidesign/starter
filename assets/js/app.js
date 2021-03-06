'use strict';
//JQuery Module Pattern

// An object literal
var app = {
  init: function() {
    app.heroAnim();
    app.heroHover();
  },

  functionOne: function () {
    console.log('function init one');
  },

  heroAnim: function () {

    $(function(){
      $("p.artski-logo__wrap--title").velocity(
        { translateY: [0, 20], opacity: [1, 0] }, 
        { easing: [500, 20] } );
    });
    
  },

  heroHover: function () {

    var shape = $('.artski-logo__shape'),
        title = $("p.artski-logo__wrap--title"),
        desc = $("p.artski-logo__wrap--desc"),
        subdesc = $("p.artski-logo__wrap--sub-desc");

    $(function(){
      shape.velocity(
        { translateX: [-20, 20] }, 
        { duration: 1400, loop: true }, 
        {easing: [200, 20] } ).stop();
    });

    $('.artski-logo').hover(

      function() {
        title.velocity(
          { translateY: [0, 20], opacity: [1, 0] }, 
          { easing: [500, 20], duration: 500, } ).stop();
        title.text("HIT ME!").stop();

        desc.velocity(
          { translateY: [0, 12], opacity: [1, 0] }, 
          { easing: [600, 30], duration: 500, delay: 80 } ).stop();
        subdesc.velocity(
          { translateY: [0, 12], opacity: [1, 0] }, 
          { easing: [400, 30], duration: 350, delay: 100 } ).stop(); 

      },

      function(){
        title.velocity(
          { translateY: [0, -20], opacity: [1, 0] }, 
          { easing: [0, 20] } );
        title.text("STARTER").stop();
        desc.velocity(
          { translateY: [0, 12], opacity: [1, 0] }, 
          { easing: [600, 30], duration: 500, delay: 80 } ).stop();
        subdesc.velocity(
          { translateY: [0, 12], opacity: [1, 0] }, 
          { easing: [400, 30], duration: 350, delay: 100 } ).stop(); 
      }

    );

  }
  
};

jQuery("document").ready(function () {
  app.init();
});



// Velocity VMD
// (function(d) { var vmd=d.createElement("script"); vmd.src="https://julian.com/research/velocity/vmd.min.js"; d.body.appendChild(vmd); })(document);