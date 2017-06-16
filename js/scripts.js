$(document).ready(function() {

  // function rotate(angle, $elem, position) {
  //   var left = (position.left) / angle;
  //   var top = (position.top) / angle;
  //   $({deg: 0}).animate({deg: angle}, {
  //     duration: 1500,
  //     step: function(now) {
  //       $elem.css({
  //         transform: 'rotate(-' + now + 'deg)',
  //         // left: '-=' + left + 'px'
  //       });
  //     }
  //   });
  // }

  var oneExp = false;
  var twoExp = false;
  var threeExp = false;
  var fourExp = false;

  function expand($elem) {
    var position = $($elem).offset();
    var width = $(document).width() * .95;
    var height = $(document).height() * .95;
    position.top = position.top - (height * .05 / 2);
    position.left = position.left - (width * .05 / 2);

    $($elem).css({'animation': 'none'});
    $($elem).animate({
      left: '-' + position.left + 'px',
      top: '-' + position.top + 'px',
      width: width + 'px',
      height: height + 'px',
      'z-index': 1
    });
  }

  function contract($elem) {
    $($elem).css({
      left: '0px',
      top: '0px',
      width: '100%',
      height: '100%',
      'z-index': 0
    });
  }

  $('.one').click(function() {
    if (!oneExp) {
      expand($(this));
      oneExp = true;
    } else {
      contract($(this));
      oneExp = false;
    }
  });
  $('.two').click(function() {
    if (!twoExp) {
      expand($(this));
      twoExp = true;
    } else {
      contract($(this));
      twoExp = false;
    }
  });
  $('.three').click(function() {
    if (!threeExp) {
      expand($(this));
      threeExp = true;
    } else {
      contract($(this));
      threeExp = false;
    }
  });
  $('.four').click(function() {
    if (!fourExp) {
      expand($(this));
      fourExp = true;
    } else {
      contract($(this));
      fourExp = false;
    }
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
