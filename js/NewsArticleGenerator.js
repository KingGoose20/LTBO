function CreateArticle() {
    Name = document.getElementById("name").value
    Description = document.getElementById("description").value
    date = document.getElementById("date").value
    images = []
    for (i = 0; i < 4; i++) {
        x="";
        switch (i) {
            case 0:
                x = document.getElementById("imageA")
                break;
            case 1:
                x = document.getElementById("imageB")
                break;
            case 2:
                x = document.getElementById("imageC")
                break;
            case 3:
                x = document.getElementById("imageD")
                break;

        }
        switch (x.options[x.selectedIndex].text) {
            case "Main Logo" :
                images.push("Logo.png")
                break;
            case "Choc-Tops" :
                images.push("CT_Final.png")
                break;
            case "Traffic Controllers" :
                images.push("TC_Final.png")
                break;
            case "Gentle Men" :
                images.push("GM_Final.png")
                break;
            case "Finals" :
                images.push("Finals_Logo.png")
                break;
            case "None" :
                images.push("")
                break;
        }
    }
    link = document.getElementById("link").value
    y = document.getElementById("colour")
    colour = y.options[y.selectedIndex].text

    z = document.getElementById("week")
    selectedWeek = z.options[z.selectedIndex].text
    
    switch (selectedWeek) {
        case "Preseason":
            weekVariable = Preseason
            break;
        case "Week 1":
            weekVariable = Week1
            break;
        case "Week 2":
            weekVariable = Week2
            break;
        case "Week 3":
            weekVariable = Week3
            break;
        case "Week 4":
            weekVariable = Week4
            break;
        case "Week 5":
            weekVariable = Week5
            break;
        case "Finals":
            weekVariable = Finals
            break;
    }

    personal = []
    partA = '"ArticleName":['
    partA = addElements(partA, "", false, weekVariable.ArticleName, Name)

    partB = '"ArticleDescription":['
    partB = addElements(partB, "", false, weekVariable.ArticleDescription, Description)

    partC = '"ArticleDate":['
    partC = addElements(partC, "", false, weekVariable.ArticleDate, date)

    partD = '"ImageA":['
    partD = addElements(partD, "", false, weekVariable.ImageA, images[0])

    partE = '"ImageB":['
    partE = addElements(partE, "", false, weekVariable.ImageB, images[1])

    partF = '"ImageC":['
    partF = addElements(partF, "", false, weekVariable.ImageC, images[2])

    partG = '"ImageD":['
    partG = addElements(partG, "", false, weekVariable.ImageD, images[3])

    partH = '"ArticleLink":['
    partH = addElements(partH, "", false, weekVariable.ArticleLink, link)

    partI = '"ArticleType":['
    partI = addElements(partI, "", true, weekVariable.ArticleType, colour)

    allTogether = partA + "\n" + partB + "\n" + partC + "\n" + partD + "\n" + partE + "\n" + partF + "\n" + partG + "\n" + partH + "\n" + partI
    console.log(allTogether)
    navigator.clipboard.writeText(allTogether);
    alert("The element has been copied to the clipboard, ready to paste!")
}

function addElements(variableToAddTo, startingPart, isEnd, whatToAdd, extraElement) {
    for (i = 0; i < whatToAdd.length; i++) {
        variableToAddTo = variableToAddTo + '"' + whatToAdd[i] + '",'
    }
    variableToAddTo = variableToAddTo + '"' + extraElement + '"]'
    if (!isEnd) {
        variableToAddTo = variableToAddTo + ","
    }
    return variableToAddTo
}
