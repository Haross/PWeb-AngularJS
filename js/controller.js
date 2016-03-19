var windowWidth = $(window).width(),
    haft_win = windowWidth/2;
$(function(){
    /*
    Dependencies : TweenMax and Draggable
    Test on touch device @ http://cloud.bassta.bg/before-after.html
    */
    var $dragMe     = $("#dragme");
    var $beforeAfter  = $("#before-after");
    var $viewAfter    = $(".view-after");
    if($("#dragme").length == 0)
      return;
    Draggable.create($dragMe, {
      type:"left",
      bounds: $beforeAfter,
      onDrag:updateImages
    });
    //Intro Animation
    animateTo(haft_win);
    $(window).resize(function(){
      var windowWidth = $(window).width(),
        haft_win = windowWidth/2;
      animateTo(haft_win);
    });
    function updateImages(){

      TweenLite.set($viewAfter, {width: $dragMe.css("left") });   //or this.x if only dragging
    }
    function animateTo(_left){
      TweenLite.to( $dragMe, 1, {left: _left, onUpdate: updateImages });
    }
    //V2 Click added
    $beforeAfter.on("click", function(event){
      var eventLeft = event.clientX - $beforeAfter.offset().left;
      animateTo(eventLeft);
    });
  });//end jQuery wrapper
