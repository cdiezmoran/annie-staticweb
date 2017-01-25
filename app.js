$(function () { // wait for document ready

  var images = [
    "./img/port1.png",
    "./img/port2.png",
    "./img/port3.png",
    "./img/port4.png",
    "./img/port5.png",
    "./img/port6.png",
    "./img/port7.png",
    "./img/port8.png",
    "./img/port9.png",
    "./img/port10.png",
    "./img/port11.png",
    "./img/port12.png",
    "./img/port13.png",
    "./img/port14.png",
    "./img/port15.png",
    "./img/port18.png",
    "./img/port19.png",
    "./img/port20.png",
    "./img/port21.png",
    "./img/port22.png",
    "./img/port23.png",
    "./img/port24.png",
    "./img/port25.png",
    "./img/land16.jpg",
  ];

  var images2 = [
    "./img/Agosto/land1.jpg",
    "./img/Agosto/port1.png",
    "./img/Agosto/port2.png",
    "./img/Agosto/port3.png",
    "./img/Agosto/port4.png",
    "./img/Agosto/port5.png",
    "./img/Agosto/port6.png",
    "./img/Agosto/port7.png",
    "./img/Agosto/port8.png",
    "./img/Agosto/port9.png",
    "./img/Agosto/port10.png",
    "./img/Agosto/port11.png",
    "./img/Agosto/port12.png",
    "./img/Agosto/land2.jpg",
    "./img/Agosto/land3.jpg",
    "./img/Agosto/land4.jpg",
    "./img/Agosto/land5.jpg",
    "./img/Agosto/land6.jpg",
    "./img/Agosto/land7.jpg",
    "./img/Agosto/land8.jpg",
    "./img/Agosto/land9.jpg",
    "./img/Agosto/land10.jpg",
    "./img/Agosto/land11.jpg",
    "./img/Agosto/land12.jpg",
    "./img/Agosto/land13.jpg",
    "./img/Agosto/land14.jpg",
    "./img/Agosto/land15.jpg",
    "./img/Agosto/land16.jpg",
    "./img/Agosto/land17.jpg",
    "./img/Agosto/land18.jpg",
    "./img/Agosto/land19.jpg",
    "./img/Agosto/land20.jpg",
  ]

  // TweenMax can tween any property of any object. We use this object to cycle through the array
  var obj = {curImg: 0};

  // create tween
  var tween = TweenMax.to(obj, 10,
    {
      curImg: images.length - 1,	// animate propery curImg to number of images
      roundProps: "curImg",				// only integers so it can be used as an array index
      immediateRender: true,			// load first image automatically
      ease: Linear.easeNone,			// show every image the same ammount of time
      onUpdate: function () {
        $("#myimg").attr("src", images[obj.curImg]); // set the image source

        if (images[obj.curImg].includes('port')) {
          $('.fotos').width(350);
          $('.fotos').height(500);
          $('.polaroid-text').css('top', "81.5%");
        }
        else {
          $('.fotos').width(600);
          $('.fotos').height(400);
          $('.polaroid-text').css('top', "74.5%");
        }
      }
    }
  );

  var tween2 = TweenMax.to(obj, 20,
    {
      curImg: images2.length - 1,	// animate propery curImg to number of images
      roundProps: "curImg",				// only integers so it can be used as an array index
      immediateRender: true,			// load first image automatically
      ease: Linear.easeNone,			// show every image the same ammount of time
      onUpdate: function () {
        $("#myimg2").attr("src", images2[obj.curImg]); // set the image source

        if (images2[obj.curImg].includes('port')) {
          $('.fotos2').width(350);
          $('.fotos2').height(500);
          $('.polaroid-text').css('top', "81.5%");
        }
        else {
          $('.fotos2').width(600);
          $('.fotos2').height(400);
          $('.polaroid-text').css('top', "74.5%");
        }
      }
    }
  );

  // init
  var controller = new ScrollMagic.Controller();

  // define movement of panels
  var wipeAnimation = new TimelineMax()
  .fromTo("div.panel.second", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
  .fromTo("div.panel.third",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
  .fromTo("div.panel.fourth", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
  .fromTo("div.panel.fifth", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}); // in from bottom

  // create scene to pin and link animation
  var wipeScene = new ScrollMagic.Scene({
    triggerElement: "#pinContainer",
    triggerHook: "onLeave",
    duration: "300%"
  })
  .setPin("#pinContainer")
  .setTween(wipeAnimation)
  .addTo(controller);

  var scene = new ScrollMagic.Scene({triggerElement: "#pinContainer", offset: 300})
  .setTween(tween)
  .addTo(controller);

  var scene2 = new ScrollMagic.Scene({triggerElement: "#pinContainer", offset: 800})
  .setTween(tween2)
  .addTo(controller);
});
