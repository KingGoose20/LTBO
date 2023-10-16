template = {
    "Date": [""],
    "WeeklyPosition": [""],
    "Offensive": [""],
    "Defensive": [""],
    "OffensiveDescription": [""],
    "DefensiveDescription": [""]
}

function main() {
    currentLocation = window.location
    myKeyValues = currentLocation.search
    urlParams = new URLSearchParams(myKeyValues)
    SelectedDate = urlParams.get("Date")
    setToUse = findVariable(SelectedDate);
    document.getElementById("date").innerHTML = setToUse.Date[0]
    for (i = 0; i < setToUse.Offensive.length; i++) {
        toAdd = "<li>" + setToUse.Offensive[i] + "</li>"
        document.getElementById("offensive").insertAdjacentHTML("beforeend", toAdd)
    }
    for (i = 0; i < setToUse.Defensive.length; i++) {
        toAdd = "<li>" + setToUse.Defensive[i] + "</li>"
        document.getElementById("defensive").insertAdjacentHTML("beforeend", toAdd)
    }
    document.getElementById("offensiveDescription").innerHTML = setToUse.OffensiveDescription[0]
    document.getElementById("defensiveDescription").innerHTML = setToUse.DefensiveDescription[0]
    document.getElementById("WeeklyPosition").innerHTML = setToUse.WeeklyPosition[0]
}

function findVariable(Param) {
    switch (Param) {
        case "2404":
            return weekOnedayOne
            break;
    }
}



function getAllTeamsResults() {
    players = ["Jasper Collier", "Conor Farrington", "Alexander Galt", "Rudy Hoschke", "Michael Iffland",
        "Lukas Johnston", "Clarrie Jones", "William Kim", "Samuel McConaghy", "Ryan Pattemore", "Nicholas Szogi",
        "Christopher Tomkinson", "Angus Walker", "Willie Weekes", "Mitch Yue", "Sam James"]
    playersOffPoints = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    playersDefPoints = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    allTeamsList = [weekOnedayOne, weekOneDayTwo, weekTwoDayOne, weekTwoDayTwo, weekThreeDayOne, weekThreeDayTwo, weekThreeDayThree, weekFourDayOne, weekFourDayTwo, weekFiveDayTwo, weekFiveDayThree]

    for (i = 0; i < allTeamsList.length; i++) {
        for (x = 0; x < 5; x++) {
            player = allTeamsList[i].Offensive[x]
            number = (5 - x)
            for (y = 0; y < players.length; y++) {
                if (players[y] == player) {
                    playersOffPoints[y] += number;
                    break;
                }
            }
        }
        for (x = 0; x < 5; x++) {
            player = allTeamsList[i].Defensive[x]
            number = (5 - x)
            for (y = 0; y < players.length; y++) {
                if (players[y] == player) {
                    playersDefPoints[y] += number;
                    break;
                }
            }
        }
    }

    for (i = 0; i < players.length; i++) {
        console.log(players[i] + " Off: " + playersOffPoints[i] + " Def: " + playersDefPoints[i])
    }
}


getAllTeamsResults()