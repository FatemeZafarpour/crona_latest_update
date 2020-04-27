$(document).ready(function() {

   $('.table-responsive-stack').find("th").each(function (i) {
       
      $('.table-responsive-stack td:nth-child(' + (i + 1) + ')').prepend('<span class="table-responsive-stack-thead">'+ $(this).text() + ':</span> ');
      $('.table-responsive-stack-thead').hide();
   });
 
       
   $( '.table-responsive-stack' ).each(function() {
      var thCount = $(this).find("th").length; 
      var rowGrow = 100 / thCount + '%';
      $(this).find("th, td").css('flex-basis', rowGrow);   
   });
      
     
   function flexTable(){
      if ($(window).width() < 768) {
         
      $(".table-responsive-stack").each(function (i) {
         $(this).find('thead').hide();
         $(this).find(".table-responsive-stack-thead").show();
      });
         
      // window is bigger than 768px   
      } else {
          
      $(".table-responsive-stack").each(function (i) {
         $(this).find(".table-responsive-stack-thead").hide();
         $(this).find('thead').show();
      });
          
      }
   // flextable   
   }      
   
   flexTable();
      
   window.onresize = function(event) {
      flexTable();
   };
       
 // document ready  
 });
 