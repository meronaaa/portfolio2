$(document).ready(function() {

  var mobile = $('.mobile').text();
  var responsive = $('.responsive').text();
  var bootstrap = $('.bootstrap').text();
  var uiux = $('.uiux').text();

    // var res = $('#works .nav li:nth-child('+ i +') a').text().charAt(0);
    //var res = $('#works .nav li').eq(i).find('a').text().charAt(0);

    $('#works .nav li a').click(function() {
      event.preventDefault();
      //아이템 전체 초기화
      $('#works .item').hide(300);
      var res = $(this).text().charAt(0);
        $('#works .item').each(function(index){
          console.log(index);
          console.log(res, mobile);
            if (res == 'A') {
              $('.row>.item:nth-child(1)').show(300);
              $('.row>.item:nth-child(2)').show(300);
              $('.row>.item:nth-child(3)').show(300);
              $('.row>.item:nth-child(4)').show(300);
            } else if (res == responsive) {
              // $('#works .item').eq(index).show(300);
              $('.row>.item:nth-child(1)').show(300);
              $('.row>.item:nth-child(2)').show(300);
              $('.row>.item:nth-child(3)').hide(300);
              $('.row>.item:nth-child(4)').hide(300);
            } else if (res == 'P') {
              $('.row>.item:nth-child(1)').hide(300);
              $('.row>.item:nth-child(2)').hide(300);
              $('.row>.item:nth-child(3)').hide(300);
              $('.row>.item:nth-child(4)').hide(300);
            } else if (res == mobile) {
              $('.row>.item:nth-child(1)').hide(300);
              $('.row>.item:nth-child(2)').hide(300);
              $('.row>.item:nth-child(3)').show(300);
              $('.row>.item:nth-child(4)').hide(300);
            } else if (res == uiux) {
              $('.row>.item:nth-child(1)').hide(300);
              $('.row>.item:nth-child(2)').hide(300);
              $('.row>.item:nth-child(3)').hide(300);
              $('.row>.item:nth-child(4)').show(300);
            }
        })
    })
})
