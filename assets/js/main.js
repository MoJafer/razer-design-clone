$(document).ready(function(){

  var showSearchForm = false;
  var showMobileMenu = false;

  var handleSearchForm = function(){
    if (showSearchForm) {
      $("#search-form").fadeIn();
      $("#search-icon").removeClass("fa-search");
      $("#search-icon").addClass("fa-times");
    } else {
      $("#search-form").hide();
      $("#search-icon").removeClass("fa-times");
      $("#search-icon").addClass("fa-search");
    }
  }

  var handleMobileMenu = function(){
    if (showMobileMenu) {
      $("#menu").css("display","flex");;
    } else {
      $("#menu").css("display","none");;
    }
  }


  $('#search').click(function(){
    showSearchForm = !showSearchForm;
    handleSearchForm();
  })

  $('#bars').click(function(){
    showMobileMenu = !showMobileMenu;
    handleMobileMenu();
  })




});
