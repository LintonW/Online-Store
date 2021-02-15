$(function(){

    //dropdown menu with hide and show 
    $("#products").mouseover(function(){
        $(".dropdown").show();
    });
    $(".dropdown").mouseleave(function(){
        $(".dropdown").hide();
    });
    

    //Animation effect for heading on index.html with chained event
    $(".mainheading").slideUp(500).slideDown(500);

});
