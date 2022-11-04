$(document).ready(function(){
  $(".collection_filter_heading").click(function(e){
   $(".desktop_menu").toggleClass('show_cat');
    e.stopPropagation()
  });
});
  $(document).on("click", function(e) {
    if ($(e.target).is(".header_collection") === false) {
     // alert("Hello");
      $(".desktop_menu").removeClass("show_cat");
    }
  })
