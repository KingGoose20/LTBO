addPlayers(ChocTops)
addPlayers(TrafficControllers)
addPlayers(GentleMen)
ChocTops.Players.push("Choc-Tops OTHER")
GentleMen.Players.push("Gentle, Men OTHER")
TrafficControllers.Players.push("Traffic Controllers OTHER")

aTeam = ""
bTeam = ""
cTeam = ""
gameNumber = 1
CTstreak = 0
TCstreak = 0
Mstreak = 0
Sstreak = 1
pastScorer = ""
aScore = 0
bScore = 0
needed = 0

document.getElementById("Scorer").addEventListener("change", function() {
    var selectedOption = this.value;
    // Run your event handling code here
    if (selectedOption < ChocTops.Players.length) {
        if (aTeam == "Choc-Tops") {
            assignAssists(aTeam)
        } else {
            assignAssists(bTeam)
        }
    } else if (selectedOption < ChocTops.Players.length + GentleMen.Players.length) {
        if (aTeam == "Gentle, Men") {
            assignAssists(aTeam)
        } else {
            assignAssists(bTeam)
        }
    } else {
        if (aTeam == "Traffic Controllers") {
            assignAssists(aTeam)
        } else {
            assignAssists(bTeam)
        }
    }
  });

function start() {
    if (document.getElementById("type").value == "fw") {
        needed = 2
    } else if (document.getElementById("type").value == "gf") {
        needed = 3
    } else if (document.getElementById("type").value == "finalGame") {
        needed = 100
    }
    aElement = document.getElementById("aTeam")
    bElement = document.getElementById("bTeam")
    if (aElement.options[aElement.selectedIndex].text == bElement.options[bElement.selectedIndex].text) {
        alert("Team A and B cannot be the same!");
        return
    }
    aElement.disabled = true;
    bElement.disabled = true;
    document.getElementById("startButton").disabled = true;

    switch (aElement.value) {
        case "zero":
            aTeam = "Choc-Tops"
            break;
        case "one":
            aTeam = "Gentle, Men"
            break;
        case "two":
            aTeam = "Traffic Controllers"
            break;
    }

    switch (bElement.value) {
        case "three":
            bTeam = "Choc-Tops"
            break;
        case "four":
            bTeam = "Gentle, Men"
            break;
        case "five":
            bTeam = "Traffic Controllers"
            break;
    }

    if (aTeam == "Choc-Tops" && bTeam == "Traffic Controllers") {
        cTeam = "Gentle, Men"
    } else if (aTeam == "Choc-Tops" && bTeam == "Gentle, Men") {
        cTeam = "Traffic Controllers"
    } else if (aTeam == "Gentle, Men" && bTeam == "Choc-Tops") {
        cTeam = "Traffic Controllers"
    } else if (aTeam == "Gentle, Men" && bTeam == "Traffic Controllers") {
        cTeam = "Choc-Tops"
    } else if (aTeam == "Traffic Controllers" && bTeam == "Gentle, Men") {
        cTeam = "Choc-Tops"
    } else {
        cTeam = "Gentle, Men"
    }

    assignPlayers(aTeam)

    assignPlayers(bTeam)
}

function assignAssists(team) {
    for (i = document.getElementById("Assister").length; i > 1; i--) {
        document.getElementById("Assister").remove(i)
    }
    select = document.getElementById("Assister")
    if (team == "Choc-Tops") {
        for (i = 0; i < ChocTops.Players.length; i++) {
            var opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = ChocTops.Players[i];
            opt.style.color = "brown";
            select.appendChild(opt);
        }
    } else if (team == "Gentle, Men") {
        for (i = 0; i < GentleMen.Players.length; i++) {
            var opt = document.createElement('option');
            opt.value = i + ChocTops.Players.length;
            opt.innerHTML = GentleMen.Players[i];
            opt.style.color = "black";
            select.appendChild(opt);
        }
    } else {
        for (i = 0; i < TrafficControllers.Players.length; i++) {
            var opt = document.createElement('option');
            opt.value = i + (ChocTops.Players.length + GentleMen.Players.length);
            opt.innerHTML = TrafficControllers.Players[i];
            opt.style.color = "#ff5e00";
            select.appendChild(opt);
        }
    }
}

function assignPlayers(team) {
    select = document.getElementById("Scorer")
    if (team == "Choc-Tops") {
        for (i = 0; i < ChocTops.Players.length; i++) {
            var opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = ChocTops.Players[i];
            opt.style.color = "brown";
            select.appendChild(opt);
        }
    } else if (team == "Gentle, Men") {
        for (i = 0; i < GentleMen.Players.length; i++) {
            var opt = document.createElement('option');
            opt.value = i + ChocTops.Players.length;
            opt.innerHTML = GentleMen.Players[i];
            opt.style.color = "black";
            select.appendChild(opt);
        }
    } else {
        for (i = 0; i < TrafficControllers.Players.length; i++) {
            var opt = document.createElement('option');
            opt.value = i + (ChocTops.Players.length + GentleMen.Players.length);
            opt.innerHTML = TrafficControllers.Players[i];
            opt.style.color = "#ff5e00";
            select.appendChild(opt);
        }
    }
}


function logDetails() {
    Scorer = document.getElementById("Scorer")
    Assister = document.getElementById("Assister")
    Type = document.getElementById("Type")
    table = document.getElementById("loggedDetails");
    row = table.insertRow(-1);
    winner = ""
    loser = ""
    toadd = 1
    score = ""
    wStreak = "-"
    lStreak = "-"
    if (Type.options[Type.selectedIndex].text == "Three Pointer") {
        toadd = 2
    }
    if (Scorer.options[Scorer.selectedIndex].value < ChocTops.Players.length) {
        if (aTeam == "Choc-Tops") {
            aScore += toadd
            score = aScore + "-" + bScore
            winner = aTeam
            loser = bTeam
        } else {
            bScore += toadd
            score = bScore + "-" + aScore
            winner = bTeam
            loser = aTeam
        }
    } else if (Scorer.options[Scorer.selectedIndex].value < (ChocTops.Players.length + GentleMen.Players.length)) {
        if (aTeam == "Gentle, Men") {
            aScore += toadd
            score = aScore + "-" + bScore
            winner = aTeam
            loser = bTeam
        } else {
            bScore += toadd
            score = bScore + "-" + aScore
            winner = bTeam
            loser = aTeam
        }
    } else {
        if (aTeam == "Traffic Controllers") {
            aScore += toadd
            score = aScore + "-" + bScore
            winner = aTeam
            loser = bTeam
        } else {
            bScore += toadd
            score = bScore + "-" + aScore
            winner = bTeam
            loser = aTeam
        }
    }


    if (Scorer.options[Scorer.selectedIndex].text == pastScorer) {
        sStreak += 1
    } else {
        pastScorer = Scorer.options[Scorer.selectedIndex].text;
        sStreak = 1
    }

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);

    if (aScore >= needed || bScore >= needed) {
        updateStreaks()
    }
    cell1.innerHTML = gameNumber;
    cell2.innerHTML = winner;
    cell3.innerHTML = loser;
    cell4.innerHTML = score;
    cell5.innerHTML = Scorer.options[Scorer.selectedIndex].text;
    cell6.innerHTML = Type.options[Type.selectedIndex].text;
    cell7.innerHTML = wStreak;
    cell8.innerHTML = lStreak;
    cell9.innerHTML = sStreak;
    cell10.innerHTML = Assister.options[Assister.selectedIndex].text;

    if (aScore >= needed || bScore >= needed) {
        gameNumber += 1;
        aScore = 0
        bScore = 0
        newTeams(winner)
        alert("Game Won!")
    } else {
        alert("Logged!")
    }

}

function range(number, change, min, max) {
    number += change
    if (change < 0) {
        if (number > max) {
            number = max
        }
    } else {
        if (number < min) {
            number = min
        }
    }

    return number;
}




function newTeams(winner) {
    localA = aTeam
    localB = bTeam
    localC = cTeam

    if (winner == aTeam) {
        cTeam = bTeam
        bTeam = localC
    } else {
        cTeam = aTeam
        aTeam = bTeam
        bTeam = localC
    }

    for (i = document.getElementById("Scorer").length; i > 0; i--) {
        document.getElementById("Scorer").remove(i)
    }


    assignPlayers(aTeam)
    assignPlayers(bTeam)
}

function otherStreak(team) {
    if (team == "Choc-Tops") {
        return CTstreak;
    } else if (team == "Traffic Controllers") {
        return TCstreak;
    } else {
        return Mstreak
    }
}


function updateStreaks() {
    if (Scorer.options[Scorer.selectedIndex].value < ChocTops.Players.length) {
        winner = "Choc-Tops"
        CTstreak = range(CTstreak, 1, 1, 100)
        wStreak = CTstreak
    } else if (Scorer.options[Scorer.selectedIndex].value < (ChocTops.Players.length + GentleMen.Players.length)) {
        winner = "Gentle, Men"
        Mstreak = range(Mstreak, 1, 1, 100)
        wStreak = Mstreak
    } else {
        winner = "Traffic Controllers"
        TCstreak = range(TCstreak, 1, 1, 100)
        wStreak = TCstreak
    }
 
    if (loser == "Choc-Tops") {
        CTstreak = range(CTstreak, -1, -100, -1)
        lStreak = CTstreak * -1
    } else if (loser == "Traffic Controllers") {
        TCstreak = range(TCstreak, -1, -100, -1)
        lStreak = TCstreak * -1
    } else {
        Mstreak = range(Mstreak, -1, -100, -1)
        lStreak = Mstreak * -1
    }
}