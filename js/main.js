function open_menu(){
  $('.humburger-menu').slideDown(500);
  $('.open').hide();
  $('.close').show();
}

function close_menu(){
  $('.humburger-menu').slideUp(500);
  $('.close').hide();
  $('.open').show();
}

function initMap(){ //コールバック関数　APIを読み込んだ後に実行される
  var center = {lat:36.067959,lng:139.67247};
  var map = new google.maps.Map(document.getElementById('map'),

  {
    center:center,

    zoom:15

  }

  )

  var marker = new google.maps.Marker({ // マーカーの追加
      position: center, // マーカーを立てる位置を指定
      map: map // マーカーを立てる地図を指定
   });;

}


$(document).ready(function(){

  window.addEventListener('scroll', fixedGlobalNav); //スクロール時に発火

  $(document).on('click', '.hover-up', function(){

    $(this).removeClass("hover-up");

    $("h3.t-now").addClass("hover-up");

    $("h3.t-now").removeClass("t-now");

    $(this).addClass("t-now");



    $(this).next(".guidance-box").removeClass("hidden");

    $(".guidance-box.t-now").addClass("hidden");

    $(".guidance-box.t-now").removeClass("t-now");

    $(this).next(".guidance-box").addClass("t-now");

  });


  $(document).on('click', '.fontSize-box', function(){

    $(".fontSize-box").removeClass("now");

    $(this).addClass("now");

  });

  function fixedGlobalNav() {
    var scrollY = window.pageYOffset;
    var trigger = document.getElementById('js-trigger');
    var gNav = document.getElementById('headerBottom');

    var triggerClientRect = trigger.getBoundingClientRect();
    var triggerY = scrollY + triggerClientRect.top;
      
    if(scrollY > triggerY) {
      gNav.classList.add('is-fixed-nav');
      // gNav.classList.remove('header');
    } else {
      gNav.classList.remove('is-fixed-nav');
      // gNav.classList.add('header');
    }
  }


  $('#main-visual').vegas({
    slides:[
      {src: './images/main-visual.jpg'},
      {src: './images/main-visual_02.jpg'},
      {src: './images/main-visual_03.jpg'}
    ],
    transition: 'fade',
    delay: 10000,
    timer: false,
    transitionDuration: 5000, //スライドの遷移アニメーションの時間
    animation: 'kenburns'
  });


});