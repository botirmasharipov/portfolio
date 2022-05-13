$ (document).ready (function () {
  // sticky header on scroll
  $ (window).on ('scroll', function () {
    var scroll = $ (window).scrollTop ();
    // console.log (scroll);
    if (scroll >= 30) {
      $ ('.sticky').addClass ('stickyadd');
    } else {
      $ ('.sticky').removeClass ('stickyadd');
    }
  });

  // adding fadeInUp animation to child of div with class .way-col
  var $child = $ ('.way-fade-up').children ();
  $child.each (function () {
    var self = $ (this);
    $ (this).waypoint (
      function () {
        self.addClass ('animated fadeInUp');
      },
      {
        offset: '90%',
      }
    );
  });

  var $child = $ ('.way-fade-left').children ();
  $child.each (function () {
    var self = $ (this);
    $ (this).waypoint (
      function () {
        self.addClass ('animated fadeInLeft');
      },
      {
        offset: '90%',
      }
    );
  });

  var $child = $ ('.way-fade-right').children ();
  $child.each (function () {
    var self = $ (this);
    $ (this).waypoint (
      function () {
        self.addClass ('animated fadeInRight');
      },
      {
        offset: '90%',
      }
    );
  });

  $ ('.owl-carousel').owlCarousel ({
    loop: true,
    margin: 10, // since one item ou can remove it
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    items: 1, //show only 1
    animateOut: 'fadeOut',
    animateIn: 'fadeInRight',
  });

  // typed.js for the header
  var typed = new Typed ('.element', {
    strings: [
      'Hulya Karakaya',
      'a Web Developer',
      'a Programmer',
      'a Life-Long Learner',
    ],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000,
  });

  $ ('a').smoothScroll ({
    speed: 2000,
  });
});
