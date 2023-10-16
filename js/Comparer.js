OldData = {
  "PPG": [0.41, 0.6, 3.14, 2.81, 2.06, 1.14, 0.31, 1.59, 1.41, 2.53, 0.88, 0, 1.07, 1.06, 2.43, 0.12, 0.65],
  "TP": [7, 9, 44, 45, 35, 16, 5, 27, 24, 38, 14, 0, 16, 18, 34, 2, 11],
  "FPG": [0.12, 0.4, 3.07, 2.63, 0.59, 0.64, 0.19, 0.29, 0.41, 0.47, 0.13, 0, 0.53, 0.41, 1.43, 0.12, 0.24, 0.19],
  "TF": [2, 6, 43, 42, 10, 9, 3, 5, 7, 7, 2, 0, 8, 7, 20, 2, 4, 3],
  "MPG": [0.29, 0.2, 0.07, 0.19, 0.76, 0.5, 0.13, 0.12, 1, 1.67, 0.63, 0, 0.13, 0.65, 0.57, 0, 0.29],
  "TM": [5, 3, 1, 3, 13, 7, 2, 2, 17, 25, 10, 0, 2, 11, 8, 0, 5],
  "TPG": [0, 0, 0, 0, 0.35, 0, 0, 0.59, 0, 0.2, 0.06, 0, 0.2, 0, 0.21, 0, 0.06],
  "TT": [0, 0, 0, 0, 6, 0, 0, 10, 0, 3, 1, 0, 3, 0, 3, 0, 1],
}

numberA = null
numberB = null
oldA = false
oldB = false

dataA = null
dataB = null
elementID = ["avgPoints", "avgFinishes", "avgMidranges", "avgThrees", "ttlPoints", "ttlFinishes", "ttlMidranges", "ttlThrees"]

let selectDiv = document.getElementById('changerA');
selectDiv.addEventListener('change', function (e) {

  switch (e.target.value) {
    case 'zero':
      number = 0
      break;
    case 'one':
      number = 1
      break;
    case 'two':
      number = 2
      break;
    case 'three':
      number = 3
      break;
    case 'four':
      number = 4
      break;
    case 'five':
      number = 5
      break;
    case 'six':
      number = 6
      break;
    case 'seven':
      number = 7
      break;
    case 'eight':
      number = 8
      break;
    case 'nine':
      number = 9
      break;
    case 'ten':
      number = 10
      break;
    case 'eleven':
      number = 11
      break;
    case 'twelve':
      number = 12
      break;
    case 'thirteen':
      number = 13
      break;
    case 'fourteen':
      number = 14
      break;
    case 'fifteen':
      number = 15
      break;
    case 'sixteen':
      number = 16
      break;
  }
  RunMain("A")
});

let selectDivTwo = document.getElementById('changerB');
selectDivTwo.addEventListener('change', function (e) {

  switch (e.target.value) {
    case 'zero':
      number = 0
      break;
    case 'one':
      number = 1
      break;
    case 'two':
      number = 2
      break;
    case 'three':
      number = 3
      break;
    case 'four':
      number = 4
      break;
    case 'five':
      number = 5
      break;
    case 'six':
      number = 6
      break;
    case 'seven':
      number = 7
      break;
    case 'eight':
      number = 8
      break;
    case 'nine':
      number = 9
      break;
    case 'ten':
      number = 10
      break;
    case 'eleven':
      number = 11
      break;
    case 'twelve':
      number = 12
      break;
    case 'thirteen':
      number = 13
      break;
    case 'fourteen':
      number = 14
      break;
    case 'fifteen':
      number = 15
      break;
    case 'sixteen':
      number = 16
      break;
  }
  RunMain("B")
});

function Clicked(option) {
  if (option == "a") {
    if (document.getElementById("CheckA").checked) {
      oldA = true
      number = numberA
      RunMain("A")
    } else {
      oldA = false
      number = numberA
      RunMain("A")
    }
  }
  if (option == "b") {
    if (document.getElementById("CheckB").checked) {
      oldB = true
      number = numberB
      RunMain("B")
    } else {
      oldB = false
      number = numberB
      RunMain("B")
    }
  }
}

function RunMain(option) {
  if (number == null) {
    exit()
  }
  array = mainArray
  if (option == "A" && oldA) {
    array = OldData
  }
  if (option == "B" && oldB) {
    array = OldData
  }
  document.getElementById("avgPoints" + option).innerHTML = array.PPG[number]
  document.getElementById("avgFinishes" + option).innerHTML = array.FPG[number]
  document.getElementById("avgMidranges" + option).innerHTML = array.MPG[number]
  document.getElementById("avgThrees" + option).innerHTML = array.TPG[number]

  document.getElementById("ttlPoints" + option).innerHTML = array.TP[number]
  document.getElementById("ttlFinishes" + option).innerHTML = array.TF[number]
  document.getElementById("ttlMidranges" + option).innerHTML = array.TM[number]
  document.getElementById("ttlThrees" + option).innerHTML = array.TT[number]

  document.getElementById("accolade1" + option).innerHTML = mainArray.AccoladesOne[number]
  document.getElementById("accolade2" + option).innerHTML = mainArray.AccoladesTwo[number]
  document.getElementById("accolade3" + option).innerHTML = mainArray.AccoladesThree[number]
  document.getElementById("accolade4" + option).innerHTML = mainArray.AccoladesFour[number]
  document.getElementById("accolade5" + option).innerHTML = mainArray.AccoladesFive[number]
  document.getElementById("accolade6" + option).innerHTML = mainArray.AccoladesSix[number]
  document.getElementById("accolade7" + option).innerHTML = mainArray.AccoladesSeven[number]
  document.getElementById("accolade8" + option).innerHTML = mainArray.AccoladesEight[number]

  document.getElementById("history" + option).innerHTML = mainArray.History[number]

  if (option == "A") {
    dataA = [array.PPG[number], array.FPG[number], array.MPG[number], array.TPG[number], array.TP[number], array.TF[number], array.TM[number], array.TT[number]]
    numberA = number
  } else {
    dataB = [array.PPG[number], array.FPG[number], array.MPG[number], array.TPG[number], array.TP[number], array.TF[number], array.TM[number], array.TT[number]]
    numberB = number
  }

  if (dataA != null && dataB != null) {
    for (i = 0; i < dataA.length; i++) {
      if (dataA[i] > dataB[i]) {
        document.getElementById(elementID[i] + "A").style.color = "rgb(0, 150,0)"
        document.getElementById(elementID[i] + "B").style.color = "rgb(200, 0,0)"
      } else if (dataA[i] < dataB[i]) {
        document.getElementById(elementID[i] + "B").style.color = "rgb(0, 150,0)"
        document.getElementById(elementID[i] + "A").style.color = "rgb(200, 0,0)"
      } else {
        document.getElementById(elementID[i] + "B").style.color = "rgb(220, 160,0)"
        document.getElementById(elementID[i] + "A").style.color = "rgb(220, 160,0)"
      }
    }
  }

  table = document.getElementById("dayByDayTable")
  for (let i = (table.rows.length - 1); i > 0; i--) {
    table.deleteRow(i)
  }

  if (array == mainArray) {
    for (i = 0; i < dayArray.length; i++) {
      templateOther = document.getElementsByTagName("template")[1];
      for (x = 0; x < markers.Location.length; x++) {
        if (markers.Location[x] == i) {
          cloneOther = templateOther.content.cloneNode(true);
          cloneOther.getElementById("main").innerHTML = markers.Text[x]
          table.appendChild(cloneOther)
        }
      }
      template = document.getElementsByTagName("template")[0];
      clone = template.content.cloneNode(true);
      if (numberA != null) {
        if (dayArray[i].Points[numberA] == "Did not Play") {
          clone.getElementById("1").style.display = "none"
          clone.getElementById("2").style.display = "none"
          clone.getElementById("3").innerHTML = dayArray[i].Midrange[numberA]
          clone.getElementById("3").colSpan = "4"
          clone.getElementById("4").style.display = "none"
        } else {
          clone.getElementById("1").innerHTML = dayArray[i].Points[numberA]
          clone.getElementById("2").innerHTML = dayArray[i].Finishes[numberA]
          clone.getElementById("3").innerHTML = dayArray[i].Midrange[numberA]
          clone.getElementById("4").innerHTML = dayArray[i].ThreePointers[numberA]
        }

      }
      if (numberB != null) {

        if (dayArray[i].Points[numberB] == "Did not Play") {
          clone.getElementById("6").style.display = "none"
          clone.getElementById("7").style.display = "none"
          clone.getElementById("8").innerHTML = dayArray[i].Midrange[numberB]
          clone.getElementById("8").colSpan = "4"
          clone.getElementById("9").style.display = "none"
        } else {
          clone.getElementById("6").innerHTML = dayArray[i].Points[numberB]
          clone.getElementById("7").innerHTML = dayArray[i].Finishes[numberB]
          clone.getElementById("8").innerHTML = dayArray[i].Midrange[numberB]
          clone.getElementById("9").innerHTML = dayArray[i].ThreePointers[numberB]
        }
      }
      clone.getElementById("5").innerHTML = dayArray[i].Date[0]

      document.getElementById("dayByDayTable").appendChild(clone)
    }
  }



}


currentLocation = window.location
myKeyValues = currentLocation.search
urlParams = new URLSearchParams(myKeyValues)
SelectedPlayer = urlParams.get("Player")
Players = ["Jasper Collier", "Conor Farrington", "Alexander Galt", "Rudy Hoschke", "Michael Iffland", "Lukas Johnston", "Sam James",
  "Clarrie Jones", "William Kim", "Samuel McConaghy", "Ryan Pattemore", "William Scott", "Nicholas Szogi",
  "Christopher Tomkinson", "Angus Walker", "Will Weekes", "Mitch Yue"]

for (i = 0; i < Players.length; i++) {
  if (Players[i] == SelectedPlayer) {
    number = i
    window.location.href = '#main';
    RunMain()
  }
}