// JavaScript Document

$(document).ready(function() {
     var monthName = [ " ","January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December" ];

        $("#jump-button").click(function(){
           var jumpDate = $("#date-input").val();
           if (jumpDate != null && jumpDate.length==10){
              var array = jumpDate.split('/');
              var month = array[0], day = array[1], year = array[2];
              window.location = ("/" + year + "/" + monthName[parseInt(month)] + "/" + parseInt(day));
            }
        });
});

