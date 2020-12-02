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
    if (el.id !== 'container' && el.id !== 'bg') {
      gsap.set(el, { autoAlpha: 0 });
      ids.push(el);
    }
  }
}

initAnimation = function () {
  // TweenMax can be used to set css
  // It will even take care of browser prefixes
  // TweenMax.set(logo, {x:100, y:50, opacity:0});

  //Setup initial placement of the letters

  var w1 = ['#l1t1', '#l1t2', '#l1t3', '#l1t4', '#l1t5', '#l1t6'];
  var w2 = ['#l2t1', '#l2t2', '#l2t3', '#l2t4', '#l2t5', '#l2t6', '#l2t7'];
  var w3 = ['#l3t1', '#l3t3', '#l3t4', '#l3t5'];

  var minTime = 0.6;
  var maxTime = 0.7;
  var secondMin = 0.2;
  var secondMax = 0.3;

  var all = [
    '#l1t1',
    '#l1t2',
    '#l1t3',
    '#l1t4',
    '#l1t5',
    '#l1t6',
    '#l2t1',
    '#l2t2',
    '#l2t3',
    '#l2t4',
    '#l2t5',
    '#l2t6',
    '#l2t7',
    '#l3t1',
    '#l3t2',
    '#l3t3',
    '#l3t4',
    '#l3t5',
  ];

  //transform-origin: 30% 65%; transform: translate(88.456px, -92.0032px) rotate(89.8678deg); opacity: 1; visibility: inherit;

  setDropFrame = function () {
    var t = new gsap.timeline({});

    gsap.set('#l1t1', {
      transformOrigin: '15% 60%',
      scale: 5,
      x: 180,
      y: -70,
      rotation: -35,
      rotationX: -80,
      rotationY: 30,
    });
    //
    gsap.set('#l1t2', {
      transformOrigin: '20% 65%',
      scale: 5,
      x: 80,
      y: -70,
      rotation: 35,
      rotationX: -40,
      rotationY: -30,
    });
    //
    //
    gsap.set('#l1t3', {
      transformOrigin: '20% 65%',
      scale: 5,
      x: 80,
      y: -70,
      rotation: 35,
      rotationX: 40,
      rotationY: -30,
    });
    //
    //
    gsap.set('#l1t4', {
      transformOrigin: '30% 65%',
      scale: 5,
      x: 80,
      y: -70,
      rotation: 35,
      rotationX: 10,
      rotationY: -120,
    });
    //
    //
    gsap.set('#l1t5', {
      transformOrigin: '35% 65%',
      scale: 5,
      x: 80,
      y: -70,
      rotation: 35,
      rotationX: 55,
      rotationY: -120,
    });
    //
    //
    gsap.set('#l1t6', {
      transformOrigin: '40% 60%',
      scale: 5,
      x: 80,
      y: -70,
      rotation: 35,
      rotationX: 35,
      rotationY: -90,
    });

    //
    //Group 2
    gsap.set('#l2t1', {
      transformOrigin: '15% 60%',
      scale: 5,
      x: 280,
      y: -90,
      rotation: -35,
      rotationX: -80,
      rotationY: 30,
    });
    gsap.set('#l2t2', {
      transformOrigin: '20% 60%',
      scale: 5,
      x: 100,
      y: -90,
      rotation: -35,
      rotationX: -40,
      rotationY: 30,
    });
    gsap.set('#l2t3', {
      transformOrigin: '25% 60%',
      scale: 5,
      x: 80,
      y: -70,
      rotation: -35,
      rotationX: -80,
      rotationY: 30,
    });
    gsap.set('#l2t4', {
      transformOrigin: '30% 60%',
      scale: 5,
      x: 0,
      y: -30,
      rotation: -35,
      rotationX: -50,
      rotationY: 10,
    });
    gsap.set('#l2t5', {
      transformOrigin: '35% 60%',
      scale: 5,
      x: 180,
      y: -70,
      rotation: -35,
      rotationX: -80,
      rotationY: 30,
    });
    gsap.set('#l2t6', {
      transformOrigin: '40% 60%',
      scale: 2,
      x: 10,
      y: -200,
      rotation: 35,
      rotationX: 0,
      rotationY: 30,
    });
    gsap.set('#l2t7', {
      transformOrigin: '45% 60%',
      scale: 3,
      x: 10,
      y: -50,
      rotation: -35,
      rotationX: 40,
      rotationY: 30,
    });
    //Group 3
    gsap.set('#l3t1', {
      transformOrigin: '15% 60%',
      scale: 4,
      x: 260,
      y: -150,
      rotation: -35,
      rotationX: -80,
      rotationY: 20,
    });
    gsap.set('#l3t2', {
      transformOrigin: '20% 60%',
      scale: 3,
      x: 100,
      y: -190,
      rotation: -15,
      rotationX: -20,
      rotationY: 30,
    });
    gsap.set('#l3t3', {
      transformOrigin: '20% 60%',
      scale: 3,
      x: -50,
      y: -90,
      rotation: -35,
      rotationX: -20,
      rotationY: 30,
    });
    gsap.set('#l3t4', {
      transformOrigin: '25% 60%',
      scale: 4,
      x: 80,
      y: -70,
      rotation: -35,
      rotationX: -80,
      rotationY: 30,
    });
    gsap.set('#l3t5', {
      transformOrigin: '30% 60%',
      scale: 3,
      x: 100,
      y: 0,
      rotation: -35,
      rotationX: -80,
      rotationY: 30,
    });
  };

  setDropFrame();

  drop = function () {
    //Group 1
    var t = new gsap.timeline({ delay: 0 });
    t.addLabel('startIt', 0.0);
    t.addLabel('dropIt', 0.25);
    t.addLabel('bounceIt', 0.75);
    // gsap.set(
    //   all,
    //   {
    //     duration: 0.3,
    //     stagger: {
    //       each: 0.1,
    //       from: 'center',
    //     },
    //     autoAlpha: 1,
    //   },
    //   'startIt'
    // );
    for (i = 0; i < all.length; i++) {
      gsap.to(all[i], 0.6, { autoAlpha: 1 }, 'dropIt');
    }
    t.to(
      '#l1t1',
      {
        duration: getRandom(minTime, maxTime),
        transformOrigin: '15% 60%',
        scale: 1,
        x: 180,
        y: -70,
        rotation: 25,
        rotationX: 0,
        rotationY: 0,
        ease: 'slow(0., 0.4, false)',
      },
      'dropIt'
    )
      .to(
        '#l1t1',
        {
          duration: getRandom(secondMin, secondMax),

          transformOrigin: '15% 60%',
          scale: 1,
          x: 40,
          y: -77,
          rotation: -37,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'bounceIt'
      )

      .to(
        '#l1t2',
        {
          duration: getRandom(minTime, maxTime),

          transformOrigin: '20% 65%',
          scale: 1,
          x: 80,
          y: -40,
          rotation: -10,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'dropIt'
      )

      .to(
        '#l1t2',
        {
          duration: getRandom(secondMin, secondMax),
          transformOrigin: '20% 65%',
          scale: 1,
          x: 0.3679744412566208,
          y: 26.3923206144176,
          rotation: 26.3923206144176,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'bounceIt'
      )
      //
      .to(
        '#l1t3',
        {
          duration: getRandom(minTime, maxTime),
          transformOrigin: '25% 65%',
          scale: 1,
          x: 80,
          y: -70,
          rotation: 35,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'dropIt'
      )

      .to(
        '#l1t3',
        {
          duration: getRandom(minTime, maxTime),

          transformOrigin: '25% 65%',
          scale: 1,
          x: 120,
          y: 40,
          rotation: 3,
          rotationX: 0,
          rotationY: 0,
        },
        'bounceIt'
      )
      // //
      .to(
        '#l1t4',
        {
          duration: getRandom(minTime, maxTime),

          transformOrigin: '30% 65%',
          scale: 1,
          x: 80,
          y: -70,
          rotation: -20,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'dropIt'
      )
      .to(
        '#l1t4',
        {
          duration: getRandom(secondMin, secondMax),

          transformOrigin: '30% 65%',
          scale: 1,
          x: 147,
          y: -170,
          rotation: -19,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'bounceIt'
      )
      // //
      .to(
        '#l1t5',
        {
          duration: getRandom(minTime, maxTime),

          transformOrigin: '35% 65%',
          scale: 1,
          x: 80,
          y: -70,
          rotation: -20,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'dropIt'
      )

      .to(
        '#l1t5',
        {
          duration: getRandom(secondMin, secondMax),

          transformOrigin: '35% 65%',
          scale: 1,
          x: 29,
          y: -12,
          rotation: 62,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'bounceIt'
      )
      // //
      .to(
        '#l1t6',
        {
          duration: getRandom(minTime, maxTime),

          transformOrigin: '40% 60%',
          scale: 1,
          x: 80,
          y: -70,
          rotation: 20,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'dropIt'
      )
      .to(
        '#l1t6',
        {
          duration: getRandom(secondMin, secondMax),

          transformOrigin: '40% 60%',
          scale: 1,
          x: 200,
          y: -12,
          rotation: 62,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'bounceIt'
      )
      // /////////////////////////////////

      // //Group 2

      .to(
        '#l2t1',
        {
          duration: getRandom(minTime, maxTime),

          transformOrigin: '15% 60%',
          scale: 1,
          x: 180,
          y: -70,
          rotation: 20,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'dropIt'
      )
      .to(
        '#l2t1',
        {
          duration: getRandom(secondMin, secondMax),

          transformOrigin: '15% 60%',
          scale: 1,
          x: 188,
          y: -109,
          rotation: 43,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'bounceIt'
      )
      //
      .to(
        '#l2t2',
        {
          duration: getRandom(minTime, maxTime),

          transformOrigin: '20% 60%',
          scale: 1,
          x: 180,
          y: -70,
          rotation: 5,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'dropIt'
      )
      .to(
        '#l2t2',
        {
          duration: getRandom(secondMin, secondMax),

          transformOrigin: '15% 60%',
          scale: 1,
          x: 159,
          y: -134,
          rotation: -44,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'bounceIt'
      )
      .to(
        '#l2t3',
        {
          duration: getRandom(minTime, maxTime),

          transformOrigin: '25% 60%',
          scale: 1,
          x: 100,
          y: -70,
          rotation: -25,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'dropIt'
      )
      .to(
        '#l2t3',
        {
          duration: getRandom(secondMin, secondMax),

          transformOrigin: '15% 60%',
          scale: 1,
          x: 109,
          y: -72,
          rotation: 79,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'bounceIt'
      )
      .to(
        '#l2t4',
        {
          duration: getRandom(minTime, maxTime),

          transformOrigin: '30% 60%',
          scale: 1,
          x: 100,
          y: -80,
          rotation: 5,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'dropIt'
      )
      .to(
        '#l2t4',
        {
          duration: getRandom(secondMin, secondMax),

          transformOrigin: '15% 60%',
          scale: 1,
          x: 104,
          y: 26,
          rotation: 32,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'bounceIt'
      )
      .to(
        '#l2t5',
        {
          duration: getRandom(minTime, maxTime),

          transformOrigin: '35% 60%',
          scale: 1,
          x: 100,
          y: -0,
          rotation: -55,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'dropIt'
      )
      .to(
        '#l2t5',
        {
          duration: getRandom(secondMin, secondMax),

          transformOrigin: '15% 60%',
          scale: 1,
          x: -70,
          y: -34,
          rotation: -17,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'bounceIt'
      )
      .to(
        '#l2t6',
        {
          duration: getRandom(minTime, maxTime),

          transformOrigin: '40% 60%',
          scale: 1,
          x: 80,
          y: 20,
          rotation: -85,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'dropIt'
      )
      .to(
        '#l2t6',
        {
          duration: getRandom(secondMin, secondMax),

          transformOrigin: '15% 60%',
          scale: 1,
          x: 168,
          y: -12,
          rotation: -2,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'bounceIt'
      )
      .to(
        '#l2t7',
        {
          duration: getRandom(minTime, maxTime),

          transformOrigin: '45% 60%',
          scale: 1,
          x: 80,
          y: -120,
          rotation: 35,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'dropIt'
      )
      .to(
        '#l2t7',
        {
          duration: getRandom(secondMin, secondMax),

          transformOrigin: '15% 60%',
          scale: 1,
          x: 150,
          y: 0,
          rotation: 41,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'bounceIt'
      )
      // //
      // //Group 3
      .to(
        '#l3t1',
        {
          duration: getRandom(minTime, maxTime),

          transformOrigin: '15% 60%',
          scale: 1,
          x: 180,
          y: -170,
          rotation: 5,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'dropIt'
      )
      .to(
        '#l3t1',
        {
          duration: getRandom(secondMin, secondMax),

          transformOrigin: '15% 60%',
          scale: 1,
          x: 319,
          y: -156,
          rotation: 4,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'bounceIt'
      )
      .to(
        '#l3t2',
        {
          duration: getRandom(minTime, maxTime),

          transformOrigin: '15% 60%',
          scale: 1,
          x: 180,
          y: -70,
          rotation: 25,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'dropIt'
      )
      .to(
        '#l3t2',
        {
          duration: getRandom(secondMin, secondMax),

          transformOrigin: '15% 60%',
          scale: 1,
          x: 80,
          y: -123,
          rotation: 86,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'bounceIt'
      )
      .to(
        '#l3t3',
        {
          duration: getRandom(minTime, maxTime),

          transformOrigin: '15% 60%',
          scale: 1,
          x: 100,
          y: -70,
          rotation: 5,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'dropIt'
      )
      .to(
        '#l3t3',
        {
          duration: getRandom(secondMin, secondMax),

          transformOrigin: '15% 60%',
          scale: 1,
          x: 113,
          y: -38,
          rotation: 39,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'bounceIt'
      )
      .to(
        '#l3t4',
        {
          duration: getRandom(minTime, maxTime),

          transformOrigin: '15% 60%',
          scale: 1,
          x: 60,
          y: -100,
          rotation: 10,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'dropIt'
      )
      .to(
        '#l3t4',
        {
          duration: getRandom(secondMin, secondMax),

          transformOrigin: '15% 60%',
          scale: 1,
          x: 78,
          y: -112,
          rotation: -76,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'bounceIt'
      )
      .to(
        '#l3t5',
        {
          duration: getRandom(minTime, maxTime),

          transformOrigin: '15% 60%',
          scale: 1,
          x: 80,
          y: -90,
          rotation: 5,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'dropIt'
      )
      .to(
        '#l3t5',
        {
          duration: getRandom(secondMin, secondMax),

          transformOrigin: '15% 60%',
          scale: 1,
          x: 260,
          y: -133,
          rotation: 75,
          rotationX: 0,
          rotationY: 0,
          ease: 'slow(0., 0.4, false)',
        },
        'bounceIt'
      );
  };

  drop();

  // setStartFrame = function () {
  //   var t = new gsap.timeline({});
  //   for (var i = 0; i < all.length; i++) {
  //     gsap.fromTo(
  //       all[i],
  //       getRandom(0.1, 0.4),
  //       {
  //         x: 200,
  //         y: -30,
  //         scale: getRandom(1.8, 4),
  //         transformOrigin: '30% 65%',
  //         rotation: getRandom(-100, 90),
  //         rotationY: getRandom(-4, 10),
  //         rotationX: getRandom(-4, 10),
  //       },
  //       {
  //         autoAlpha: 1,
  //         x: getRandom(80, 90),
  //         y: getRandom(-90, -95),
  //         rotation: getRandom(-100, 90),
  //         rotationY: 0,
  //         rotationX: 0,
  //         scale: 1,
  //         stagger: {
  //           each: getRandom(0.1, 0.9),
  //           from: 'center',
  //         },
  //         ease: 'slow(0.3, 0.3, false)',
  //       }
  //     );
  //   }
  // };

  // setStartFrame();

  // '#l3t2',

  /**
   * Returns a random number between min (inclusive) and max (exclusive)
   */
  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  var w1Props = [];
  var w2Props = [];
  var w3Props = [];

  // for (var i = 0; i < 6; i++) {
  //   w1Props.push({
  //     name: 'l1' + 't' + (i + 1),
  //     ox: getRandom(-20, 205),
  //     oy: getRandom(-200, 50),
  //     or: getRandom(-90, 90),
  //   });

  // gsap.set('#' + w1Props[i].name, {
  //   x: w1Props[i].ox,
  //   y: w1Props[i].oy,
  //   rotation: w1Props[i].or,
  // });

  // 0: {name: "l1t1", ox: 40.0717105161721, oy: -77.10111054876688, or: -37.412106863928116}
  // 1: {name: "l1t2", ox: 0.3679744412566208, oy: 26.3923206144176, or: -25.65767519713019}
  // 2: {name: "l1t3", ox: 120.44062868289109, oy: 40.78846569738744, or: 84.3568386482809}
  // 3: {name: "l1t4", ox: 97.09662274129002, oy: -170.37832664926134, or: -19.6213460415063}
  // 4: {name: "l1t5", ox: 29.629161740391822, oy: -12.586906886951795, or: 62.93433024641655}
  // 5: {name: "l1t6", ox: 34.3800271286683, oy: -12.500585379299537, or: -38.548712400481705}

  //Group 1

  setGroups = function () {
    gsap.to('#l1t1', {
      duration: getRandom(0.1, 0.3),
      x: 40,
      y: -77,
      rotation: -37,
    });
    gsap.to('#l1t2', {
      x: 0.3679744412566208,
      y: 26.3923206144176,
      rotation: 26.3923206144176,
    });
    gsap.to('#l1t3', {
      duration: getRandom(0.1, 0.3),
      x: 120,
      y: 40,
      rotation: 84,
    });
    gsap.to('#l1t4', {
      duration: getRandom(0.1, 0.3),
      x: 97,
      y: -170,
      rotation: -19,
    });
    gsap.to('#l1t5', {
      duration: getRandom(0.1, 0.3),
      x: 29,
      y: -12,
      rotation: 62,
    });
    gsap.to('#l1t6', {
      duration: getRandom(0.1, 0.3),
      x: 200,
      y: -12,
      rotation: 62,
    });
    //Group 2
    gsap.to('#l2t1', {
      duration: getRandom(0.1, 0.3),
      x: 188,
      y: -109,
      rotation: 43,
    });
    gsap.to('#l2t2', {
      duration: getRandom(0.1, 0.3),
      x: 159,
      y: -134,
      rotation: -44,
    });
    gsap.to('#l2t3', {
      duration: getRandom(0.1, 0.3),
      x: 109,
      y: -72,
      rotation: 79,
    });
    gsap.to('#l2t4', {
      duration: getRandom(0.1, 0.3),
      x: 104,
      y: 26,
      rotation: 32,
    });
    gsap.to('#l2t5', {
      duration: getRandom(0.1, 0.3),
      x: -3,
      y: -34,
      rotation: -17,
    });
    gsap.to('#l2t6', {
      duration: getRandom(0.1, 0.3),
      x: 168,
      y: -12,
      rotation: -2,
    });
    gsap.to('#l2t7', {
      duration: getRandom(0.1, 0.3),
      x: 150,
      y: 44,
      rotation: 41,
    });

    // 0: {name: "l2t1", ox: 188.57774903573082, oy: -109.3767413066901, or: 43.58079060589304}
    // 1: {name: "l2t2", ox: 159.05145733453824, oy: -134.47517727553165, or: -44.08026433177424}
    // 2: {name: "l2t3", ox: 109.91479371814037, oy: -72.08821433633071, or: 79.18217643549872}
    // 3: {name: "l2t4", ox: 104.74712724587144, oy: 26.556617131865266, or: 32.15895180692995}
    // 4: {name: "l2t5", ox: -3.357527501603279, oy: -34.89119747453216, or: -17.18963682706027}
    // 5: {name: "l2t6", ox: 168.89966863231152, oy: -12.426434660938838, or: -2.689688788578408}
    // 6: {name: "l2t7", ox: 73.43077701062376, oy: -5.133616328873927, or: 18.12660891604483}
    // 7: {name: "l2t8", ox: 150.7774981399349, oy: 44.808931037432615, or: 41.10110900613998}

    //Group 3
    gsap.to('#l3t1', {
      duration: getRandom(0.1, 0.3),
      x: 189,
      y: -156,
      rotation: 4,
    });
    gsap.to('#l3t2', {
      duration: getRandom(0.1, 0.3),
      x: -1,
      y: -123,
      rotation: 86,
    });
    gsap.to('#l3t3', {
      duration: getRandom(0.1, 0.3),
      x: 113,
      y: -38,
      rotation: 39,
    });
    gsap.to('#l3t4', {
      duration: getRandom(0.1, 0.3),
      x: 78,
      y: -112,
      rotation: -76,
    });
    gsap.to('#l3t5', {
      duration: getRandom(0.1, 0.3),
      x: 10,
      y: -133,
      rotation: 75,
    });
  };

  // 0: {name: "l3t1", ox: 189.15535761226175, oy: -156.46189444650952, or: 4.854827351539342}
  // 1: {name: "l3t2", ox: -1.135941162113241, oy: -123.93782804233821, or: 86.03255208960647}
  // 2: {name: "l3t3", ox: 113.90210975715641, oy: -38.33214694621887, or: 39.0547166293002}
  // 3: {name: "l3t4", ox: 78.55581360562448, oy: -112.75911221530149, or: -76.53930627325099}
  // 4: {name: "l3t5", ox: 10.410023733103351, oy: -133.26862391208044, or: 75.20705016545705}

  // for (var j = 0; j < 8; j++) {
  //   w2Props.push({
  //     name: 'l2' + 't' + (j + 1),
  //     ox: getRandom(-20, 205),
  //     oy: getRandom(-200, 50),
  //     or: getRandom(-90, 90),
  //   });

  //   gsap.set('#' + w2Props[j].name, {
  //     x: w2Props[j].ox,
  //     y: w2Props[j].oy,
  //     rotation: w2Props[j].or,
  //   });
  // }

  // for (var k = 0; k < 5; k++) {
  //   w3Props.push({
  //     name: 'l3' + 't' + (k + 1),
  //     ox: getRandom(-50, 205),
  //     oy: getRandom(-200, 50),
  //     or: getRandom(-90, 90),
  //   });

  //   gsap.set('#' + w3Props[k].name, {
  //     x: w3Props[k].ox,
  //     y: w3Props[k].oy,
  //     rotation: w3Props[k].or,
  //   });
  // }

  // length: 5

  console.log(w1Props);

  console.log(w2Props);

  console.log(w3Props);

  console.log('animation started');

  mainAnimation = function () {
    timeline = new gsap.timeline({
      delay: 0.5,
      onComplete: onAnimationComplete,
    });

    //timeline.pause();

    timeline
      .to(
        w1,
        {
          duration: getRandom(0.1, 0.3),
          x: 0,
          y: 0,
          rotation: 0,
          transformPerspective: 400,
          autoAlpha: 1,
          force3D: true,
          // rotationZ: 0.01,
          ease: Power2.easeOut,
          onComplete: rotateHome,
          stagger: {
            each: getRandom(0.05, 0.2),
            from: 'random',
          },
        },
        '+=0.1'
      )
      .to(
        w2,
        {
          duration: getRandom(0.1, 0.3),
          x: 0,
          y: 0,
          rotation: 0,
          transformPerspective: 400,
          autoAlpha: 1,
          force3D: true,
          // rotationZ: 0.01,
          ease: Power2.easeOut,
          onComplete: rotateHome,
          stagger: {
            each: getRandom(0.05, 0.2),
            from: 'random',
          },
        },
        '-=' + getRandom(0.05, 0.1)
      )
      .to(
        w3,
        {
          duration: getRandom(0.1, 0.3),
          x: 0,
          y: 0,
          rotation: 0,
          transformPerspective: 400,
          autoAlpha: 1,
          force3D: true,
          onComplete: rotateHome,
          onCompleteParans: [this],
          // rotationZ: 0.01,
          ease: Power2.easeOut,
          stagger: {
            each: getRandom(0.05, 0.2),
            from: 'random',
          },
        },
        '-=0' + getRandom(0.3, 1.2)
      )

      .to('#l3t2', { duration: 0.1, x: 2, y: 5, rotation: -4 }, '-=0.2')
      .to('#l3t2', { duration: 0.1, x: 0, y: 0, rotation: 0 }, '+=0.3');
  };
};

// function traceTime(){
// 	console.log("slideTime: " + timeline.time());
// }

rotateHome = function (obj) {
  console.log(this);
  gsap.to(obj, 0.3, { rotation: 0 });
};

startAnimation = function () {
  // Code for animation
  //TweenMax.delayedCall(1, setGroups);
  TweenMax.delayedCall(1.5, mainAnimation);
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

// gsap.set('#l1t1', {
//   x: 40,
//   y: -77,
//   rotation: -37,
// });
// gsap.set('#l1t2', {
//   x: 0.3679744412566208,
//   y: 26.3923206144176,
//   rotation: 26.3923206144176,
// });
// gsap.set('#l1t3', {
//   x: 120,
//   y: 40,
//   rotation: 84,
// });
// gsap.set('#l1t4', {
//   x: 97,
//   y: -170,
//   rotation: -19,
// });
// gsap.set('#l1t5', {
//   x: 29,
//   y: -12,
//   rotation: 62,
// });
// gsap.set('#l1t6', {
//   x: 200,
//   y: -12,
//   rotation: 62,
// });
// //Group 2
// gsap.set('#l2t1', {
//   x: 188,
//   y: -109,
//   rotation: 43,
// });
// gsap.set('#l2t2', {
//   x: 159,
//   y: -134,
//   rotation: -44,
// });
// gsap.set('#l2t3', {
//   x: 109,
//   y: -72,
//   rotation: 79,
// });
// gsap.set('#l2t4', {
//   x: 104,
//   y: 26,
//   rotation: 32,
// });
// gsap.set('#l2t5', {
//   x: -3,
//   y: -34,
//   rotation: -17,
// });
// gsap.set('#l2t6', {
//   x: 168,
//   y: -12,
//   rotation: -2,
// });
// gsap.set('#l2t7', {
//   x: 150,
//   y: 44,
//   rotation: 41,
// });

// // 0: {name: "l2t1", ox: 188.57774903573082, oy: -109.3767413066901, or: 43.58079060589304}
// // 1: {name: "l2t2", ox: 159.05145733453824, oy: -134.47517727553165, or: -44.08026433177424}
// // 2: {name: "l2t3", ox: 109.91479371814037, oy: -72.08821433633071, or: 79.18217643549872}
// // 3: {name: "l2t4", ox: 104.74712724587144, oy: 26.556617131865266, or: 32.15895180692995}
// // 4: {name: "l2t5", ox: -3.357527501603279, oy: -34.89119747453216, or: -17.18963682706027}
// // 5: {name: "l2t6", ox: 168.89966863231152, oy: -12.426434660938838, or: -2.689688788578408}
// // 6: {name: "l2t7", ox: 73.43077701062376, oy: -5.133616328873927, or: 18.12660891604483}
// // 7: {name: "l2t8", ox: 150.7774981399349, oy: 44.808931037432615, or: 41.10110900613998}

// //Group 3
// gsap.set('#l3t1', {
//   x: 189,
//   y: -156,
//   rotation: 4,
// });
// gsap.set('#l3t2', {
//   x: -1,
//   y: -123,
//   rotation: 86,
// });
// gsap.set('#l3t3', {
//   x: 113,
//   y: -38,
//   rotation: 39,
// });
// gsap.set('#l3t4', {
//   x: 78,
//   y: -112,
//   rotation: -76,
// });
// gsap.set('#l3t5', {
//   x: 10,
//   y: -133,
//   rotation: 75,
// });
