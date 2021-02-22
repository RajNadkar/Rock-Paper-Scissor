// sc = Selected Choice

function btnNewGameClick()
{
    // askConfirmation();
    document.getElementById("alertMsg").innerHTML="Are you sure you want to restart?";
}


function restartGame()
{
    window.location.reload();
    document.getElementById("appAlert").setAttribute("data-dismiss","modal");
}

// function askConfirmation()
// {
//     document.getElementById("btnNewGame")
// }


document.getElementById("sc_cpu").style.display = 'none';
document.getElementById("sc_user").style.display = 'none';


function btnPlayClicked()
{
    var name = document.getElementById("txtUname").value;
    if(name != "")
    {
        console.log(name);
        document.getElementById("btnPlay").setAttribute("data-dismiss","modal");
        document.getElementById("pname").innerHTML = "";
        document.getElementById("bot_score").textContent = "0";
        document.getElementById("p_score").innerHTML = "0";
        document.getElementById("pname").innerHTML = name;
        document.getElementById("sc_cpu").style.display = 'flex';
        document.getElementById("sc_user").style.display = 'flex';
        $(".score_card").removeClass("d-none");
        $(".score_card").addClass("d-flex");    
        $("#firstPlay").addClass("d-none");
        $("#btnNewGame").removeClass("d-none");
        checkPlayer(name);
    }
    else
    {
        alert("Please Enter Your Name");
    }
}

function checkPlayer(name)
{
    if(name!="")
    {
        return true;
    }
    else
    {
        return false;
    }
}

function sleep(milliseconds) {
     const date = Date.now();
      let currentDate = null;
      do {
        currentDate = Date.now();
      } while (currentDate - date < milliseconds);
}


function selectedValue(choice)
{
    if(document.getElementById("pname").innerHTML == "")
    {
        // $("#alertMsg").html() = "Please Click the Play button...";
        document.getElementById("alertMsg").innerHTML = "Please Click the play button...";
        document.getElementById("btnAlert").setAttribute("data-dismiss","modal");
        $("#appAlert").modal('show');
        // $("#pNameForm").modal('show'); // use of jquery.
    }
    else
    {
        checkWinner(imageChange(choice),cpuChoice());
    }
}

function imageChange(choice)
{
    var c = choice;
    document.getElementById("user_choice_img").src = "images1/r_"+c+".png";
    return choice;
}

let cpu_choices = ["rock","paper","scissor"]; // declared once for entire lifecycle

function cpuChoice()
{
    //var choices = ["rock","paper","scissors"]; // bad practice... declare globally
    //var cpu_choice = cpu_choices[Math.floor(Math.random()*cpu_choices.length)];
    var cpu_choice = cpu_choices[Math.floor(Math.random()*3)];
    console.log("cpu="+cpu_choice);
    document.getElementById("cpu_choice_img").src = "images1/l_"+cpu_choice+".png";
    console.log(cpu_choice);
    return cpu_choice;
}	

function checkWinner(user_choice,cpu_choice)
{
    var u_choice = user_choice;
    console.log("user = "+user_choice);
    var pc_choice = cpu_choice; 
    if(u_choice == pc_choice)
    {
        document.getElementById("result").innerHTML = "Match Draw";
    }
    else if((u_choice == 'rock' && pc_choice=='scissor') || (u_choice=='paper' && pc_choice=='rock') || (u_choice=='scissor' && pc_choice=='paper'))
    {
        var score = parseInt(document.getElementById("p_score").innerHTML);
        console.log(score);
        document.getElementById("p_score").innerHTML = score+1;
        document.getElementById("result").innerHTML= "Congratulations "+document.getElementById("pname").innerHTML+" You Won This Game";
    }
    else
    {
        var score = parseInt(document.getElementById("bot_score").innerHTML);
        console.log(score);
        document.getElementById("bot_score").innerHTML = score+1;
        document.getElementById("result").innerHTML = document.getElementById("pname").innerHTML + " Lost the game...";
        highlightWinner("score_board_1");
    }
}


function highlightWinner(id)
{
    var winner = id;
    alert(winner);
    // winner.animate({background:'yellow',color:'black'},"fast");
    // winner.animate({background:'black',color:'white'},"fast");
    // winner.animate({background:'yellow',color:'black'},"fast");
    // winner.animate({background:'black',color:'white'},"fast");           
}