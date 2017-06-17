$(document).ready(function() {

  function rotate(angle, $elem) {
    $elem.css({'animation': 'none'});
    $({deg: 0}).animate({deg: angle}, {
      duration: 500,
      step: function(now) {
        console.log(typeof now);
        $elem.css({
          transform: 'rotate(-' + now + 'deg)'
        });
      }
    });
  }

  var oneExp = false;
  var twoExp = false;
  var threeExp = false;
  var fourExp = false;

  function expand($elem) {
    rotate(360, $('.box'));
    $elem.css('z-index', 1);
    setTimeout(function() {
      var position = $($elem).offset();
      var width = $(document).width() * .98;
      var height = $(document).height() * .98;
      position.top = position.top - (height * .02 / 2);
      position.left = position.left - (width * .02 / 2);

      $elem.css({'animation': 'none'});
      $elem.animate({
        left: '-' + position.left + 'px',
        top: '-' + position.top + 'px',
        width: width + 'px',
        height: height + 'px',
      });
    }, 500);
    var target = $elem[0].classList[0];
    $('.' + target + ' .content').fadeIn('slow');
    $('.' + target + ' .close').fadeIn('slow');
  }

  function contract($elem) {
    $elem.animate({
      left: '0px',
      top: '0px',
      width: '100%',
      height: '100%',
    }, 500);

    var target = $elem[0].classList[0];
    $('.' + target + ' .content').fadeOut('slow');
    $('.' + target + ' .close').fadeOut('slow');
    setTimeout(function() {
      $elem.css('z-index', 0);
      rotate(45, $('.box'));
    }, 500);
  }

  $('.one').click(function() {
    if (!oneExp) {
      expand($(this));
      oneExp = true;
    }
  });
  $('.two').click(function() {
    if (!twoExp) {
      expand($(this));
      twoExp = true;
    }
  });
  $('.three').click(function() {
    if (!threeExp) {
      expand($(this));
      threeExp = true;
    }
  });
  $('.four').click(function() {
    if (!fourExp) {
      expand($(this));
      fourExp = true;
    }
  });

  $('.one .close').click(function() {
    contract($(this).parent());
    setTimeout(function() {
      oneExp = false;
    }, 100);
  });
  $('.two .close').click(function() {
    contract($(this).parent());
    setTimeout(function() {
      twoExp = false;
    }, 100);
  });
  $('.three .close').click(function() {
    contract($(this).parent());
    setTimeout(function() {
      threeExp = false;
    }, 100);
  });
  $('.four .close').click(function() {
    contract($(this).parent());
    setTimeout(function() {
      fourExp = false;
    }, 100);
  });

  $('.text').html(function(index, text) {
    var split = text.trim().split("");
    var joined = split.map(function(txt, i) {
      if (i !== split.length - 1) {
        return txt + "</span><span class='text'>";
      } else {
        return txt + "</span>";
      }
    }).join("");
    return joined;
  });

  var step = .5;
  var currentStep = 0;

  $('.text').each(function() {
    $(this).addClass('animation-class');
    $(this).css('animation-delay', currentStep + 's');
    currentStep -= step;
  });




});
