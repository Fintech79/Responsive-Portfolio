// alert hello wolrd when h1 element is clicked
var test = document.getElementById('test');
test.addEventListener("click", function () {alert ("My Skills");} );

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })