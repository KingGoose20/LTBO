oPlayers = []
dPlayers = []
oDescription = ""
dDescription = ""

function LogPlayers() {
    o = document.getElementById("oPlayer")
    d = document.getElementById("dPlayer")
    oPlayers.push(o.options[o.selectedIndex].text)
    dPlayers.push(d.options[d.selectedIndex].text)
    document.getElementById("number").innerHTML = oPlayers.length + 1
    document.getElementById("oPlayersTable").childNodes[(oPlayers.length*2)+1].innerHTML = o.options[o.selectedIndex].text
    document.getElementById("dPlayersTable").childNodes[(dPlayers.length*2)+1].innerHTML = d.options[d.selectedIndex].text

    alert("Logged")
}


function SaveDetails() {
    oDescription = document.getElementById("offensiveDescription").value
    dDescription = document.getElementById("defensiveDescription").value
    document.getElementById("dDescriptionTable").childNodes[3].innerHTML = dDescription
    document.getElementById("oDescriptionTable").childNodes[3].innerHTML = oDescription
}

function exportToEmail() {
    elements = ["", "", "", ""]
    for (i = 0; i<4; i++) {
        if (i < 2) {
            if (i==0) {
                middle = ""
                for (x = 0; x<oPlayers.length; x++) {
                    middle = middle + '"' + oPlayers[x] + '"'
                    if (x+1 < oPlayers.length) {
                        middle = middle + ','
                    }
                }
                elements[i] = '"Offensive":[' + middle + '],'
            } else {
                middle = ""
                for (x = 0; x<dPlayers.length; x++) {
                    middle = middle + '"' + dPlayers[x] + '"'
                    if (x+1 < dPlayers.length) {
                        middle = middle + ','
                    }
                }
                elements[i] = '"Defensive":[' + middle + '],'
            }

        } else {
            if (i == 2) {
                elements[i] = '"OffensiveDescription":["' + oDescription + '"],'
            } else {
                elements[i] = '"DefensiveDescription":["' + dDescription + '"]'
            }
        }
    }
    toExport = elements[0] + "\n" + elements[1] + "\n" + elements[2] + "\n" + elements[3];
    console.log(toExport)

    // Copy the text inside the text field
    navigator.clipboard.writeText(toExport);

    // Alert the copied text
    alert("The following text has been copied to the clipboard: \n\n" + toExport + "\n\nPlease send me this directly.");
    OurDate = new Date()
    extraParams = 'subject=All Teams from the ' + (OurDate.getDate() + "/" + (OurDate.getMonth() + 1)) + "&body=" + elements[0] + "%0D%0A" + elements[1] + "%0D%0A" + elements[2] + "%0D%0A" + elements[3];
    window.open('mailto:011445@asas.qld.edu.au?' + extraParams);
}