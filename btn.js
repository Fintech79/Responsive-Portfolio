 //alert hello world when h1 element is clicked
 var test = document.getElementById('test');
 test.addEventListener("click", function () {alert ("My Skills");} );

 $('#myModal').on('shown.bs.modal', function () {
 $('#myInput').trigger('focus')
  })

// alert hello wolrd when h1 element is clicked
/*var test = document.getElementById('test');
test.addEventListener("click", function () {alert ("My Skills");} );

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })*/

 // var test = document.getElementById('test');
//test.addEventListener("click", function () {alert ("My Skills");} );

//$('#myModal').on('shown.bs.modal', function () {
  //  $('#myInput').trigger('focus')
 // })
// <!doctype html>
/*<html lang="en-us">

<head>
  <meta charset="UTF-8">
  <title>Portfolio | Abdel-Rahman</title>
  <link rel="stylesheet" type="text/css" href="assets/css/reset.css">
  <link rel="stylesheet" type="text/css" href="assets/css/style.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

</head>

<body>
    
   <header id="masthead">
    <div class="container">
      <a href="index.html" id="logo">Abdel-Rahman</a>
      <nav>
        <a href="index.html">About</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="contact.html">Contact</a>
      </nav>
    </div>
  </header>

  <div id="main-container" class="container">
    <section class="main-section">
      <h1>Portfolio</h1>
      <!-- Button trigger modal -->
<!--<button type="image" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    Launch demo modal
  </button>
  
  <!-- Modal -->
  <!-- <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="image" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">-->
          Bamazon
        </div>
        <div class="modal-footer">
          <button type="image" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="image" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

      <div class="work">
        
        <img src="assets/images/technics-q-c-640-480-1.jpg" alt="hangman" data-toggle="modal" data-target="#exampleModal">
        <img src="assets/images/technics-q-c-640-480-5.jpg" alt="Trivia Game">

        <h3>Burger</h3>
      </div>
      <div class="work">
        <img src="assets/images/technics-q-c-640-480-7.jpg" alt="Rutgers Info Widget">

        <h3>Bamazon</h3>
      </div>
      <div class="work">
        <img src="assets/images/technics-q-c-640-480-9.jpg" alt="Rock Paper Scissors">

        <h3>liri-node-app</h3>
      </div>

    </section>

    <section class="sidebar">
      <div id="connect">
        <h2>Connect with Me</h2>
     <a href="#"><img src="assets/images/github-128.png" class="social" alt="GitHub" /></a>
        <a href="#"><img src="assets/images/linkedin-128.png" class="social" alt="LinkedIn" /></a>
        <a href="#"><img src="assets/images/stackoverflow-128.png" class="social" alt="stackoverflow" /></a>
      </div>
    </section>
  </div>

  <footer>
    <div class="container">
      Copyright &copy; 2018 Abdel Rahman
    </div>
  </footer>
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  <script src="btn.js"></script>
</body>

</html>



!DOCTYPE html>
<html lang="en-us">

  <head>

    
    <meta charset="UTF-8">
    <title>About | Abdel Rahman</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="assets/css/reset.css">
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">

  </head>

  <body>
   <div id="main-container" class="container">
    <section class="main-section">
      <h1>Portfolio</h1>
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="row">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <div class="col-xs-12 phone-nav">
              <a class="navbar-brand" href="#" id="logo">Your Name</a>
            </div>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right navbar-right-custom">
              <li><a href="contact.html">Contact</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="index.html">About</a></li>
            </ul>
          </div><!-- /.navbar-collapse -->
        </div>
      </div><!-- /.container-fluid -->
    </nav>
    <!-- End of navbar -->

    <!-- Start of content wrap -->
   
              <h1 class="port-header">Portfolio</h1>
              <hr class="port-hr"/>
              <h3>Burger</h3>   
              <img src="assets/images/technics-q-c-640-480-1.jpg" alt="hangman" data-toggle="modal" data-target="#exampleModal">
              <h3>Burger</h3>   
              <img src="assets/images/technics-q-c-640-480-5.jpg" alt="Trivia Game">
              <h3>Burger</h3>   
              <img src="assets/images/technics-q-c-640-480-7.jpg" alt="Rutgers Info Widget">
              <h3>Burger</h3>   
              <img src="assets/images/technics-q-c-640-480-9.jpg" alt="Rock Paper Scissors">
            </section>
          </div>
          <div class="col-md-5">

            <!-- Start of Connect With Me Area -->
            <section class="sidebar">
              <div id="connect">
                <h2>Connect with Me</h2>
                <hr />
                <div id="images">
                  <a href="https://github.com/Fintech79"><img src="assets/images/github-128.png" class="social" alt="GitHub" /></a>
                  <a href="https://www.linkedin.com/in/a-f-abdel-rahman-2b5a6a14/"><img src="assets/images/linkedin-128.png" class="social" alt="LinkedIn" /></a>
                  <a href="https://stackoverflow.com/users/9782559/enpassantcbf"><img src="assets/images/stackoverflow-128.png" class="social" alt="stackoverflow" /></a>
                </div>
              </div>
            </section>

            <!-- End of the Connect With Me Area -->
          </div>
        </section>
      </div>
    </div>
    <!-- End of content wrap -->

    <!-- Start of footer -->
    <footer class="footer">
      <div class="two-toned-footer-color"></div>
      <p class="text-muted text-muted-footer text-center">
        &copy; Copyright 2017 Your Name
      </p>
    </footer>
    <!-- End of footer -->

    <!-- jQuery CDN -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <!-- Bootstrap CDN -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

  </body>

</html>