function toggle(id) {
    if (document.getElementById(id).style.display == "none") {
        document.getElementById(id).style.display = "table"
    } else {
        document.getElementById(id).style.display = "none"
    }
    returnBoxStatus(["CTCB"])

}


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

function logClicks() {
    selectedType = returnBoxStatus(["allStatsCB", "ptsStatsCB", "finStatsCB", "midStatsCB", "thrStatsCB"])
    selectedTeams = returnBoxStatus(["allTeamsCB", "CTCB", "TCCB", "GMCB"])
    selectedPeopleArray = []
    selectedDaysArray = []
    for (i = 0; i < document.getElementById("peopleTable").rows.length; i++) {
        selectedPeopleArray.push("peopleTable" + i)
    }
    for (i = 0; i < document.getElementById("daysTable").rows.length; i++) {
        selectedDaysArray.push("daysTable" + i)
    }
    selectedPeople = returnBoxStatus(selectedPeopleArray)
    selectedDays = returnBoxStatus(selectedDaysArray)


    table = document.getElementById("fullStatsTable");
    row = table.insertRow(-1)
    upto = 0

    for (i = 0; i < selectedType.length; i++) {
        if (selectedType[i] == 1) {
            if (i == 0) {
                cell1 = row.insertCell(0)
                cell2 = row.insertCell(1)
                cell3 = row.insertCell(2)
                cell4 = row.insertCell(3)
                cell1.innerHTML = "PTS"
                cell2.innerHTML = "FIN"
                cell3.innerHTML = "MID"
                cell4.innerHTML = "3PT"
                break;
            } else {
                cell = row.insertCell(upto)
                switch (i) {
                    case 1:
                        cell.innerHTML = "PTS"
                        break;
                    case 2:
                        cell.innerHTML = "FIN"
                        break;
                    case 3:
                        cell.innerHTML = "MID"
                        break;
                    case 4:
                        cell.innerHTML = "3PT"
                        break;
                }
                upto += 1

            }
        }
    }
    /*
        for (i = 0; i < array.length; i++) {
            row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
    
            cell1.innerHTML = '<input type="checkbox" id="' + tableID + i + '" name="" value="">'
            cell2.innerHTML = array[i];
            cell2.classList.add("section-heading")
            cell2.classList.add("centered")
            cell2.style.fontSize = "25px";
        }*/

}