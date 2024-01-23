Today = returnLatestData()

/* ---------- PUT INFO HERE FOR TIE ---------- */
Override = false
OverrideOrder = ["GM", "TC", "CT"]
overRideDate = ""
overrideW = ""
overrideL = ""
overrideDayPoints = []

/* ------------------------------------------- */


function ladder() {
  /* Goes CT, TC, GM */
  LadderPoints = [ChocTops.PartA[2], TrafficControllers.PartA[2], GentleMen.PartA[2]]
  DaysPlayed = (LadderPoints[0] + LadderPoints[1] + LadderPoints[2]) / 6
  ChocTopsPlayers = []
  TrafficControllersPlayers = []
  GentleMenPlayers = []
  for (i = 0; i < ChocTops.Players.length; i++) {
    ChocTopsPlayers.push(ChocTops.Players[i])
  }
  for (i = 0; i < TrafficControllers.Players.length; i++) {
    TrafficControllersPlayers.push(TrafficControllers.Players[i])
  }
  for (i = 0; i < GentleMen.Players.length; i++) {
    GentleMenPlayers.push(GentleMen.Players[i])
  }
  Leaders = [ChocTops.PartB[1], TrafficControllers.PartB[1], GentleMen.PartB[1]]
  LeadersPoints = [(ChocTops.PartB[0] / DaysPlayed).toFixed(2), (TrafficControllers.PartB[0] / DaysPlayed).toFixed(2), (GentleMen.PartB[0] / DaysPlayed).toFixed(2)]
  if (Override == false) {
    CT = false
    TC = false
    MM = false
    if ((LadderPoints[0] > LadderPoints[1]) && (LadderPoints[0] > LadderPoints[2])) {
      document.getElementById("firstName").innerHTML = "Choc-Tops";
      document.getElementById("firstPoints").innerHTML = LadderPoints[0];
      document.getElementById("firstImagea").src = "../Images/CT_Final.png"
      document.getElementById("firstImageb").src = "../Images/CT_Final.png"
      document.getElementById("firstLeader").innerHTML = Leaders[0]
      if (LeadersPoints[0] == 1) {
        document.getElementById("firstScoring").innerHTML = (LeadersPoints[0] + " point")
      } else {
        document.getElementById("firstScoring").innerHTML = (LeadersPoints[0] + " points")
      }
      leader = LadderPoints[0]
      CT = true
      AddData(ChocTopsPlayers, "teamLista")
    } else if ((LadderPoints[1] > LadderPoints[2]) && (LadderPoints[1] > LadderPoints[0])) {
      document.getElementById("firstName").innerHTML = "Traffic Controllers";
      document.getElementById("firstPoints").innerHTML = LadderPoints[1];
      document.getElementById("firstImagea").src = "../Images/TC_Final.png"
      document.getElementById("firstImageb").src = "../Images/TC_Final.png"
      document.getElementById("firstLeader").innerHTML = Leaders[1]
      if (LeadersPoints[1] == 1) {
        document.getElementById("firstScoring").innerHTML = (LeadersPoints[1] + " point")
      } else {
        document.getElementById("firstScoring").innerHTML = (LeadersPoints[1] + " points")
        console.log(LeadersPoints[1] + " points")
      }
      leader = LadderPoints[1]
      TC = true
      AddData(TrafficControllersPlayers, "teamLista")
    } else {
      document.getElementById("firstName").innerHTML = "Gentle, Men";
      document.getElementById("firstPoints").innerHTML = LadderPoints[2];
      document.getElementById("firstImagea").src = "../Images/GM_Final.png"
      document.getElementById("firstImageb").src = "../Images/GM_Final.png"
      document.getElementById("firstLeader").innerHTML = Leaders[2]
      if (LeadersPoints[2] == 1) {
        document.getElementById("firstScoring").innerHTML = (LeadersPoints[2] + " point")
      } else {
        document.getElementById("firstScoring").innerHTML = (LeadersPoints[2] + " points")
        console.log(DaysPlayed)
      }
      leader = LadderPoints[2]
      MM = true
      AddData(GentleMenPlayers, "teamLista")
    }






    if (((LadderPoints[0] > LadderPoints[1]) || (LadderPoints[0] > LadderPoints[2])) && CT != true) {
      document.getElementById("secondName").innerHTML = "Choc-Tops";
      document.getElementById("secondPoints").innerHTML = LadderPoints[0];
      document.getElementById("secondImagea").src = "../Images/CT_Final.png"
      document.getElementById("secondImageb").src = "../Images/CT_Final.png"
      document.getElementById("secondLeader").innerHTML = Leaders[0]
      if (LeadersPoints[0] == 1) {
        document.getElementById("secondScoring").innerHTML = (LeadersPoints[0] + " point")
      } else {
        document.getElementById("secondScoring").innerHTML = (LeadersPoints[0] + " points")
      }
      CT = true
      AddData(ChocTopsPlayers, "teamListb")
    } else if (((LadderPoints[1] > LadderPoints[2]) || (LadderPoints[1] > LadderPoints[0])) && TC != true || MM == true) {
      document.getElementById("secondName").innerHTML = "Traffic Controllers";
      document.getElementById("secondPoints").innerHTML = LadderPoints[1];
      document.getElementById("secondImagea").src = "../Images/TC_Final.png"
      document.getElementById("secondImageb").src = "../Images/TC_Final.png"
      document.getElementById("secondLeader").innerHTML = Leaders[1]
      if (LeadersPoints[1] == 1) {
        document.getElementById("secondScoring").innerHTML = (LeadersPoints[1] + " point")
      } else {
        document.getElementById("secondScoring").innerHTML = (LeadersPoints[1] + " points")
      }
      TC = true
      AddData(TrafficControllersPlayers, "teamListb")
    } else {
      document.getElementById("secondName").innerHTML = "Gentle, Men";
      document.getElementById("secondPoints").innerHTML = LadderPoints[2];
      document.getElementById("secondImagea").src = "../Images/GM_Final.png"
      document.getElementById("secondImageb").src = "../Images/GM_Final.png"
      document.getElementById("secondLeader").innerHTML = Leaders[2]
      if (LeadersPoints[2] == 1) {
        document.getElementById("secondScoring").innerHTML = (LeadersPoints[2] + " point")
      } else {
        document.getElementById("secondScoring").innerHTML = (LeadersPoints[2] + " points")
      }
      MM = true
      AddData(GentleMenPlayers, "teamListb")
    }






    if (CT == false) {
      document.getElementById("thirdName").innerHTML = "Choc-Tops";
      document.getElementById("thirdPoints").innerHTML = LadderPoints[0];
      document.getElementById("thirdImagea").src = "../Images/CT_Final.png"
      document.getElementById("thirdImageb").src = "../Images/CT_Final.png"
      document.getElementById("thirdLeader").innerHTML = Leaders[0]
      if (LeadersPoints[0] == 1) {
        document.getElementById("thirdScoring").innerHTML = (LeadersPoints[0] + " point")
      } else {
        document.getElementById("thirdScoring").innerHTML = (LeadersPoints[0] + " points")
      }
      AddData(ChocTopsPlayers, "teamListc")
    } else if (TC == false) {
      document.getElementById("thirdName").innerHTML = "Traffic Controllers";
      document.getElementById("thirdPoints").innerHTML = LadderPoints[1];
      document.getElementById("thirdImagea").src = "../Images/TC_Final.png"
      document.getElementById("thirdImageb").src = "../Images/TC_Final.png"
      document.getElementById("thirdLeader").innerHTML = Leaders[1]
      if (LeadersPoints[1] == 1) {
        document.getElementById("thirdScoring").innerHTML = (LeadersPoints[1] + " point")
      } else {
        document.getElementById("thirdScoring").innerHTML = (LeadersPoints[1] + " points")
      }
      AddData(TrafficControllersPlayers, "teamListc")
    } else {
      document.getElementById("thirdName").innerHTML = "Gentle, Men";
      document.getElementById("thirdPoints").innerHTML = LadderPoints[2];
      document.getElementById("thirdImagea").src = "../Images/GM_Final.png"
      document.getElementById("thirdImageb").src = "../Images/GM_Final.png"
      document.getElementById("thirdLeader").innerHTML = Leaders[2]
      if (LeadersPoints[2] == 1) {
        document.getElementById("thirdScoring").innerHTML = (LeadersPoints[2] + " point")
      } else {
        document.getElementById("thirdScoring").innerHTML = (LeadersPoints[2] + " points")
      }
      AddData(GentleMenPlayers, "teamListc")
    }









  } else {
    for (i = 0; i < OverrideOrder.length; i++) {
      if (i == 0) {
        if (OverrideOrder[i] == "CT") {
          document.getElementById("firstName").innerHTML = "Choc-Tops";
          document.getElementById("firstPoints").innerHTML = LadderPoints[0];
          document.getElementById("firstImagea").src = "../Images/CT_Final.png"
          document.getElementById("firstImageb").src = "../Images/CT_Final.png"
          document.getElementById("firstLeader").innerHTML = Leaders[0]
          if (LeadersPoints[0] == 1) {
            document.getElementById("firstScoring").innerHTML = (LeadersPoints[0] + " point")
          } else {
            document.getElementById("firstScoring").innerHTML = (LeadersPoints[0] + " points")
          }
          leader = LadderPoints[0]
          CT = true
          AddData(ChocTopsPlayers, "teamLista")
        } else if (OverrideOrder[i] == "TC") {
          document.getElementById("firstName").innerHTML = "Traffic Controllers";
          document.getElementById("firstPoints").innerHTML = LadderPoints[1];
          document.getElementById("firstImagea").src = "../Images/TC_Final.png"
          document.getElementById("firstImageb").src = "../Images/TC_Final.png"
          document.getElementById("firstLeader").innerHTML = Leaders[1]
          if (LeadersPoints[1] == 1) {
            document.getElementById("firstScoring").innerHTML = (LeadersPoints[1] + " point")
          } else {
            document.getElementById("firstScoring").innerHTML = (LeadersPoints[1] + " points")
          }
          leader = LadderPoints[1]
          TC = true
          AddData(TrafficControllers, "teamLista")
        } else {
          document.getElementById("firstName").innerHTML = "Gentle, Men";
          document.getElementById("firstPoints").innerHTML = LadderPoints[2];
          document.getElementById("firstImagea").src = "../Images/GM_Final.png"
          document.getElementById("firstImageb").src = "../Images/GM_Final.png"
          document.getElementById("firstLeader").innerHTML = Leaders[2]
          if (LeadersPoints[2] == 1) {
            document.getElementById("firstScoring").innerHTML = (LeadersPoints[2] + " point")
          } else {
            document.getElementById("firstScoring").innerHTML = (LeadersPoints[2] + " points")
          }
          leader = LadderPoints[2]
          MM = true
          AddData(GentleMenPlayers, "teamLista")
        }
      }
      else if (i == 1) {
        if (OverrideOrder[i] == "CT") {
          document.getElementById("secondName").innerHTML = "Choc-Tops";
          document.getElementById("secondPoints").innerHTML = LadderPoints[0];
          document.getElementById("secondImagea").src = "../Images/CT_Final.png"
          document.getElementById("secondImageb").src = "../Images/CT_Final.png"
          document.getElementById("secondLeader").innerHTML = Leaders[0]
          if (LeadersPoints[0] == 1) {
            document.getElementById("secondScoring").innerHTML = (LeadersPoints[0] + " point")
          } else {
            document.getElementById("secondScoring").innerHTML = (LeadersPoints[0] + " points")
          }
          AddData(ChocTopsPlayers, "teamListb")
        } else if (OverrideOrder[i] == "TC") {
          document.getElementById("secondName").innerHTML = "Traffic Controllers";
          document.getElementById("secondPoints").innerHTML = LadderPoints[1];
          document.getElementById("secondImagea").src = "../Images/TC_Final.png"
          document.getElementById("secondImageb").src = "../Images/TC_Final.png"
          document.getElementById("secondLeader").innerHTML = Leaders[1]
          if (LeadersPoints[1] == 1) {
            document.getElementById("secondScoring").innerHTML = (LeadersPoints[1] + " point")
          } else {
            document.getElementById("secondScoring").innerHTML = (LeadersPoints[1] + " points")
          }
          AddData(TrafficControllersPlayers, "teamListb")
        } else {
          document.getElementById("secondName").innerHTML = "Gentle, Men";
          document.getElementById("secondPoints").innerHTML = LadderPoints[2];
          document.getElementById("secondImagea").src = "../Images/GM_Final.png"
          document.getElementById("secondImageb").src = "../Images/GM_Final.png"
          document.getElementById("secondLeader").innerHTML = Leaders[2]
          if (LeadersPoints[2] == 1) {
            document.getElementById("secondScoring").innerHTML = (LeadersPoints[2] + " point")
          } else {
            document.getElementById("secondScoring").innerHTML = (LeadersPoints[2] + " points")
          }
          AddData(GentleMenPlayers, "teamListb")
        }
      }
      else {
        if (OverrideOrder[i] == "CT") {
          document.getElementById("thirdName").innerHTML = "Choc-Tops";
          document.getElementById("thirdPoints").innerHTML = LadderPoints[0];
          document.getElementById("thirdImagea").src = "../Images/CT_Final.png"
          document.getElementById("thirdImageb").src = "../Images/CT_Final.png"
          document.getElementById("thirdLeader").innerHTML = Leaders[0]
          if (LeadersPoints[0] == 1) {
            document.getElementById("thirdScoring").innerHTML = (LeadersPoints[0] + " point")
          } else {
            document.getElementById("thirdScoring").innerHTML = (LeadersPoints[0] + " points")
          }
          AddData(ChocTopsPlayers, "teamListc")
        } else if (OverrideOrder[i] == "TC") {
          document.getElementById("thirdName").innerHTML = "Traffic Controllers";
          document.getElementById("thirdPoints").innerHTML = LadderPoints[1];
          document.getElementById("thirdImagea").src = "../Images/TC_Final.png"
          document.getElementById("thirdImageb").src = "../Images/TC_Final.png"
          document.getElementById("thirdLeader").innerHTML = Leaders[1]
          if (LeadersPoints[1] == 1) {
            document.getElementById("thirdScoring").innerHTML = (LeadersPoints[1] + " point")
          } else {
            document.getElementById("thirdScoring").innerHTML = (LeadersPoints[1] + " points")
          }
          AddData(TrafficControllersPlayers, "teamListc")
        } else {
          document.getElementById("thirdName").innerHTML = "Gentle, Men";
          document.getElementById("thirdPoints").innerHTML = LadderPoints[2];
          document.getElementById("thirdImagea").src = "../Images/GM_Final.png"
          document.getElementById("thirdImageb").src = "../Images/GM_Final.png"
          document.getElementById("thirdLeader").innerHTML = Leaders[2]
          if (LeadersPoints[2] == 1) {
            document.getElementById("thirdScoring").innerHTML = (LeadersPoints[2] + " point")
          } else {
            document.getElementById("thirdScoring").innerHTML = (LeadersPoints[2] + " points")
          }
          AddData(GentleMenPlayers, "teamListc")
        }
      }
    }
  }

  document.getElementById("firstText").title = "Click on me to see " + document.getElementById("firstLeader").innerHTML + "'s stats!"
  document.getElementById("firstText").style.cursor = "pointer"
  document.getElementById("firstText").onclick = function () { window.location.href = 'Stats.html?Player=' + document.getElementById("firstLeader").innerHTML; };

  document.getElementById("secondText").title = "Click on me to see " + document.getElementById("secondLeader").innerHTML + "'s stats!"
  document.getElementById("secondText").style.cursor = "pointer"
  document.getElementById("secondText").onclick = function () { window.location.href = 'Stats.html?Player=' + document.getElementById("secondLeader").innerHTML; };

  document.getElementById("thirdText").title = "Click on me to see " + document.getElementById("thirdLeader").innerHTML + "'s stats!"
  document.getElementById("thirdText").style.cursor = "pointer"
  document.getElementById("thirdText").onclick = function () { window.location.href = 'Stats.html?Player=' + document.getElementById("thirdLeader").innerHTML; };
}





players = ["Jasper Collier", "Conor Farrington", "Alexander Galt", "Rudy Hoschke",
  "Michael Iffland", "Lukas Johnston", "Sam James", "Clarrie Jones", "William Kim",
  "Samuel McConaghy", "Ryan Pattemore", "Nicholas Szogi", "Christopher Tomkinson",
  "Angus Walker", "Will Weekes", "Mitch Yue"
]



function results() {
  DidNotPlay = []
  for (i = 0; i < mainArray.Name.length; i++) {
    if (dayArray[dayArray.length - 1].Points[i] == "Did not Play") {
      DidNotPlay.push(mainArray.Name[i])
    }
  }
  CTwins = 0
  TCwins = 0
  Mwins = 0
  CTloss = 0
  TCloss = 0
  Mloss = 0

  for (i = 0; i < Today.Winner.length; i++) {
    if (Today.GameNumber[i] < Today.GameNumber[i + 1] || i + 1 == Today.Winner.length) {
      if (Today.Winner[i] == "Choc-Tops") {
        CTwins += 1
      } else if (Today.Winner[i] == "Traffic Controllers") {
        TCwins += 1
      } else {
        Mwins += 1
      }
    }

  }

  for (i = 0; i < Today.Loser.length; i++) {
    if (Today.GameNumber[i] < Today.GameNumber[i + 1] || i + 1 == Today.Winner.length) {
      if (Today.Loser[i] == "Choc-Tops") {
        CTloss += 1
      } else if (Today.Loser[i] == "Traffic Controllers") {
        TCloss += 1
      } else {
        Mloss += 1
      }
    }

  }

  CTP = (Math.round(CTwins / (CTwins + CTloss) * 1000) / 10)
  TCP = (Math.round(TCwins / (TCwins + TCloss) * 1000) / 10)
  GMP = (Math.round(Mwins / (Mwins + Mwins) * 1000) / 10)

  function addPoints(pointsCT, pointsTC, pointsGM) {
    CTpointsRef.innerHTML = "<strong>" + pointsCT + "</strong> points"
    TCpointsRef.innerHTML = "<strong>" + pointsTC + "</strong> points"
    GMpointsRef.innerHTML = "<strong>" + pointsGM + "</strong> points"
    if (pointsCT == 3) {
      document.getElementById("winning").innerHTML = "Choc-Tops";
    } else if (pointsTC == 3) {
      document.getElementById("winning").innerHTML = "Traffic Controllers";
    } else if (pointsGM == 3) {
      document.getElementById("winning").innerHTML = "Gentle, Men";
    } else if (Today.Winner[Today.Winner.length - 1] == "Choc-Tops" && pointsCT == 2.5) {
      document.getElementById("winning").innerHTML = "Choc-Tops";
    } else if (Today.Winner[Today.Winner.length - 1] == "Traffic Controllers" && pointsTC == 2.5) {
      document.getElementById("winning").innerHTML = "Traffic Controllers";
    } else if (Today.Winner[Today.Winner.length - 1] == "Gentle, Men" && pointsGM == 2.5) {
      document.getElementById("winning").innerHTML = "Gentle, Men";
    } else {
      document.getElementById("winning").innerHTML = Today.Winner[Today.Winner.length - 1];
    }

    if (pointsCT == 1) {
      document.getElementById("losing").innerHTML = "Choc-Tops";
    } else if (pointsTC == 1) {
      document.getElementById("losing").innerHTML = "Traffic Controllers";
    } else if (pointsGM == 1) {
      document.getElementById("losing").innerHTML = "Gentle, Men";
    } else if (Today.Loser[Today.Loser.length - 1] == "Choc-Tops" && pointsCT == 1.5) {
      document.getElementById("losing").innerHTML = "Choc-Tops";
    } else if (Today.Loser[Today.Loser.length - 1] == "Traffic Controllers" && pointsTC == 1.5) {
      document.getElementById("losing").innerHTML = "Traffic Controllers";
    } else if (Today.Loser[Today.Loser.length - 1] == "Gentle, Men" && pointsGM == 1.5) {
      document.getElementById("losing").innerHTML = "Gentle, Men";
    } else {
      document.getElementById("losing").innerHTML = Today.Loser[Today.Loser.length - 1];
    }
  }


  function checkTieBreaker(teamA, teamB, points) {
    teamAwins = 0
    teamBwins = 0
    for (i = 0; i < Today.Winner.length; i++) {
      if (Today.GameNumber[i] < Today.GameNumber[i + 1] || i + 1 == Today.Winner.length) {
        if (Today.Winner[i] == teamA && Today.Loser[i] == teamB) {
          teamAwins += 1
        } else if (Today.Winner[i] == teamB && Today.Loser[i] == teamA) {
          teamBwins += 1
        }
      }

    }
    if (teamAwins > teamBwins) {
      return (points)
    } else if (teamBwins > teamAwins) {
      return (points - 1)
    } else {
      return (points - 0.5)
    }
  }

  CTpointsRef = document.getElementById("CTpoints")
  TCpointsRef = document.getElementById("TCpoints")
  GMpointsRef = document.getElementById("GMpoints")

  /* Checks for 3 way tie */
  if (CTP == TCP && TCP == GMP) {
    addPoints(2, 2, 2)
  } else if (CTP > TCP && CTP > GMP) {
    if (TCP > GMP && TCP != GMP) {
      addPoints(3, 2, 1)
    } else if (TCP < GMP) {
      addPoints(3, 1, 2)
    } else {
      addPoints(3, checkTieBreaker("Traffic Controllers", "Gentle, Men", 2), checkTieBreaker("Gentle, Men", "Traffic Controllers", 2))
    }
  } else if (TCP > GMP && TCP > GMP) {
    if (CTP > GMP && CTP != GMP) {
      addPoints(2, 3, 1)
    } else if (CTP < GMP) {
      addPoints(1, 3, 2)
    } else {
      addPoints(checkTieBreaker("Choc-Tops", "Gentle, Men", 2), 3, checkTieBreaker("Gentle, Men", "Choc-Tops", 2))
    }
  } else if (GMP > TCP && GMP > TCP) {
    if (TCP > CTP && TCP != CTP) {
      addPoints(1, 2, 3)
    } else if (TCP < CTP) {
      addPoints(2, 1, 3)
    } else {
      addPoints(checkTieBreaker("Choc-Tops", "Traffic Controllers", 2), checkTieBreaker("Traffic Controllers", "Choc-Tops", 2), 3)
    }
  }
  document.getElementById("CTrecord").innerHTML = CTwins + " - " + CTloss + " <strong>(" + (Math.round(CTwins / (CTwins + CTloss) * 1000) / 10) + "%)</strong>"
  document.getElementById("TCrecord").innerHTML = TCwins + " - " + TCloss + " <strong>(" + (Math.round(TCwins / (TCwins + TCloss) * 1000) / 10) + "%)</strong>"
  document.getElementById("GMrecord").innerHTML = Mwins + " - " + Mloss + " <strong>(" + (Math.round(Mwins / (Mwins + Mloss) * 1000) / 10) + "%)</strong>"



  /* Override section. Shouldn't be required */
  if (overrideDayPoints.length != 0) {
    document.getElementById("CTpoints").innerHTML = "<strong>" + overrideDayPoints[0] + "</strong> points"
    document.getElementById("TCpoints").innerHTML = "<strong>" + overrideDayPoints[1] + "</strong> points"
    document.getElementById("GMpoints").innerHTML = "<strong>" + overrideDayPoints[2] + "</strong> points"
  }
  if (overrideW != "") {
    document.getElementById("winning").innerHTML = overrideW;
  }

  if (overrideL != "") {
    document.getElementById("losing").innerHTML = overrideL;
  }

  table = document.getElementById("mainTable");
  boxtable = document.getElementById("scoringTable")

  for (i = 0; i < Today.Winner.length; i++) {
    if (i != 0) {
      if (Today.GameNumber[i] > Today.GameNumber[i - 1]) {
        row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        cell1.innerHTML = "The " + Today.Winner[i - 1] + " beat the " + Today.Loser[i - 1] + " " + Today.Score[i - 1]
        cell1.colSpan = 9
      }
    }

    row = table.insertRow(-1);
    row.onclick = function () { openStatsLadder(this); };
    row.id = i
    row.title = "Click on me to see " + Today.Scorer[i] + "'s stats!"
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);

    cell1.innerHTML = Today.GameNumber[i]
    cell2.innerHTML = Today.Winner[i];
    cell3.innerHTML = Today.Loser[i];
    cell4.innerHTML = Today.Score[i];
    cell5.innerHTML = Today.Scorer[i];
    cell6.innerHTML = Today.Type[i];
    cell7.innerHTML = Today.WStreak[i];
    cell8.innerHTML = Today.LStreak[i];
    cell9.innerHTML = Today.SStreak[i];
  }
  row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  if (Today.Score[Today.Winner.length - 1] != "1-1") {
    cell1.innerHTML = "The " + Today.Winner[Today.Winner.length - 1] + " beat the " + Today.Loser[Today.Winner.length - 1] + " " + Today.Score[Today.Winner.length - 1]
  } else {
    cell1.innerHTML = "The " + Today.Winner[Today.Winner.length - 1] + " tied with the " + Today.Loser[Today.Winner.length - 1] + " " + Today.Score[Today.Winner.length - 1]
  }

  cell1.colSpan = 9

  for (x = 0; x < players.length; x++) {
    finishes = 0
    midrange = 0
    threes = 0

    for (i = 0; i < Today.Winner.length; i++) {
      if (Today.Scorer[i] == players[x]) {
        if (Today.Type[i] == "Finish") {
          finishes += 1
        } else if (Today.Type[i] == "Midrange") {
          midrange += 1
        } else {
          threes += 1
        }
      }
    }

    row = boxtable.insertRow(-1);
    ourHref = 'Stats.html?Player=' + players[x]
    row.onclick = function () { openStats(this); };
    row.id = x
    row.classList.add("boxScore")
    row.title = "Click on me to see " + players[x] + "'s stats!"
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = players[x];
    dnp = false
    for (i = 0; i < DidNotPlay.length; i++) {
      if (DidNotPlay[i] == players[x]) {
        dnp = true
      }
    }
    if (dnp) {
      cell2.innerHTML = "DNP"
      cell3.innerHTML = "DNP"
      cell4.innerHTML = "DNP"
      cell5.innerHTML = "DNP"
    } else {
      cell2.innerHTML = boldNumber((finishes + midrange + (2 * threes)));
      cell3.innerHTML = boldNumber(finishes);
      cell4.innerHTML = boldNumber(midrange);
      cell5.innerHTML = boldNumber(threes);
    }

  }



}





function asOf() {
  if (overRideDate == "") {
    x = document.getElementById("asOf");
    extra = "th"
    console.log(Today)
    dateNumber = Number(Today.Date[0].slice(0, 2))
    dateMonth = Today.Date[0].slice(getlength(dateNumber) + 1)

    if (dateNumber == 1 || dateNumber == 21 || dateNumber == 31) {
      extra = "st"
    } else if (dateNumber == 2 || dateNumber == 22) {
      extra = "nd"
    } else if (dateNumber == 3 || dateNumber == 23) {
      extra = "rd"
    }

    x.innerHTML = dateNumber + extra + " of " + dateMonth
  } else {
    x = document.getElementById("asOf");
    x.innerHTML = overRideDate
  }

}

function getlength(number) {
  return number.toString().length;
}

function boldNumber(number) {
  if (number != 0) {
    return ("<span class='boldNumber'>" + number + "</span>")
  } else {
    return (number)
  }
}



function AddData(array, elementID) {
  for (y = 0; y < array.length; y++) {
    element = document.createElement("p")
    if (y == 0) {
      element.innerHTML = "<strong>GM - " + array[y] + "</strong>"
    } else {
      element.innerHTML = array[y]
    }
    element.id = players.indexOf(array[y])
    element.onclick = function () { openStats(this); };
    element.style.cursor = "pointer"
    document.getElementById(elementID).appendChild(element)
  }
}

function openStats(item) {
  ourHref = 'Stats.html?Player=' + players[item.id]
  window.location.href = ourHref
}

function openStatsLadder(item) {
  ourHref = 'Stats.html?Player=' + Today.Scorer[item.id]
  window.location.href = ourHref
}
