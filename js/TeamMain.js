/* -------------- PUT INFO HERE -------------- */
Main = {
    "PartACT": [0, 0, 0],
    "PartBCT": [0, "N/A", 0, "N/A", 0, "N/A", 0, "N/A"],
    "PartCCT": [0, 0, 0, 0, 0, 0],
    "PartDCT": [0, 0, 0, 0, 0, 0],
    "PartATC": [0, 0, 0],
    "PartBTC": [0, "N/A", 0, "N/A", 0, "N/A", 0, "N/A"],
    "PartCTC": [0, 0, 0, 0, 0, 0],
    "PartDTC": [0, 0, 100, 0, 0, 0],
    "PartAGM": [0, 0, 0],
    "PartBGM": [0, "N/A", 0, "N/A", 0, "N/A", 0, "N/A"],
    "PartCGM": [0, 0, 0, 0, 0, 0],
    "PartDGM": [0, 0, 100, 0, 0, 100],

}

/* ------------------------------------------- */

ChocTops = {
    "TeamsNames": ["Traffic Controllers", "Gentle, Men", "TC", "GM", "Choc-Tops"],
    "Quote": [""],
    "Colours": ["#8a5500", "#ffb082", "#ffb082", "#8a5500"],
    "Players": [],
    "Images": [],
    "PartA": [],
    "PartB": [],
    "PartC": [],
    "PartD": [],
    "Date": [],
    "Wins": [],
    "Losses": [],
    "Points": []
}
TrafficControllers = {
    "TeamsNames": ["Choc-Tops", "Gentle, Men", "CT", "GM", "Traffic Controllers"],
    "Quote": [""],
    "Colours": ["#ff5500", "#8a8a8a", "#545454", "#ff5500"],
    "Players": [],
    "Images": [],
    "PartA": [],
    "PartB": [],
    "PartC": [],
    "PartD": [],
    "Date": [],
    "Wins": [],
    "Losses": [],
    "Points": []
}

GentleMen = {
    "TeamsNames": ["Choc-Tops", "Traffic Controllers", "CT", "TC", "Gentle, Men"],
    "Quote": [""],
    "Colours": ["#808080", "#949494", "#404040", "#666666"],
    "Players": [],
    "Images": [],
    "PartA": [],
    "PartB": [],
    "PartC": [],
    "PartD": [],
    "Date": [],
    "Wins": [],
    "Losses": [],
    "Points": []
}

allTeamDBD("Choc-Tops", ChocTops)
allTeamDBD("Traffic Controllers", TrafficControllers)
allTeamDBD("Gentle, Men", GentleMen)


ChocTops.PartA = Main.PartACT
ChocTops.PartB = Main.PartBCT
ChocTops.PartC = Main.PartCCT
ChocTops.PartD = Main.PartDCT
TrafficControllers.PartA = Main.PartATC
TrafficControllers.PartB = Main.PartBTC
TrafficControllers.PartC = Main.PartCTC
TrafficControllers.PartD = Main.PartDTC
GentleMen.PartA = Main.PartAGM
GentleMen.PartB = Main.PartBGM
GentleMen.PartC = Main.PartCGM
GentleMen.PartD = Main.PartDGM



function addPlayers(team) {
    team.Players = []
    team.Images = []
    gmIndex = null
    for (i = 0; i < mainArray.Name.length; i++) {
        if (mainArray.History[i] == ("GM of " + team.TeamsNames[4])) {
            team.Players.push(mainArray.Name[i])
            team.Images.push(mainArray.PlayerImage[i])
            gmIndex = i
        }
    }
    for (i = 0; i < mainArray.Name.length; i++) {
        if ((mainArray.Team[i] == team.TeamsNames[4]) && i != gmIndex) {
            team.Players.push(mainArray.Name[i])
            team.Images.push(mainArray.PlayerImage[i])
        }
    }
}

addPlayers(ChocTops)
addPlayers(TrafficControllers)
addPlayers(GentleMen)

markers = {
    "Location": [0],
    "Text": ["Regular Season"]
}

function initalise() {
    currentLocation = window.location
    myKeyValues = currentLocation.search
    urlParams = new URLSearchParams(myKeyValues)
    SelectedTeam = urlParams.get("Team")
    variable = []

    if (SelectedTeam == "CT") {
        variable = ChocTops
    }

    if (SelectedTeam == "TC") {
        variable = TrafficControllers
    }

    if (SelectedTeam == "GM") {
        variable = GentleMen
    }

    if (SelectedTeam == "LTBO") {
        RunLTBO()
    } else if (SelectedTeam != null) {
        RunMain()
    }

    function RunMain() {
        for (i = 0; i < variable.Players.length; i++) {
            rowOne = document.getElementById("playersRow1")
            width = (100 / variable.Players.length)
            rowOne.innerHTML = rowOne.innerHTML + "<td style='width: " + width + "%; cursor: pointer;'><img src='" + variable.Images[i] + "' class='playerImages'/></td>"
            rowTwo = document.getElementById("playersRow2")
            if (i == 0) {
                rowTwo.innerHTML = rowTwo.innerHTML + "<td style='width: " + width + "%; cursor: pointer;'><h3 class=' section-heading centered' id='playersText'>GM - " + variable.Players[i] + "</h3></td>"
            } else {
                rowTwo.innerHTML = rowTwo.innerHTML + "<td style='width: " + width + "%; cursor: pointer;'><h3 class=' section-heading centered' id='playersText'>" + variable.Players[i] + "</h3></td>"
            }

        }

        for (i = 0; i < document.getElementById("playersRow1").children.length; i++) {
            rowOne.children[i].onclick = function () { openStats(this) };
            rowOne.children[i].id = i
            rowTwo.children[i].onclick = function () { openStats(this) };
            rowTwo.children[i].id = i
        }
        console.log()
        document.getElementById("tWins").innerHTML = variable.PartA[0]
        document.getElementById("tLoss").innerHTML = variable.PartA[1]
        document.getElementById("tPercent").innerHTML = (Math.round(variable.PartA[0] / (variable.PartA[1] + variable.PartA[0]) * 1000)) / 10 + "%"
        document.getElementById("lPointsS").innerHTML = variable.PartB[0]
        document.getElementById("lPointsN").innerHTML = variable.PartB[1]
        document.getElementById("lFinishesS").innerHTML = variable.PartB[2]
        document.getElementById("lFinishesN").innerHTML = variable.PartB[3]
        document.getElementById("lMidrangesS").innerHTML = variable.PartB[4]
        document.getElementById("lMidrangesN").innerHTML = variable.PartB[5]
        document.getElementById("lThreesS").innerHTML = variable.PartB[6]
        document.getElementById("lThreesN").innerHTML = variable.PartB[7]
        document.getElementById("aPoints").innerHTML = variable.PartC[0]
        document.getElementById("aFinishes").innerHTML = variable.PartC[1]
        document.getElementById("aMidranges").innerHTML = variable.PartC[2]
        document.getElementById("aThrees").innerHTML = variable.PartC[3]
        document.getElementById("aWins").innerHTML = variable.PartC[4]
        document.getElementById("aLosses").innerHTML = variable.PartC[5]
        document.getElementById("AWins").innerHTML = variable.PartD[0]
        document.getElementById("ALoss").innerHTML = variable.PartD[1]
        document.getElementById("APercent").innerHTML = variable.PartD[2] + "%"
        document.getElementById("BWins").innerHTML = variable.PartD[3]
        document.getElementById("BLoss").innerHTML = variable.PartD[4]
        document.getElementById("BPercent").innerHTML = variable.PartD[5] + "%"
        document.getElementById("teamAbig").innerHTML = variable.TeamsNames[0]
        document.getElementById("teamBbig").innerHTML = variable.TeamsNames[1]
        document.getElementById("quoteLocation").innerHTML = variable.Quote[0]

        document.title = variable.TeamsNames[4] + " | LTBO"
        document.getElementById("name2").innerHTML = variable.TeamsNames[4]
        document.getElementById("name3").innerHTML = variable.TeamsNames[4]
        document.getElementById("name4").innerHTML = variable.TeamsNames[4]
        document.getElementById("name5").innerHTML = variable.TeamsNames[4]

        document.querySelector(':root').style.setProperty('--colour-a', variable.Colours[0]);
        document.querySelector(':root').style.setProperty('--colour-b', variable.Colours[1]);
        document.querySelector(':root').style.setProperty('--colour-c', variable.Colours[2]);
        document.querySelector(':root').style.setProperty('--colour-d', variable.Colours[3]);
        console.log(document.querySelector(':root').style)


        table = document.getElementById("dayByDay")
        template = document.getElementsByTagName("template")[0];
        templateOther = document.getElementsByTagName("template")[1];
        for (let i = 0; i < variable.Date.length; i++) {
            for (x = 0; x < markers.Location.length; x++) {
                if (markers.Location[x] == i) {
                    cloneOther = templateOther.content.cloneNode(true);
                    cloneOther.getElementById("main").innerHTML = markers.Text[x]
                    table.appendChild(cloneOther)
                }
            }
            clone = template.content.cloneNode(true);
            clone.getElementById("Date").innerHTML = String(variable.Date[i])
            clone.getElementById("Wins").innerHTML = String(variable.Wins[i])
            clone.getElementById("Losses").innerHTML = String(variable.Losses[i])
            clone.getElementById("Points").innerHTML = String(variable.Points[i])
            table.appendChild(clone)
        }
    }








    function RunLTBO() {
        document.getElementById("ttlGames").innerHTML = ChocTops.PartA[0] + TrafficControllers.PartA[0] + GentleMen.PartA[0]
        firstWins = 0;
        firstLosses = 0;
        for (i = 0; i < ChocTops.Wins.length; i++) {
            if (ChocTops.Wins[i] > TrafficControllers.Wins[i] && ChocTops.Wins[i] > GentleMen.Wins[i]) {
                firstWins += ChocTops.Wins[i]
                firstLosses += ChocTops.Losses[i]
            } else if (TrafficControllers.Wins[i] > GentleMen.Wins[i]) {
                firstWins += TrafficControllers.Wins[i]
                firstLosses += TrafficControllers.Losses[i]
            } else {
                firstWins += GentleMen.Wins[i]
                firstLosses += GentleMen.Losses[i]
            }
        }
        document.getElementById("firstWinPct").innerHTML = (Math.round(firstWins / (firstWins + firstLosses) * 1000)) / 10 + "%"

        thirdWins = 0;
        thirdLosses = 0;
        for (i = 0; i < ChocTops.Wins.length; i++) {
            if (ChocTops.Wins[i] < TrafficControllers.Wins[i] && ChocTops.Wins[i] < GentleMen.Wins[i]) {
                thirdWins += ChocTops.Wins[i]
                thirdLosses += ChocTops.Losses[i]
            } else if (TrafficControllers.Wins[i] < GentleMen.Wins[i]) {
                thirdWins += TrafficControllers.Wins[i]
                thirdLosses += TrafficControllers.Losses[i]
            } else {
                thirdWins += GentleMen.Wins[i]
                thirdLosses += GentleMen.Losses[i]
            }
        }
        document.getElementById("thirdWinPct").innerHTML = (Math.round(thirdWins / (thirdWins + thirdLosses) * 1000)) / 10 + "%"

        id = ["lPoints", "lFinishes", "lMidranges", "lThrees"]
        for (i = 0; i < 4; i++) {
            if (TrafficControllers.PartB[2 * i] > GentleMen.PartB[2 * i] && TrafficControllers.PartB[2 * i] > ChocTops.PartB[2 * i]) {
                document.getElementById(id[i] + "S").innerHTML = TrafficControllers.PartB[2 * i]
                document.getElementById(id[i] + "N").innerHTML = TrafficControllers.PartB[2 * i + 1]
            } else if (GentleMen.PartB[2 * i] > ChocTops.PartB[2 * i]) {
                document.getElementById(id[i] + "S").innerHTML = GentleMen.PartB[2 * i]
                document.getElementById(id[i] + "N").innerHTML = GentleMen.PartB[2 * i + 1]
            } else {
                document.getElementById(id[i] + "S").innerHTML = ChocTops.PartB[2 * i]
                document.getElementById(id[i] + "N").innerHTML = ChocTops.PartB[2 * i + 1]
            }
        }

        document.getElementById("aPoints").innerHTML = (ChocTops.PartC[0] + TrafficControllers.PartC[0] + GentleMen.PartC[0]).toFixed(1)
        document.getElementById("aFinishes").innerHTML = (ChocTops.PartC[1] + TrafficControllers.PartC[1] + GentleMen.PartC[1]).toFixed(1)
        document.getElementById("aMidranges").innerHTML = (ChocTops.PartC[2] + TrafficControllers.PartC[2] + GentleMen.PartC[2]).toFixed(1)
        document.getElementById("aThrees").innerHTML = (ChocTops.PartC[3] + TrafficControllers.PartC[3] + GentleMen.PartC[3]).toFixed(1)
        document.getElementById("aGames").innerHTML = (ChocTops.PartC[4] + TrafficControllers.PartC[4] + GentleMen.PartC[4]).toFixed(1)

        secondID = ["PPoints", "PFinishes", "PMidranges", "PThrees"]
        PPG = 0
        FPG = 0
        MPG = 0
        TPG = 0
        for (i = 0; i < mainArray.PPG.length; i++) {
            PPG += mainArray.PPG[i]
            FPG += mainArray.FPG[i]
            MPG += mainArray.MPG[i]
            TPG += mainArray.TPG[i]
        }

        document.getElementById("PPoints").innerHTML = Math.round((PPG / mainArray.PPG.length) * 100) / 100
        document.getElementById("PFinishes").innerHTML = Math.round((FPG / mainArray.FPG.length) * 100) / 100
        document.getElementById("PMidranges").innerHTML = Math.round((MPG / mainArray.MPG.length) * 100) / 100
        document.getElementById("PThrees").innerHTML = Math.round((TPG / mainArray.TPG.length) * 100) / 100
    }






    function openStats(item) {
        if (variable == ChocTops) {
            ourHref = 'Stats.html?Player=' + ChocTops.Players[item.id]
        } else if (variable == TrafficControllers) {
            ourHref = 'Stats.html?Player=' + TrafficControllers.Players[item.id]
        } else {
            ourHref = 'Stats.html?Player=' + GentleMen.Players[item.id]
        }

        window.location.href = ourHref
    }

    function scaleImages() {
        console.log("resized")
        if (document.getElementById("pTT").offsetWidth < window.innerWidth) {
            objects = document.getElementsByClassName("playerImages").length
            for (i = 0; i < objects; i++) {
                document.getElementsByClassName("playerImages")[i].style.width = (window.innerWidth / (objects * 1.7)) + "px"
            }
            document.getElementById("pTT").style.width = "100%"

        } else {
            objects = document.getElementsByClassName("playerImages").length
            for (i = 0; i < objects; i++) {
                document.getElementsByClassName("playerImages")[i].style.width = (window.innerWidth / objects * 2.5) + "px"

            }
            document.getElementById("pTT").style.width = (objects * 250) + "px"
        }
    }

    if (SelectedTeam != null) {
        window.addEventListener('DOMContentLoaded', (event) => {
            scaleImages()

        });

        $(window).resize(function () {
            scaleImages()
        });
    }


}

