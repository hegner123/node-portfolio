
var firebaseConfig = {
  apiKey: "AIzaSyDB_5rwXL4ptzzuPrAAl5L5fEDZajYh2Rg",
  authDomain: "michael-hegner-portfolio.firebaseapp.com",
  databaseURL: "https://michael-hegner-portfolio.firebaseio.com",
  projectId: "michael-hegner-portfolio",
  storageBucket: "",
  messagingSenderId: "25942532764",
  appId: "1:25942532764:web:4b560d7870795c10c14359",
  measurementId: "G-H2FRNG8894"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
var database = firebase.database();




$(document).ready(function(){
  $(".form-screen-one").show();
  $(".form-screen-two").hide();


  $('form').on('submit', function(){

    event.preventDefault();

    var inputName = $("#input-name").val();
    var inputEmail = $("#input-email").val();
    var emailData = database.ref('item').val;
    console.log(emailData);

    var sendData = {
      data1:inputName,
      data2:inputEmail,
      data3:emailData
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