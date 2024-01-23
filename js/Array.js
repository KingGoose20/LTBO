/* -------------- PUT INFO HERE -------------- */
mainArray = {
  "Name":["Jasper Collier","Conor Farrington","Alexander Galt","Rudy Hoschke","Michael Iffland","Lukas Johnston","Sam James","Clarrie Jones","William Kim","Samuel McConaghy","Ryan Pattemore","Nicholas Szogi","Christopher Tomkinson","Angus Walker","Will Weekes","Mitch Yue"],
"Team":["Choc-Tops","Gentle, Men","Choc-Tops","Choc-Tops","Gentle, Men","Gentle, Men","Traffic Controllers","Traffic Controllers","Traffic Controllers","Gentle, Men","Choc-Tops","Traffic Controllers","Choc-Tops","Traffic Controllers","Gentle, Men","Gentle, Men"],
"PPG":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"0"],
"TP":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"0"],
"FPG":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"0"],
"TF":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"0"],
"MPG":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"0"],
"TM":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"0"],
"TPG":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"0"],
"TT":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"0"],
"Missed":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"0"],
"AccoladesOne":["","","All-Defence Team T1","All-Offence Team T1","Playmaker T1","MVP Runner Up T1","Miles Morales","LTBO Manager","MVP T1","GM","Perimeter T1","The Biggest Bird","MIP T1","LTBO CEO","Teammate T1",""],
"AccoladesTwo":["","","Champion T1","All-Defence Team T1","Thirdman T1","All-Offence Team T1","Champion T2","Champion T1","All-Offence Team T1","All-Offence Team T1","Champion T1","Champion T1","MIP T2","GM","Champion T1",""],
"AccoladesThree":["","","All-Offence Team T2","Champion T1","All-Offence Team T2","All-2nd-Offence Team T2","","Finals MVP T1","All-Defence Team T1","All-Defence Team T1","","MVP Runner Up T2","MVP T2","All-Offence Team T1","Teammate T2",""],
"AccoladesFour":["","","All-Defence Team T2","All-Offence Team T2","All-2nd-Defence Team T2","","","Fifthman T2","All-2nd-Offence Team T2","All-Offence Team T2","","X-Factor T2","All-2nd-Offence Team T2","All-Defence Team T1","",""],
"AccoladesFive":["","","","All-Defence Team T2","","","","All-2nd-Offence Team T2","All-Defence Team T2","All-Defence Team T2","","All-2nd-Offence Team T2","All-2nd-Defence Team T2","Scoring Champ T1","",""],
"AccoladesSix":["","","","Scoring Champ T2","","","","All-2nd-Defence Team T2","Champion T2","","","All-2nd-Defence Team T2","Champion T2","All-Offence Team T2","",""],
"AccoladesSeven":["","","","GM","","","","Champion T2","Finals MVP T2","","","","","All-Defence Team T2","",""],
"AccoladesEight":[" ","","","","","","","","","","","","","Champion T2","",""],
"History":["Drafted by Choc-Tops","GM of Gentle, Men","Drafted by Choc-Tops","Drafted by Choc-Tops","Drafted by Gentle, Men","Drafted by Gentle, Men","Drafted by Traffic Controllers","GM of Traffic Controllers","Drafted by Traffic Controllers","Drafted by Gentle, Men","GM of Choc-Tops","Drafted by Traffic Controllers","Drafted by Choc-Tops","Drafted by Traffic Controllers","Drafted by Gentle, Men","Drafted by Gentle, Men"],
"TeamImage":["../Images/CT_Final.png","../Images/GM_Final.png","../Images/CT_Final.png","../Images/CT_Final.png","../Images/GM_Final.png","../Images/GM_Final.png","../Images/TC_Final.png","../Images/TC_Final.png","../Images/TC_Final.png","../Images/GM_Final.png","../Images/CT_Final.png","../Images/TC_Final.png","../Images/CT_Final.png","../Images/TC_Final.png","../Images/GM_Final.png","../Images/GM_Final.png"],
"PlayerImage":["../Images/Players/Jasper.png","../Images/Players/Conor.png","../Images/Players/Alex.png","../Images/Players/Rudy.png","../Images/Players/Michael.png","../Images/Players/Lukas.png","../Images/Players/SamJ.png","../Images/Players/Clarrie.png","../Images/Players/Kimmy.png","../Images/Players/SamM.png","../Images/Players/Ryan.png","../Images/Players/Nicholas.png","../Images/Players/Chris.png","../Images/Players/Angus.png","../Images/Players/Will.png",""],

}


Data = [
  
]

/* ------------------------------------------- */

dayArray = []

markers = {
  "Location": [0],
  "Text": ["Regular Season"]
}

function returnLatestData() {
  return (Data[Data.length - 1])
}

function getDayArray(index) {
  DAtoUse = {
    "Date": [""],
    "Points": [],
    "Finishes": [],
    "Midrange": [],
    "ThreePointers": []
  }
  DtoUse = Data[index]
  DAtoUse.Date = DtoUse.Date
  for (x = 0; x < mainArray.Name.length; x++) {
    Finishes = 0
    Midranges = 0
    ThreePointers = 0
    for (i = 0; i < DtoUse.Scorer.length; i++) {
      if (DtoUse.Scorer[i] == mainArray.Name[x]) {
        if (DtoUse.Type[i] == "Finish") {
          Finishes += 1
        }
        if (DtoUse.Type[i] == "Midrange") {
          Midranges += 1
        }
        if (DtoUse.Type[i] == "Three Pointer") {
          ThreePointers += 1
        }
      }
    }
    Points = Finishes + Midranges + ThreePointers + ThreePointers
    DAtoUse.Points.push(Points)
    DAtoUse.Finishes.push(Finishes)
    DAtoUse.Midrange.push(Midranges)
    DAtoUse.ThreePointers.push(ThreePointers)
  }
  return (DAtoUse)

}

function getAllDayArrays() {
  AllDayArrays = [

  ]
  for (y = 0; y < Data.length; y++) {
    AllDayArrays.push(getDayArray(y))
  }
  return(AllDayArrays)
}

function getPosition(index, position) {
  DtoUse = Data[index]
  CTWins = 0
  CTLoss = 0
  TCWins = 0
  TCLoss = 0
  GMWins = 0
  GMLoss = 0

  for (i=0; i<DtoUse.Winner.length; i++) {
    if (DtoUse.Winner[i] == "Choc-Tops") {
      CTWins += 1
    } else if (DtoUse.Winner[i] == "Traffic Controllers") {
      TCWins +=1
    } else {
      GMWins += 1
    }

    if (DtoUse.Loser[i] == "Choc-Tops") {
      CTLoss += 1
    } else if (DtoUse.Loser[i] == "Traffic Controllers") {
      TCLoss +=1
    } else {
      GMLoss += 1
    }
  }
}





function allTeamDBD(team, variable) {
  Dates = []
  Wins = []
  Losses = []
  Points = []
  for (i=0; i<Data.length; i++) {
    LW = 0
    LL = 0
    LP = 0
    Dates.push(Data[i].Date)
    for (x=0; x<Data[i].Winner.length; x++) {
      if (Data[i].Winner[x] == team) {
        LW += 1
      }
      if (Data[i].Loser[x] == team) {
        LL += 1
      }
    }
    Wins.push(LW)
    Losses.push(LL)
    Points.push(LP)
  }
  variable.Date = Dates
  variable.Wins = Wins
  variable.Losses = Losses
  variable.Points = Points
}


dayArray = getAllDayArrays()

/*Show DNP*/