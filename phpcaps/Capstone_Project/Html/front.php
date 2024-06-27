<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ELSC+</title>
    <link
      href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0"
    />
    <link rel="stylesheet" href="../Css/front.css">
</head>
<body>
    <div class="main">

        <div class="navbar">
            <ul class="sidebar">
                <div  onclick=hideSidebar()><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></div>
                <li><a href="../Html/hospital.html">Hospital+</a></li>
                <li><a href="../Html/location.html">Location</a></li>
                <li><a href="../Html/diet.html">Diet Plan</a></li>
                <li><a href="../Html/medicine.html">MedicineStore</a></li>
                <li><a href="../harshit/chatbot.html">Medicine Assitance</a></li>
                <li><a href="../harshit/BMR.html">Basal Metabolic Rate(BMR)</a></li>
                <li><a href="../harshit/BMI.html">Body Mass Index(BMI)</a></li>
                <li><a href="../Html/labo.html">Laboratory Store</a></li>
                <li><a href="../Html/ayus.html">Ayushman affiliated hosp</a></li>
                <li><a href="../Html/contactUs.html">Contact Us</a></li>
                <li><a href="../Html/hello.html">About Us</a></li>
                <?php
    session_start();
echo '
    <button>
    <a href="../php/logout.php">LogOut</a>
    </button>
    <h2 id="title"></h2>
';
    if(isset($_SESSION['loggedin']) && ($_SESSION['username']==true)){
        echo ' <p id="title">welcome: '.$_SESSION['username'].'</p> ';
    }
    else{
        // echo ' <p id="title">Not loggedin</p> ';
        echo '<p id="title"> <a href=../php/index1.php>Login Now</a></p> ';
    } 

    
?>
            </ul>
            <ul class="normal">
                <li><a href="#"><img class="logomain" src="../src/lgo.png" alt=""></a></li>
                <li><a href="../Html/hospital.html">Hospital+</a></li>
                <li><a href="../Html/location.html">Location</a></li>
                <li><a href="../Html/diet.html">Diet Plan</a></li>
                <li><a href="../Html/medicine.html">Medicinestore</a></li>
                <div class="svg-container" onclick=showSidebar()><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></div>
            </ul>
        </div>
        <div class="page1">
            <div class="blue"></div>
            <div class="page1left">
                <div class="maintitle">
                    <p>Emergency<br> <span> Live </span> Saver <br>Connect +</p>
                </div>
                <h1 class="Slogan1">Keeping You Healthy<br></h1>
                <h2 class="Slogan2">Your Health is Our<br> Priority </h2>
            </div>
            <div class="page1right">
                <img src="../src/Coming Soon Page Transformed.png" alt="">
            </div>
        </div>
        <div class="page2">
            <div class="page2bg"></div>
            <div class="page2left">
            </div>
            <div class="page2right">
                <img src="../src/hosp_pic.jpg">
                <h1>Get Hospital <br> Location  at <br> Ease</h1>
                <button id="btn"><a href="./hospital.html">Nearby Hospitals</a></button>
                <button id="btn"><a href="./location.html">Search Hospitals</a></button>
            </div>
    
        </div>
        <div class="page3">
            <div class="bg"></div>
            <div class="page3left">
                <img src="../src/medicine.jpg" alt="">
                <h1>Get Medicine <br>Store Location</h1>
                <button id="btn"><a href="./medicine.html">View Site</a></button>
            </div>
            <div class="page3right">
            </div>
        </div>
        <div class="page4">
            <div class="bg"></div>
            <div class="page4left">
            </div>

            <div class="page4right">
                <img src="../src/ai.jpg" alt="">
                <h1>MediCare with<br> Ai+ Support</h1>
                <button id="btn"><a href="#">View Site</a></button>
            </div>
        </div>
        <div class="page5">
            <h2>TEAM MEMBERS:</h2>
            <div id="bottom">

                <div class="mate1" id="box-projectmate">
                    <div id="content-mate">
                        <h3>Mantu Kumar</h3>
                        <p>Roll no: 2312res809</br>mantu _2312res809@iitp.ac.in</p>
                    </div>
                </div>
                <div class="mate2" id="box-projectmate">
                    <div id="content-mate">
                        <h3>Harshit Kumar</h3>
                        <p>
                            Roll No: 2312res791</br>
                            harshit_2312res791@iitp.ac.in
                        </p>
                    </div>
                </div>
                <div class="mate3" id="box-projectmate">
                    <div id="content-mate">
                        <h3>Yash Kumar</h3>
                        <p>
                            Roll No:2312res876</br>
                            yash_2312res876@iitp.ac.in
                        </p>
                    </div>
                </div>
                <div class="mate4" id="box-projectmate">
                    <div id="content-mate">
                        <h3>Mohit Kumar</h3>
                        <p>
                            Roll No: 2312res394</br>
                            mohit_2312res394@iitp.ac.in
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!-- chatbot -->
<button class="chatbot-toggler">
      <span class="material-symbols-rounded">mode_comment</span>
      <span class="material-symbols-outlined">close</span>
    </button>
    <div class="chatbot">
      <header>
        <h2>Chatbot</h2>
        <span class="close-btn material-symbols-outlined">close</span>
      </header>
      <ul class="chatbox">
        <li class="chat incoming">
          <span class="material-symbols-outlined">smart_toy</span>
          <p>Hi there 👋<br />How can I help you today?</p>
        </li>
      </ul>
      <div class="chat-input">
        <textarea
          placeholder="Enter a message..."
          spellcheck="false"
          required
        ></textarea>
        <span id="send-btn" class="material-symbols-rounded">send</span>
      </div>
    </div>
    <script src="https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
      integrity="sha512-onMTRKJBKz8M1TnqqDuGBlowlH0ohFzMXYRNebz+yOcc5TQr/zAKsthzhuv0hiyUKEiQEQXEynnXCvNTOk50dg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
      integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <!-- <script src="https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" integrity="sha512-onMTRKJBKz8M1TnqqDuGBlowlH0ohFzMXYRNebz+yOcc5TQr/zAKsthzhuv0hiyUKEiQEQXEynnXCvNTOk50dg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>  -->
    <script src="../js/script.js"></script> 
    <script src="../js/chatbot.js"></script>
</body>
</html>