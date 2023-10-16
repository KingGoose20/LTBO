Angus = ["../Videos/Angus.mp4", 2.9, 1.7, 0.5, 0.35, "1st Offensive and Defensive Team", "Angus Walker"]

Chris = ["../Videos/Chris.mp4", 1.24, 0.86, 0.29, 0.05, "Most Valuable Player", "Christopher Tomkinson"]
Kimmy = ["../Videos/Kimmy.mp4", 2.42, 1.11, 0.89, 0.21, "Averaged 5ppg during Finals Week", "William Kim"]
SamJ = ["../Videos/SamJ.mp4", 0.57, 0.29, 0.19, 0.05, "Scored 3 points in one day", "Sam James"]

Alex = ["../Videos/Alex.mp4", 3.54, 3.31, 0.08, 0.08, "Averaged 5ppg for a week", "Alexander Galt"]
Nick = ["../Videos/Nick.mp4", 0.83, 0.56, 0.06, 0.11, "2nd Offensive and Defensive Team", "Nicholas Szogi"]
Jasper = ["../Videos/Jasper.mp4", 0.14, 0, 0.14, 0, "Second for MIP Voting", "Jasper Collier"]
Rudy = ["../Videos/Rudy.mp4", 1.44, 1.38, 0.07, 0, "1st Offensive and Defensive Team", "Rudy Hoschke"]

Michael = ["../Videos/Michael.mp4", 1.2, 0.5, 0.5, 0.1, "1st Defensive Team", "Michael Iffland"]
Lukas = ["../Videos/Lukas.mp4", 1.11, 0.84, 0.27, 0, "2nd Offensive and Defensive Team", "Lukas Johnston"]
SamM = ["../Videos/SamM.mp4", 3.33, 0.76, 2, 0.29, "Scoring Champion", "Samuel McConaghy"]
Willie = ["../Videos/Willie.mp4", 0.05, 0.0, 0.45, 0, "3-time Teammate of the Term", "Will Weekes"]

waiting = []

function prepare(variable, team, number, forced = "no") {
    console.log("prepare")
    var id = '#dialog';
    if ($(id).is(":visible") && forced == "no") {
        waiting.push([variable, team, number])
    } else {
        actuallygo()
    }
    function actuallygo() {
        document.getElementById("playerVideo").src = variable[0]
        document.getElementById("playerVideo").pause()
        document.getElementById("playerVideo").currentTime = 0
        document.getElementById("points").innerHTML = variable[1]
        document.getElementById("finishes").innerHTML = variable[2]
        document.getElementById("midranges").innerHTML = variable[3]
        document.getElementById("threes").innerHTML = variable[4]
        document.getElementById("accomplishment").innerHTML = variable[5]
        document.getElementById("name").innerHTML = variable[6]
        document.getElementById("teamName").innerHTML = team
        document.getElementById("number").innerHTML = number

        if (team == "Choc-Tops") {
            document.getElementById("teamImage").src = "../Images/CT_Final.png";
            document.getElementById("playerVideo").style.border = "5px solid #8a5500";
        } else if (team == "Traffic Controllers") {
            document.getElementById("teamImage").src = "../Images/TC_Final.png";
            document.getElementById("playerVideo").style.border = "5px solid #ff5500";
        } else if (team == "Gentle, Men") {
            document.getElementById("teamImage").src = "../Images/GM_Final.png";
            document.getElementById("playerVideo").style.border = "5px solid #404040";
        }
        if (forced == "no") {
            setTimeout(() => { showPlayer() }, 3000);
        } else if (forced != "cancel") {
            setTimeout(() => { showPlayer() }, 1000);
        }

    }

}


function showPlayer() {
    console.log("ran")

    position = window.pageYOffset
    var id = '#dialog';
    //Get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    //Set heigth and width to mask to fill up the whole screen
    $('#mask').css({ 'width': maskWidth, 'height': maskHeight });

    //transition effect		
    $('#mask').fadeIn(500);
    $('#mask').fadeTo("slow", 0.9);

    //Get the window height and width
    var winH = $(window).height();
    var winW = $(window).width();

    //Set the popup window to center
    $(id).css('top', (winH / 2 - $(id).height() / 2) + position);
    $(id).css('left', (winW - $(id).width() - 40) / 2);
    console.log($(id).width())

    //transition effect
    $(id).fadeIn(2000);

    //if close button is clicked
    $('.window .close').click(function (e) {
        e.preventDefault();

        $('#mask').hide();
        $('.window').hide();

        if (waiting.length > 0) {
            prepare(waiting[0][0], waiting[0][1], waiting[0][2], "yes")
            waiting.shift()
        }

    });

    //if mask is clicked
    $('#mask').click(function () {
        $(this).hide();
        $('.window').hide();
        if (waiting.length > 0) {
            prepare(waiting[0][0], waiting[0][1], waiting[0][2], "yes")
            waiting.shift()
        }
    });
    setTimeout(() => { document.getElementById("playerVideo").play() }, 500)

}

enabled = true;
function test(number) {
    if (enabled == true) {
        for (i = 0; i < number; i++) {
                console.log("Trying " + detailsToUse[i][6])
                prepare(detailsToUse[i], "Gentle, Men", "First", "yes")
                console.log("Completed " + detailsToUse[i][6])

        }
        console.log("finished!")
    }

}