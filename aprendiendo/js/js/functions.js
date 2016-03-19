$( document ).ready(function() {

    $("#logo").hide();
    $("#logo").show("bounce", 1500);

});

$( document ).ready(function() {

    //Logo
    $("h1").hide();
    $("h1").show("bounce", 1500);


    //Articles
    $("article").hide();
    $("article").show("fold", 800);

});

//Simple draggable
$(function() {
    $( "#draggable1, #draggable2, #draggable3" ).draggable({ containment: "parent" });
});


//Cursors
$(function() {
    $( "#d1, #d2, #d3" ).draggable({ containment: "parent" });

    $( "#d1" ).draggable({ cursor: "move", cursorAt: { top: 65, left: 110 } });
    $( "#d2" ).draggable({ cursor: "crosshair", cursorAt: { top: -5, left: -5 } });
    $( "#d3" ).draggable({ cursorAt: { bottom: 0 } });
});


//Draggable only by a section
$(function() {
    $( "#draggable_header" ).draggable({ handle: "#div-header-bar", containment: "parent" });
    $( "div" ).disableSelection();
});


//Selectable list
$(function() {
    $( "#selectable" ).selectable();
});


$(function() {
    $("#resizable").resizable({containment: "parent"});
});


$(function() {
    $("#datepicker").datepicker();
});





