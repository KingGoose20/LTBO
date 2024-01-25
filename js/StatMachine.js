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

    for (i = 0; i<BaseDataTwo.Name.length; i++) {
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