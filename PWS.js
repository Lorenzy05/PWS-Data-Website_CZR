function Login(){
    var ac=document.getElementById("ac").value;
    var pw=document.getElementById("pw").value;
   
    var pwd = "PWS123"
   
    if(ac == "PWS" & pw == pwd)
    {
        location.href="main.html";
        alert("Login successful");
    }
    if(pw != pwd)
    {
        location.href="index.html";
        alert("Wrong password " + ac + ", please enter your account/password again !");
    }
}

function April_Page(){
    var selected = document.getElementById("April").value;

    if (selected==""){
        location.href="main.html";
    }

    if (selected=="Besmetting"){
        location.href="Data_April_Besmetting.html"
    }

    if (selected=="Genezen"){
        location.href="Data_April_Genezen.html"
    }

    if (selected=="Overleden"){
        location.href="Data_April_Overleden.html"
    }

    if (selected=="BGO"){
        location.href="Data_April_BGO.html"
    }
}

function SIR_Page(){
    var selected = document.getElementById("SIR").value;

    if (selected==""){
        location.href="main.html"
    }

    if (selected=="S"){
        location.href="SIR-S.html"
    }

    if (selected=="I"){
        location.href="SIR-I.html"
    }

    if (selected=="R"){
        location.href="SIR-R.html"
    }

    if (selected=="IR"){
        location.href="SIR-IR.html"
    }

}

function SIR_May_Page(){
    var selected = document.getElementById("SIR_May").value;
    if (selected==''){
        location.href="main.html"
    }
    if (selected=="S_May"){
        location.href="SIR-S_May.html"
    }
    if (selected=="I_May"){
        location.href="SIR-I_May.html"
    }
    if (selected=="R_May"){
        location.href="SIR-R_May.html"
    }
    if (selected=="IR_May"){
        location.href="SIR-IR_May.html"
    }
}
