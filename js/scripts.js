$(document).ready(function() {
  var expanded = 0;
  var step = .5;
  var currentStep = 0;

  function rotate(angle, $elem) {
    $elem.css({'animation': 'none'});
    $({deg: 0}).animate({deg: angle}, {
      duration: 500,
      step: function(now) {
        $elem.css({
          transform: 'rotate(-' + now + 'deg)'
        });
      }
    });
  }

  function determineBoxSelector($elem) {
    return $elem[0].classList[0];
  }

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
    var target = determineBoxSelector($elem);
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

    var target = determineBoxSelector($elem);
    $('.' + target + ' .content').fadeOut('slow');
    $('.' + target + ' .close').fadeOut('slow');
    setTimeout(function() {
      $elem.css('z-index', 0);
      rotate(45, $('.box'));
    }, 500);
  }

  $('.small-box').click(function() {
    if (expanded === 0) {
      expand($(this));
      switch (determineBoxSelector($(this))) {
        case 'one': expanded = 1; break;
        case 'two': expanded = 2; break;
        case 'three': expanded = 3; break;
        case 'four': expanded = 4; break;
      }
    }
  });

  $('.close').click(function() {
    contract($(this).parent());
    setTimeout(function() {
      expanded = 0;
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

  $('.text').each(function() {
    $(this).addClass('animation-class');
    $(this).css('animation-delay', currentStep + 's');
    currentStep -= step;
  });
});
