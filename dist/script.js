$(document).ready(function(){
    var webCamElement = document.getElementById("camera");
    var canvasElement = document.getElementById("canvas");
    const webcam = new Webcam(webCamElement, 'user', canvasElement, null);
    
  $('#camera').css('visibility', 'visible');

    webcam.start();
       
    $('#checker').click(function(){
        picture = webcam.snap();
        $.post('TestCamera', {param: picture}, function(response){
            if (response === 'error'){
                alert('Error you should stay in front of camera');
            }else{
                window.location.replace('QuestionAndAnalyze.jsp'); /* redirect*/
            }
        });
    });
});