//document ready
$(function() {


  //네비, 컨텐츠 높이값
  $(window).resize(function() {
    resizing();
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

})
