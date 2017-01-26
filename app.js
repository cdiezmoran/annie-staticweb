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

  var images3 = [
    "./img/Panama/land1.png",
    "./img/Panama/land2.png",
    "./img/Panama/land3.jpg",
    "./img/Panama/land4.jpg",
    "./img/Panama/land5.jpg",
    "./img/Panama/land6.jpg",
    "./img/Panama/land7.jpg",
    "./img/Panama/land8.jpg",
    "./img/Panama/land9.jpg",
    "./img/Panama/land10.jpg",
    "./img/Panama/land11.jpg",
    "./img/Panama/land12.jpg",
    "./img/Panama/land13.jpg",
    "./img/Panama/land14.jpg",
    "./img/Panama/land15.jpg",
    "./img/Panama/land16.jpg",
    "./img/Panama/land17.jpg",
    "./img/Panama/square1.jpg",
    "./img/Panama/square2.jpg",
    "./img/Panama/square3.jpg",
    "./img/Panama/square4.jpg",
    "./img/Panama/square5.jpg",
    "./img/Panama/port0.jpg",
    "./img/Panama/port1.jpg",
    "./img/Panama/port2.jpg",
    "./img/Panama/port3.jpg",
    "./img/Panama/port4.png",
    "./img/Panama/port5.png",
    "./img/Panama/port6.png",
    "./img/Panama/port7.jpg",
    "./img/Panama/port8.jpg",
    "./img/Panama/land18.jpg",
    "./img/Panama/land19.jpg",
    "./img/Panama/land20.jpg",
  ]

  var images4 = [
    "./img/Navidad/land1.jpg",
    "./img/Navidad/land2.jpg",
    "./img/Navidad/land3.jpg",
    "./img/Navidad/land4.jpg",
    "./img/Navidad/land5.jpg",
    "./img/Navidad/land6.jpg",
    "./img/Navidad/land7.jpg",
    "./img/Navidad/land8.jpg",
    "./img/Navidad/land9.jpg",
    "./img/Navidad/port1.jpg",
    "./img/Navidad/port2.jpg",
    "./img/Navidad/port3.jpg",
    "./img/Navidad/land10.jpg",
  ]

  var images5 = [
    "./img/Juntos/port0.jpg",
    "./img/Juntos/square1.jpg",
    "./img/Juntos/land1.jpg",
    "./img/Juntos/square2.jpg",
    "./img/Juntos/port1.png",
    "./img/Juntos/port2.jpg",
    "./img/Juntos/port3.jpg",
    "./img/Juntos/port4.jpg",
    "./img/Juntos/port5.jpg",
    "./img/Juntos/port6.png",
    "./img/Juntos/port7.jpg",
    "./img/Juntos/port8.jpg",
    "./img/Juntos/port9.jpg",
    "./img/Juntos/port10.png",
    "./img/Juntos/land2.png",
    "./img/Juntos/land3.png",
    "./img/Juntos/land4.png",
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

  var tween3 = TweenMax.to(obj, 20,
    {
      curImg: images3.length - 1,	// animate propery curImg to number of images
      roundProps: "curImg",				// only integers so it can be used as an array index
      immediateRender: true,			// load first image automatically
      ease: Linear.easeNone,			// show every image the same ammount of time
      onUpdate: function () {
        $("#myimg3").attr("src", images3[obj.curImg]); // set the image source

        if (images3[obj.curImg].includes('port')) {
          $('.fotos3').width(350);
          $('.fotos3').height(500);
          $('.polaroid-text').css('top', "81.5%");
        }
        else if (images3[obj.curImg].includes('square')) {
          $('.fotos3').width(500);
          $('.fotos3').height(500);
          $('.polaroid-text').css('top', "81.5%");
        }
        else {
          $('.fotos3').width(600);
          $('.fotos3').height(400);
          $('.polaroid-text').css('top', "74.5%");
        }
      }
    }
  );

  var tween4 = TweenMax.to(obj, 10,
    {
      curImg: images4.length - 1,	// animate propery curImg to number of images
      roundProps: "curImg",				// only integers so it can be used as an array index
      immediateRender: true,			// load first image automatically
      ease: Linear.easeNone,			// show every image the same ammount of time
      onUpdate: function () {
        $("#myimg4").attr("src", images4[obj.curImg]); // set the image source

        if (images4[obj.curImg].includes('port')) {
          $('.fotos4').width(350);
          $('.fotos4').height(500);
          $('.polaroid-text').css('top', "81.5%");
        }
        else {
          $('.fotos4').width(600);
          $('.fotos4').height(400);
          $('.polaroid-text').css('top', "74.5%");
        }
      }
    }
  );

  var tween5 = TweenMax.to(obj, 10,
    {
      curImg: images5.length - 1,	// animate propery curImg to number of images
      roundProps: "curImg",				// only integers so it can be used as an array index
      immediateRender: true,			// load first image automatically
      ease: Linear.easeNone,			// show every image the same ammount of time
      onUpdate: function () {
        $("#myimg5").attr("src", images5[obj.curImg]); // set the image source

        if (images5[obj.curImg].includes('port')) {
          $('.fotos5').width(350);
          $('.fotos5').height(500);
          $('.polaroid-text').css('top', "81.5%");
        }
        else if (images5[obj.curImg].includes('square')) {
          $('.fotos5').width(500);
          $('.fotos5').height(500);
          $('.polaroid-text').css('top', "81.5%");
        }
        else {
          $('.fotos5').width(600);
          $('.fotos5').height(400);
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

  var scene3 = new ScrollMagic.Scene({triggerElement: "#pinContainer", offset: 1350})
  .setTween(tween3)
  .addTo(controller);

  var scene4 = new ScrollMagic.Scene({triggerElement: "#pinContainer", offset: 1900})
  .setTween(tween4)
  .addTo(controller);

  var scene5 = new ScrollMagic.Scene({triggerElement: "#pinContainer", offset: 2425})
  .setTween(tween5)
  .addTo(controller);
});
