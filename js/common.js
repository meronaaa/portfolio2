//document ready
$(function() {



  //네비, 컨텐츠 높이값
  $(window).resize(function() {
    resizing();
    var modalH = $(window).height() - 150;
    console.log(modalH);
    $('.modal-body').css({
      height: modalH
    })

  }).resize();

  function resizing() {
    var contentsH = $('#contents').height();
    var sidenavW = $('#sidenav').width();
    $('#sidenav>div').width(sidenavW);
    $('#sidenav').height(contentsH);

    // var lastli=$('.carousel-indicators > li:last-child');
    // var lastliTop = lastli.offset().top;
    // var lastliLeft = lastli.offset().left;
    // var btn = $('.btn-primary');
    // btn.css({left:lastliLeft});

    //li의 갯수를 구해서 버튼위치시킴
    var itemLength = $('.carousel-indicators li').length - 1;
    console.log(itemLength);
    // $('#slideImg button').css('margin-left',itemLength*30)


    //리스트의 넓이
    var olW = $('.carousel-indicators').width();
    //ol넓이의 반만큼 바깥쪽 여백의 값을 구함 (5px은 버튼이 너무 붙지않게)
    $('#slideImg button').css('margin-left', olW / 2 + 5);
    $('#slideImg button').on('click', function() {

      $(this).toggleClass('ion-pause ion-play');
      if ($(this).hasClass('ion-play')) {
        $('#slideImg').carousel('pause');
      } else {
        $('#slideImg').carousel('cycle');
      }
    })

    $(window).scroll(function() {
      $('#profile > div').each(function(index) {
        var pos = $(this).offset().top;
        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          if (index == 0) {
            $(this).addClass('slide-left');
          } else {
            $(this).addClass('slide-right');
          }
        }
      })
    })



  } //======================== resizing() end

  //modal
  $('#works .item a').on('click', function(event) {
    $('.modal-body').scrollTop(0);
    event.preventDefault();
    var title = $(this).parents('.panel').find('.panel-title .title').text();
    var src = $(this).attr('data-src');

    console.log(title, src);
    $('#modal').find('h4').text(title);
    $('#modal').modal().find('img').attr('src', src);

  })

  $('.closeFunction').click(function() {
    $('.modal-body').scrollTop(0);
  })

  $('#works .nav a').on('click', function(event) {
    event.preventDefault();
    $('#works .nav li').removeClass('active');
    $(this).parent().addClass('active');
  })


  //프로그레스 바 애니메이션
  $(window).scroll(function() {
    //갤러리 아이템
    $('#works .item').each(function() {
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop() + 400;
      // console.log(pos, winTop);
      if (pos < winTop) {
        $(this).find('.progress-bar').each(function() {
          var percent = $(this).attr('aria-valuenow');
          $(this).animate({
            width: percent
          }, {
            duration: 2000,
            step: function(now) {
              $(this).text(Math.floor(now) + '%');
            },
            complete: function() {
              $(this).removeClass('progress-bar-striped active')
            }
          })
        })
      }
    })
  }).scroll();

  $(".moveTop,#sidenav h2 a,#sidenav>div>ul>li>a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').stop().animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });
  //
  // $(window).scroll(function() {
  //   $(".slideanim").each(function(){
  //     var pos = $(this).offset().top;
  //
  //     var winTop = $(window).scrollTop();
  //       if (pos < winTop + 600) {
  //         $(this).addClass("slide");
  //       }
  //   });
  // });

  var mobile = $('.mobile').text();
  var responsive = $('.responsive').text();
  var bootstrap = $('.bootstrap').text();
  var uiux = $('.uiux').text();

  $('#works .nav li:nth-child(1) a').click(function() {
    event.preventDefault();

    $('.noresult').css({
      'display': 'none'
    });
    $('.row>.item').hide();
    $('.row>.item:nth-child(1)').show(300);
    $('.row>.item:nth-child(2)').show(300);
    $('.row>.item:nth-child(3)').show(300);
    $('.row>.item:nth-child(4)').show(300);
  })

  $('#works .nav li:nth-child(2) a').click(function() {
    event.preventDefault();
    $('.noresult').css({
      'display': 'none'
    });
    var res = $('#works .nav li:nth-child(2) a').text().charAt(0);
    if (res == responsive) {
      $('.row>.item:nth-child(1)').show(300);
      $('.row>.item:nth-child(2)').show(300);
      $('.row>.item:nth-child(3)').hide(300);
      $('.row>.item:nth-child(4)').hide(300);
    }
  })

  $('#works .nav li:nth-child(3) a').click(function() {
    event.preventDefault();
    $('.noresult').css({
      'display': 'none'
    });
    $('.row>.item').hide(300);
    $('.noresult').css({
      'display': 'block'
    }).show(300);
  })

  $('#works .nav li:nth-child(4) a').click(function() {
    event.preventDefault();
    $('.noresult').css({
      'display': 'none'
    });
    var res = $('#works .nav li:nth-child(4) a').text().charAt(0);
    if (res == mobile) {
      $('.row>.item:nth-child(1)').hide(300);
      $('.row>.item:nth-child(2)').hide(300);
      $('.row>.item:nth-child(3)').show(300);
      $('.row>.item:nth-child(4)').hide(300);
    }
  })

  $('#works .nav li:nth-child(5) a').click(function() {
    event.preventDefault();
    $('.noresult').css({
      'display': 'none'
    });
    var res = $('#works .nav li:nth-child(5) a').text().charAt(0);
    if (res == uiux) {
      $('.row>.item:nth-child(1)').hide(300);
      $('.row>.item:nth-child(2)').hide(300);
      $('.row>.item:nth-child(3)').hide(300);
      $('.row>.item:nth-child(4)').show(300);
    }
  })




})
