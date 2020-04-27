$(document).ready(function() {

   $('.table-responsive-stack').find("th").each(function (i) {
      //add name of the 'th' column before each td element of that column (like country: Afghanistan)
      $('.table-responsive-stack td:nth-child(' + (i + 1) + ')').prepend('<span class="table-responsive-stack-thead">'+ $(this).text() + ':</span> ');
      //hide this new added text(name of th column) 
      $('.table-responsive-stack-thead').hide();
   });
 
       
   $( '.table-responsive-stack' ).each(function() {
      //number of 'th' column
      var thCount = $(this).find("th").length; 

      //calculate the specific length for each 'th' column 
      var rowGrow = 100 / thCount + '%';

      //set the initial length of th and td accordig to row grow
      $(this).find("th, td").css('flex-basis', rowGrow);   
   });
      
     
   function flexTable(){
      //for small screen
      if ($(window).width() < 768) {
         
      $(".table-responsive-stack").each(function () {
         //normal head of table hide
         $(this).find('thead').hide();
         
         //'th' column name come before td 
         $(this).find(".table-responsive-stack-thead").show();
      });
         
      //  
      } else {
          
      $(".table-responsive-stack").each(function () {
         //noraml head show
         $(this).find('thead').show();

         $(this).find(".table-responsive-stack-thead").hide();
         
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
 