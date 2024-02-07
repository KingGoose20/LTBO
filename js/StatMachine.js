function toggle(id) {
    if (id != "savedTable") {
        if (document.getElementById(id).style.display == "none") {
            document.getElementById(id).style.display = "table"
            document.getElementById(id + "Icon").innerHTML = "&#11205"
            document.getElementById(id + "Icon").style.top = "4px"
        } else {
            document.getElementById(id).style.display = "none"
            document.getElementById(id + "Icon").innerHTML = "&#11206"
            document.getElementById(id + "Icon").style.top = "0px"
        }
        returnBoxStatus(["CTCB"])
    } else {
        if (document.getElementById("savedTables").style.display == "none") {
            document.getElementById("savedTables").style.display = "initial"
            document.getElementById("savedTables" + "Icon").innerHTML = "&#11205"
            document.getElementById("savedTables" + "Icon").style.top = "4px"
        } else {
            document.getElementById("savedTables").style.display = "none"
            document.getElementById("savedTables" + "Icon").innerHTML = "&#11206"
            document.getElementById("savedTables" + "Icon").style.top = "0px"
        }
    }

}


function saveTable() {
    document.getElementById("savedData").style.display = "initial"
    stuff = document.getElementById("dataSection")
    clone = stuff.cloneNode(true)
    newDiv = document.createElement("div")
    newDiv.style.border = "1px solid rgb(200,200,200)"
    newDiv.style.padding = "30px"
    newDiv.style.marginBottom = "20px"
    newDiv.id = (document.getElementById("savedTables").childNodes.length + "section")
    deleteButton = document.createElement("a")
    deleteButton.innerHTML = "Delete Table"
    deleteButton.classList.add("button")
    deleteButton.id = document.getElementById("savedTables").childNodes.length
    deleteButton.onclick = function () { deleteSavedTable(this.id) }
    newDiv.appendChild(clone)
    newDiv.appendChild(deleteButton)
    document.getElementById("savedTables").appendChild(newDiv)
}

function deleteSavedTable(id) {
    if (confirm("Are you sure you want to delete this table?") == true) {
        parent = document.getElementById(id + "section")
        for (i=0; i<parent.children.length; i++) {
            parent.children[i].style.animation = "fade-out-table 2s forwards"
        }
        height = document.getElementById(id + "section").offsetHeight
        parent.style.setProperty('--x',(height + "px"));
        parent.style.animation = "shrinkTable 4s forwards"
         setTimeout(function() {
            parent.remove()
            if (document.getElementById("savedTables").children.length == 0) {
                document.getElementById("savedData").style.display = "none"
            }
            
          }, "4000");        
    } else {
    }

}
`document.getElementById(id + "section").remove();`

const allPeople = document.getElementById('allPeople');
const allDays = document.getElementById('allDays');
const allStats = document.getElementById('allStatsCB');
const allTeams = document.getElementById('allTeamsCB');

// Define the function to be executed when the checkbox is clicked
function handleCheckboxClick(event) {
    if (event.target.checked) {
        if (event.target.id == "allPeople") {
            selectedPeopleArray = []
            for (i = 0; i < document.getElementById("peopleTable").rows.length - 1; i++) {
                selectedPeopleArray.push("peopleTable" + i)
            }
            for (i = 0; i < selectedPeopleArray.length; i++) {
                document.getElementById(selectedPeopleArray[i]).checked = true;
            }
        } else if (event.target.id == "allDays") {
            selectedDaysArray = []
            for (i = 0; i < document.getElementById("daysTable").rows.length - 1; i++) {
                selectedDaysArray.push("daysTable" + i)
            }
            for (i = 0; i < selectedDaysArray.length; i++) {
                document.getElementById(selectedDaysArray[i]).checked = true;
            }

        } else if (event.target.id == "allStatsCB") {
            document.getElementById("ptsStatsCB").checked = true;
            document.getElementById("finStatsCB").checked = true;
            document.getElementById("midStatsCB").checked = true;
            document.getElementById("thrStatsCB").checked = true;
        } else if (event.target.id == "allTeamsCB") {
            document.getElementById("CTCB").checked = true;
            document.getElementById("TCCB").checked = true;
            document.getElementById("GMCB").checked = true;
        }
        // Perform actions when the checkbox is checked
    } else {
        if (event.target.id == "allPeople") {
            selectedPeopleArray = []
            for (i = 0; i < document.getElementById("peopleTable").rows.length - 1; i++) {
                selectedPeopleArray.push("peopleTable" + i)
            }
            for (i = 0; i < selectedPeopleArray.length; i++) {
                document.getElementById(selectedPeopleArray[i]).checked = false;
            }
        } else if (event.target.id == "allDays") {
            selectedDaysArray = []
            for (i = 0; i < document.getElementById("daysTable").rows.length - 1; i++) {
                selectedDaysArray.push("daysTable" + i)
            }
            for (i = 0; i < selectedDaysArray.length; i++) {
                document.getElementById(selectedDaysArray[i]).checked = false;
            }
        } else if (event.target.id == "allStatsCB") {
            document.getElementById("ptsStatsCB").checked = false;
            document.getElementById("finStatsCB").checked = false;
            document.getElementById("midStatsCB").checked = false;
            document.getElementById("thrStatsCB").checked = false;
        } else if (event.target.id == "allTeamsCB") {
            document.getElementById("CTCB").checked = false;
            document.getElementById("TCCB").checked = false;
            document.getElementById("GMCB").checked = false;
        }
        // Perform actions when the checkbox is unchecked
    }
}

// Attach an event listener to the checkbox
allPeople.addEventListener('click', handleCheckboxClick);
allDays.addEventListener('click', handleCheckboxClick);
allStats.addEventListener('click', handleCheckboxClick);
allTeams.addEventListener('click', handleCheckboxClick);


addElements("peopleTable", mainArray.Name)
addElements("daysTable", getAllDates())

function addElements(tableID, array) {
    table = document.getElementById(tableID);
    for (i = 0; i < array.length; i++) {
        row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.innerHTML = '<input type="checkbox" id="' + tableID + i + '" name="" value="">'
        cell2.innerHTML = array[i];
        cell2.classList.add("section-heading")
        cell2.classList.add("centered")
        cell2.style.fontSize = "25px";
    }
}

function returnBoxStatus(IDnameArray) {
    arrayToRetun = []
    for (i = 0; i < IDnameArray.length; i++) {
        if (document.getElementById(IDnameArray[i]).checked) {
            arrayToRetun.push(1)
        } else {
            arrayToRetun.push(0)
        }
    }
    return arrayToRetun
}

function text(selectedType, AgainstTeams, selectedDays, selectedPeople) {
    SectionA = "Show me "
    SectionB = " from the "
    SectionC = " while playing "
    statsArray = []
    datesArray = []
    peopleArray = []
    stats = ""
    names = ""
    dates = ""
    teams = ""
    span = "<span style='color: rgb(200,200,200);'>"
    spanEnd = "</span>"

    for (i = 0; i < selectedType.length; i++) {
        if (i == 1 & selectedType[i] == 1) {
            statsArray.push("points")
        } else if (i == 2 & selectedType[i] == 1) {
            statsArray.push("finishing")
        } else if (i == 3 & selectedType[i] == 1) {
            statsArray.push("midrange")
        } else if (i == 4 & selectedType[i] == 1) {
            statsArray.push("three point")
        }
    }

    switch (statsArray.length) {
        case (1):
            stats = statsArray[0] + " stats"
            break;
        case (2):
            stats = statsArray[0] + " and " + statsArray[1] + " stats"
            break;
        case (3):
            stats = statsArray[0] + ", " + statsArray[1] + ", and " + statsArray[2] + " stats"
            break;
    }
    if (selectedType[0] == 1 || statsArray.length == 4) {
        stats = "stats"
    }

    for (i = 0; i < selectedDays.length; i++) {
        if (selectedDays[i] == 1) {
            extra = "th"
            dateNumber = Number(Data[i].Date[0].slice(0, 2))
            dateMonth = Data[i].Date[0].slice((dateNumber.toString().length) + 1)

            if (dateNumber == 1 || dateNumber == 21 || dateNumber == 31) {
                extra = "st"
            } else if (dateNumber == 2 || dateNumber == 22) {
                extra = "nd"
            } else if (dateNumber == 3 || dateNumber == 23) {
                extra = "rd"
            }

            datesArray.push(dateNumber + extra + " of " + dateMonth)
        }
    }
    if (datesArray.length != selectedDays.length) {
        if (datesArray.length > 2) {
            for (i = 0; i < datesArray.length - 1; i++) {
                dates = dates + datesArray[i] + ", "
            }
            dates = dates + "and " + datesArray[datesArray.length - 1]
        } else if (datesArray.length == 1) {
            dates = datesArray[0]
        } else if (datesArray.length == 2) {
            dates = datesArray[0] + " and " + datesArray[1]
        }
    } else {
        dates = "whole season"
    }


    if (AgainstTeams.length > 2) {
        for (i = 0; i < AgainstTeams.length - 1; i++) {
            teams = teams + " the " + AgainstTeams[i] + ", "
        }
        teams = teams + "and the " + AgainstTeams[AgainstTeams.length - 1]
    } else if (AgainstTeams.length == 1) {
        teams = teams + "the " + AgainstTeams[0]
    } else if (AgainstTeams.length == 2) {
        teams = teams + "the " + AgainstTeams[0] + " and the " + AgainstTeams[1]
    }

    if (teams == " the Choc-Tops,  the Traffic Controllers, and the Gentle, Men") {
        teams = "any team"
    }
    for (i = 0; i < selectedPeople.length; i++) {
        if (selectedPeople[i] == 1) {
            peopleArray.push(mainArray.Name[i])
        }
    }

    if (peopleArray.length != selectedPeople.length) {
        if (peopleArray.length > 2) {
            for (i = 0; i < peopleArray.length - 1; i++) {
                names = names + peopleArray[i] + "'s, "
            }
            names = names + " and " + peopleArray[peopleArray.length - 1] + "'s"
        } else if (peopleArray.length == 1) {
            names = peopleArray[0] + "'s"
        } else if (peopleArray.length == 2) {
            names = peopleArray[0] + "'s and " + peopleArray[1] + "'s"
        }
    } else {
        names = "every players"
    }
    if (stats == "" || teams == "" || names == "" || dates == "") {
        document.getElementById("simpleText").innerHTML = "Please fill" + span + " all the " + spanEnd + "criteria."
        document.getElementById("saveTableButton").style.display = "none"
    } else {
        document.getElementById("simpleText").innerHTML = '"' + SectionA + span + names + spanEnd + " " + span + stats + spanEnd + SectionB + span + dates + spanEnd + SectionC + span + teams + spanEnd + "." + '"'
        document.getElementById("saveTableButton").style.display = "initial"
    }

}



function logClicks() {

    colorA = "rgba(100,100,100,0.2)"
    colorB = "rgba(100,100,100,0.35)"
    selectedType = returnBoxStatus(["allStatsCB", "ptsStatsCB", "finStatsCB", "midStatsCB", "thrStatsCB"])
    selectedTeams = returnBoxStatus(["allTeamsCB", "CTCB", "TCCB", "GMCB"])
    selectedPeopleArray = []
    selectedDaysArray = []
    for (i = 0; i < document.getElementById("peopleTable").rows.length - 1; i++) {
        selectedPeopleArray.push("peopleTable" + i)
    }
    for (i = 0; i < document.getElementById("daysTable").rows.length - 1; i++) {
        selectedDaysArray.push("daysTable" + i)
    }
    selectedPeople = returnBoxStatus(selectedPeopleArray)
    selectedDays = returnBoxStatus(selectedDaysArray)

        for (i = 0; i < selectedPeople.length; i++) {
            if (selectedPeople[i] == 0) {
                document.getElementById("allPeople").checked = false;
                break;
            }
            if (i == selectedPeople.length-1) {
                document.getElementById("allPeople").checked = true;
            }
        }

        for (i = 0; i < selectedDays.length; i++) {
            if (selectedDays[i] == 0) {
                document.getElementById("allDays").checked = false;
                break;
            } if (i == selectedDays.length-1) {
                document.getElementById("allDays").checked = true;
            }
        }

    for (i = 1; i < selectedType.length; i++) {
        if (selectedType[i] != 1) {
            document.getElementById('allStatsCB').checked = false
            selectedType = returnBoxStatus(["allStatsCB", "ptsStatsCB", "finStatsCB", "midStatsCB", "thrStatsCB"])
            break;
        } else if (i == selectedType.length - 1) {
            document.getElementById('allStatsCB').checked = true
        }
    }
    for (i = 1; i < selectedTeams.length; i++) {
        if (selectedTeams[i] != 1) {
            document.getElementById('allTeamsCB').checked = false
            selectedTeams = returnBoxStatus(["allTeamsCB", "CTCB", "TCCB", "GMCB"])
            break;
        } else if (i == selectedTeams.length - 1) {
            document.getElementById('allTeamsCB').checked = true
        }
    }

    DataToUse = []
    AgainstTeams = []
    MissedData = []
    for (i = 0; i < selectedDays.length; i++) {
        if (selectedDays[i] == 1) {
            DataToUse.push(Data[i])
            MissedData.push(Missed[i])
        }
    }
    for (i = 0; i < selectedTeams.length; i++) {
        if (selectedTeams[i] == 1 && i != 0) {
            switch (i) {
                case 1:
                    AgainstTeams.push("Choc-Tops")
                    break;
                case 2:
                    AgainstTeams.push("Traffic Controllers")
                    break;
                case 3:
                    AgainstTeams.push("Gentle, Men")
                    break;
            }
        } else if (selectedTeams[i] == 1 && i == 0) {
            AgainstTeams.push("Choc-Tops")
            AgainstTeams.push("Traffic Controllers")
            AgainstTeams.push("Gentle, Men")
            break;
        }
    }

    BaseDataTwo = {
        "Name": mainArray.Name,
        "PPG": [],
        "TP": [],
        "FPG": [],
        "TF": [],
        "MPG": [],
        "TM": [],
        "TPG": [],
        "TT": [],
        "Missed": []
    }

    for (y = 0; y < mainArray.Name.length; y++) {
        LP = 0
        LF = 0
        LM = 0
        LT = 0
        LMD = 0
        for (i = 0; i < DataToUse.length; i++) {
            for (x = 0; x < DataToUse[i].Winner.length; x++) {
                if (DataToUse[i].Scorer[x] == mainArray.Name[y]) {
                    for (a = 0; a < AgainstTeams.length; a++) {
                        if (DataToUse[i].Loser[x] == AgainstTeams[a]) {
                            switch (DataToUse[i].Type[x]) {
                                case "Finish":
                                    LF += 1
                                    break;
                                case "Midrange":
                                    LM += 1
                                    break;
                                case "Three Pointer":
                                    LT += 1
                                    break;
                            }
                        }
                    }
                }
            }
            if (MissedData[i].Missed[y] == 1) {
                LMD += 1
            }
        }
        LP = LF + LM + LT + LT
        if (LP == 0 && LMD == DataToUse.length) {
            BaseDataTwo.TP.push("DNP")
            BaseDataTwo.TF.push("DNP")
            BaseDataTwo.TM.push("DNP")
            BaseDataTwo.TT.push("DNP")
            BaseDataTwo.Missed.push("DNP")
            BaseDataTwo.PPG.push("DNP")
            BaseDataTwo.FPG.push("DNP")
            BaseDataTwo.MPG.push("DNP")
            BaseDataTwo.TPG.push("DNP")
        } else {
            BaseDataTwo.TP.push(LP)
            BaseDataTwo.TF.push(LF)
            BaseDataTwo.TM.push(LM)
            BaseDataTwo.TT.push(LT)
            BaseDataTwo.Missed.push(LMD)
            BaseDataTwo.PPG.push((Math.round(100 * (LP / (DataToUse.length - LMD)))) / 100)
            BaseDataTwo.FPG.push((Math.round(100 * (LF / (DataToUse.length - LMD)))) / 100)
            BaseDataTwo.MPG.push((Math.round(100 * (LM / (DataToUse.length - LMD)))) / 100)
            BaseDataTwo.TPG.push((Math.round(100 * (LT / (DataToUse.length - LMD)))) / 100)
        }

    }

    BaseDataThree = {
        "Name": [],
        "PPG": [],
        "TP": [],
        "FPG": [],
        "TF": [],
        "MPG": [],
        "TM": [],
        "TPG": [],
        "TT": [],
        "Missed": []
    }

    for (i = 0; i < BaseDataTwo.Name.length; i++) {
        if (selectedPeople[i] == 1) {
            BaseDataThree.Name.push(BaseDataTwo.Name[i])
            BaseDataThree.PPG.push(BaseDataTwo.PPG[i])
            BaseDataThree.TP.push(BaseDataTwo.TP[i])
            BaseDataThree.FPG.push(BaseDataTwo.FPG[i])
            BaseDataThree.TF.push(BaseDataTwo.TF[i])
            BaseDataThree.MPG.push(BaseDataTwo.MPG[i])
            BaseDataThree.TM.push(BaseDataTwo.TM[i])
            BaseDataThree.TPG.push(BaseDataTwo.TPG[i])
            BaseDataThree.TT.push(BaseDataTwo.TT[i])
            BaseDataThree.Missed.push(BaseDataTwo.Missed[i])
        }
    }

    table = document.getElementById("fullStatsTable");

    var tableBody = table.getElementsByTagName('tbody')[0];

    // Check if tbody exists
    if (tableBody) {
        while (tableBody.firstChild) {
            tableBody.removeChild(tableBody.firstChild);
        }
    }

    row = table.insertRow(-1)
    upto = 0

    for (i = 0; i < selectedType.length; i++) {
        if (selectedType[i] == 1) {
            if (i == 0) {
                cell1 = row.insertCell(0)
                cell2 = row.insertCell(1)
                cell3 = row.insertCell(2)
                cell4 = row.insertCell(3)
                cell5 = row.insertCell(4)
                cell6 = row.insertCell(5)
                cell7 = row.insertCell(6)
                cell8 = row.insertCell(7)
                cell1.innerHTML = "PTS"
                cell2.innerHTML = "FIN"
                cell3.innerHTML = "MID"
                cell4.innerHTML = "3PT"
                cell5.innerHTML = "PTS"
                cell6.innerHTML = "FIN"
                cell7.innerHTML = "MID"
                cell8.innerHTML = "3PT"
                cell1.style.backgroundColor = colorA
                cell1.style.fontWeight = "bold"
                cell2.style.backgroundColor = colorA
                cell2.style.fontWeight = "bold"
                cell3.style.backgroundColor = colorA
                cell3.style.fontWeight = "bold"
                cell4.style.backgroundColor = colorA
                cell4.style.fontWeight = "bold"
                cell5.style.backgroundColor = colorB
                cell5.style.fontWeight = "bold"
                cell6.style.backgroundColor = colorB
                cell6.style.fontWeight = "bold"
                cell7.style.backgroundColor = colorB
                cell7.style.fontWeight = "bold"
                cell8.style.backgroundColor = colorB
                cell8.style.fontWeight = "bold"
                break;
            } else {
                cell = row.insertCell(upto)
                cellExtra = row.insertCell(-1)
                switch (i) {
                    case 1:
                        cell.innerHTML = "PTS"
                        cell.style.backgroundColor = colorA
                        cellExtra.innerHTML = "PTS"
                        cellExtra.style.backgroundColor = colorB
                        cell.style.fontWeight = "bold"
                        cellExtra.style.fontWeight = "bold"
                        break;
                    case 2:
                        cell.innerHTML = "FIN"
                        cell.style.backgroundColor = colorA
                        cellExtra.innerHTML = "FIN"
                        cellExtra.style.backgroundColor = colorB
                        cell.style.fontWeight = "bold"
                        cellExtra.style.fontWeight = "bold"
                        break;
                    case 3:
                        cell.innerHTML = "MID"
                        cell.style.backgroundColor = colorA
                        cellExtra.innerHTML = "MID"
                        cellExtra.style.backgroundColor = colorB
                        cell.style.fontWeight = "bold"
                        cellExtra.style.fontWeight = "bold"
                        break;
                    case 4:
                        cell.innerHTML = "3PT"
                        cell.style.backgroundColor = colorA
                        cellExtra.innerHTML = "3PT"
                        cellExtra.style.backgroundColor = colorB
                        cell.style.fontWeight = "bold"
                        cellExtra.style.fontWeight = "bold"
                        break;
                }
                upto += 1

            }
        }
    }
    nameRow = row.insertCell(0)
    nameRow.innerHTML = "Name"
    nameRow.style.fontWeight = "bold"

    columns = row.cells.length

    row = table.insertRow(0)
    cellA = row.insertCell(0)
    cellB = row.insertCell(1)
    cellC = row.insertCell(2)

    cellB.innerHTML = "Averages"
    cellC.innerHTML = "Totals"
    cellB.colSpan = (columns - 1) / 2
    cellC.colSpan = (columns - 1) / 2
    cellB.style.backgroundColor = colorA
    cellC.style.backgroundColor = colorB
    cellB.style.fontWeight = "bold"
    cellC.style.fontWeight = "bold"
    cellB.style.width = "33.33%"
    cellC.style.width = "33.33%"

    cellA.style.border = "1px solid rgba(150, 150, 150,0)"
    cellA.style.borderBottom = "1px solid rgb(150,150,150)"
    cellA.style.borderRight = "1px solid rgb(150,150,150)"

    function findLargestNumber(array) {
        if (array.length === 0) {
            return null; // Return null for an empty array
        }

        let max = array[0]; // Assume the first element is the largest

        for (let i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i]; // Update max if a larger element is found
            }
        }

        return max;
    }

    function findSmallestNumber(array) {
        if (array.length === 0) {
            return null; // Return null for an empty array
        }

        let min = array[0]; // Assume the first element is the largest

        for (let i = 1; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i]; // Update max if a larger element is found
            }
        }

        return min;
    }


    function addTableData(row, data, backgroundColour = "rgba(0,0,0,0)", index) {
        cell = row.insertCell(-1)
        cell.innerHTML = data[index]
        cell.style.backgroundColor = backgroundColour
        cell.style.fontWeight = "400"
        if (findLargestNumber(data) == data[index]) {
            cell.style.color = "rgb(0,180,0)"
            cell.style.fontWeight = "900"
        }
        if (findSmallestNumber(data) == data[index]) {
            cell.style.color = "rgb(150,0,0)"
        }
    }

    for (i = 0; i < BaseDataThree.Name.length; i++) {
        x = 0
        row = table.insertRow(-1)
        cell1 = row.insertCell(x)
        cell1.innerHTML = BaseDataThree.Name[i]
        x += 1
        if (selectedType[0] == 1) {
            addTableData(row, BaseDataThree.PPG, colorA, i)
            addTableData(row, BaseDataThree.FPG, colorA, i)
            addTableData(row, BaseDataThree.MPG, colorA, i)
            addTableData(row, BaseDataThree.TPG, colorA, i)
            addTableData(row, BaseDataThree.TP, colorB, i)
            addTableData(row, BaseDataThree.TF, colorB, i)
            addTableData(row, BaseDataThree.TM, colorB, i)
            addTableData(row, BaseDataThree.TT, colorB, i)
        } else {
            if (selectedType[1] == 1) {
                addTableData(row, BaseDataThree.PPG, colorA, i)
            }
            if (selectedType[2] == 1) {
                addTableData(row, BaseDataThree.FPG, colorA, i)
            }
            if (selectedType[3] == 1) {
                addTableData(row, BaseDataThree.MPG, colorA, i)
            }
            if (selectedType[4] == 1) {
                addTableData(row, BaseDataThree.TPG, colorA, i)
            }
            if (selectedType[1] == 1) {
                addTableData(row, BaseDataThree.TP, colorB, i)
            }
            if (selectedType[2] == 1) {
                addTableData(row, BaseDataThree.TF, colorB, i)
            }
            if (selectedType[3] == 1) {
                addTableData(row, BaseDataThree.TM, colorB, i)
            }
            if (selectedType[4] == 1) {
                addTableData(row, BaseDataThree.TT, colorB, i)
            }
        }

    }


    text(selectedType, AgainstTeams, selectedDays, selectedPeople)


}


for (i = 0; i < document.querySelectorAll('input[type=checkbox]').length; i++) {
    document.querySelectorAll('input[type=checkbox]')[i].onclick = function () { logClicks() }
}