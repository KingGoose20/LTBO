let images = ['./images/one.jpg', './images/two.jpg', './images/three.jpg'];
let main = document.getElementById("main")
let points = document.getElementById("points")
let finishes = document.getElementById("finishes")
let midranges = document.getElementById("midranges")
let threepointers = document.getElementById("threepointers")
let accolade1 = document.getElementById("accolade1")
let accolade2 = document.getElementById("accolade2")
let accolade3 = document.getElementById("accolade3")
let accolade4 = document.getElementById("accolade4")
let accolade5 = document.getElementById("accolade5")
let accolade6 = document.getElementById("accolade6")
let accolade7 = document.getElementById("accolade7")
let accolade8 = document.getElementById("accolade8")
let history = document.getElementById("history")
let TeamImage = document.getElementById("TeamImage")
let PlayerImage = document.getElementById("PlayerImage")
let number = -1
let mainArea = document.getElementById("mainArea")
mainArea.style.display = "none"
let pastDetails = document.getElementById("pastDetails")
pastDetails.style.display = "none"


let selectDiv = document.getElementById('changer');
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
  RunMain()
});

function RunMain() {
  console.log(mainArray.Name[number])
  points.innerHTML = String(mainArray.PPG[number]) + "-" + String(mainArray.TP[number])
  finishes.innerHTML = String(mainArray.FPG[number]) + "-" + String(mainArray.TF[number])
  midranges.innerHTML = String(mainArray.MPG[number]) + "-" + String(mainArray.TM[number])
  threepointers.innerHTML = String(mainArray.TPG[number]) + "-" + String(mainArray.TT[number])

  accolade1.innerHTML = mainArray.AccoladesOne[number]
  accolade2.innerHTML = mainArray.AccoladesTwo[number]
  accolade3.innerHTML = mainArray.AccoladesThree[number]
  accolade4.innerHTML = mainArray.AccoladesFour[number]
  accolade5.innerHTML = mainArray.AccoladesFive[number]
  accolade6.innerHTML = mainArray.AccoladesSix[number]
  accolade7.innerHTML = mainArray.AccoladesSeven[number]
  accolade8.innerHTML = mainArray.AccoladesEight[number]
  history.innerHTML = mainArray.History[number]
  TeamImage.src = mainArray.TeamImage[number]
  PlayerImage.src = mainArray.PlayerImage[number]
  mainArea.style.display = ''
  pastDetails.style.display = ""
  if (mainArray.TeamImage[number] == "../Images/GM_Final.png") {
    PlayerImage.style.border = "5px solid #404040"
  } else if (mainArray.TeamImage[number] == "../Images/TC_Final.png") {
    PlayerImage.style.border = "5px solid #ff5500"
  } else if (mainArray.TeamImage[number] == "../Images/CT_Final.png") {
    PlayerImage.style.border = "5px solid #8a5500"
  } else {
    PlayerImage.style.border = "5px solid #8537ad"
  }



  /* Past Results Section  */
  table = document.getElementById("dayByDay")
  template = document.getElementsByTagName("template")[0];
  templateOther = document.getElementsByTagName("template")[1];
  for (let i = (table.rows.length - 1); i > 0; i--) {
    table.deleteRow(i)
  }
  for (let i = 0; i < dayArray.length; i++) {
    for (x = 0; x < markers.Location.length; x++) {
      if (markers.Location[x] == i) {
        cloneOther = templateOther.content.cloneNode(true);
        cloneOther.getElementById("main").innerHTML = markers.Text[x]
        table.appendChild(cloneOther)
      } 
    }
    clone = template.content.cloneNode(true);
    day = dayArray[i]
    clone.getElementById("date").innerHTML = String(day.Date)
    if (String(day.Points[number]) == "Did not Play") {
      clone.getElementById("points").innerHTML = String(day.Points[number])
      clone.getElementById("finishes").innerHTML = String(day.Finishes[number])
      clone.getElementById("midranges").innerHTML = String(day.Midrange[number])
      clone.getElementById("threes").innerHTML = String(day.ThreePointers[number])
    } else {
      clone.getElementById("points").innerHTML = String(day.Points[number])
      clone.getElementById("finishes").innerHTML = String(day.Finishes[number])
      clone.getElementById("midranges").innerHTML = String(day.Midrange[number])
      clone.getElementById("threes").innerHTML = String(day.ThreePointers[number])
    }
    table.appendChild(clone)
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