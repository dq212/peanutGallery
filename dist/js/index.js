var timeline;
// Initialize any variables here
ids = [];

//SET IDs IN DOM TO GLOBAL VARIABLES
var allElements = document.getElementsByTagName('*');
//grabs all elements and makes them variables
for (var q = 0; q < allElements.length; q++) {
  var el = allElements[q];
  if (el.id) {
    window[el.id] = document.getElementById(el.id);
    //separates what we don't want to hide initially
    if (el.id !== 'wrapper' && el.id !== 'click_through' && el.id !== 'bg') {
      ids.push(el);
    }
  }
}

initAnimation = function () {
  // TweenMax can be used to set css
  // It will even take care of browser prefixes
  // TweenMax.set(logo, {x:100, y:50, opacity:0});

  //Setup initial placement of the letters

  var w1 = ['l1t1', 'l1t2', 'l1t3', 'l1t4', 'l1t5', 'l1t6'];

  var arrWord1 = console.log('animation started');

  timeline = new gsap.timeline({
    delay: 0.5,
    onComplete: onAnimationComplete
  });

  timeline.pause();

  timeline.to('#l2t2', 0.5, {
    transformPerspective: 400,
    autoAlpha: 1,
    force3D: true,
    rotationZ: 0.01,
    ease: Power2.easeIn
  });
};

// function traceTime(){
// 	console.log("slideTime: " + timeline.time());
// }

startAnimation = function () {
  // Code for animation
  timeline.play();
  // TweenMax.delayedCall(7.5, loop);
};

onAnimationComplete = function () {
  // Log duration of timeline
  console.log('Animation Duration: ' + timeline.time() + 's');

  // Show a CTA or any animations outside main timeline
  // TweenMax.from( cta, 0.4, { y: '110%' } );
  // TweenMax.to( cta, 0.4, { opacity: 1 } );
};

initAnimation();
startAnimation();