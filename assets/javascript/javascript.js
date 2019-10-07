$(document).ready(function(){
  $(".form-screen-one").show();
  $(".form-screen-two").hide();


  $('form').on('submit', function(){

    event.preventDefault();

    var inputName = $("#input-name").val();
    var inputEmail = $("#input-email").val();



    var sendData = {
      data1:inputName,
      data2:inputEmail,

    }


    $.ajax({
      type: 'POST',
      url: '/contact',
      data: sendData,
      success: function(data){
        event.preventDefault();
       $(".form-screen-one").hide();
       $(".form-screen-two").show();
      }
    });

    return false;

});




});