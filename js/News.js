NewsTemplate = {
    "ArticleName": [""],
    "ArticleDescription": [""],
    "ArticleDate": [""],
    "ImageA": [""],
    "ImageB": [""],
    "ImageC": [""],
    "ImageD": [""],
    "ArticleLink": [""],
    "ArticleType": [""]
}

Preseason = {
    "ArticleName":["Preseason Recap"],
    "ArticleDescription":["LTBO CEO Angus Walker recaps the preseason, and what to expect to come throughout this season."],
    "ArticleDate":["15/07"],
    "ImageA":["Logo.png"],
    "ImageB":[""],
    "ImageC":[""],
    "ImageD":[""],
    "ArticleLink":["01.html"],
    "ArticleType":["White"]
}

Week1 = {
    "ArticleName": ["Introducing the LTBO Visual Database"],
    "ArticleDescription": ["The LTBO introduces its Visual Database, an easy way to find images and videos of anyone and anything LTBO related."],
    "ArticleDate": ["18/07"],
    "ImageA": ["Logo.png"],
    "ImageB": [""],
    "ImageC": [""],
    "ImageD": [""],
    "ArticleLink": ["02.html"],
    "ArticleType": ["Normal"]
}

Week2 = {
    "ArticleName": [""],
    "ArticleDescription": [""],
    "ArticleDate": [""],
    "ImageA": [""],
    "ImageB": [""],
    "ImageC": [""],
    "ImageD": [""],
    "ArticleLink": [""],
    "ArticleType": [""]
}

Week3 = {
    "ArticleName": [""],
    "ArticleDescription": [""],
    "ArticleDate": [""],
    "ImageA": [""],
    "ImageB": [""],
    "ImageC": [""],
    "ImageD": [""],
    "ArticleLink": [""],
    "ArticleType": [""]
}

Week4 = {
    "ArticleName": [""],
    "ArticleDescription": [""],
    "ArticleDate": [""],
    "ImageA": [""],
    "ImageB": [""],
    "ImageC": [""],
    "ImageD": [""],
    "ArticleLink": [""],
    "ArticleType": [""]
}

Week5 = {
    "ArticleName": [""],
    "ArticleDescription": [""],
    "ArticleDate": [""],
    "ImageA": [""],
    "ImageB": [""],
    "ImageC": [""],
    "ImageD": [""],
    "ArticleLink": [""],
    "ArticleType": [""]
}

Finals = {
    "ArticleName": [""],
    "ArticleDescription": [""],
    "ArticleDate": [""],
    "ImageA": [""],
    "ImageB": [""],
    "ImageC": [""],
    "ImageD": [""],
    "ArticleLink": [""],
    "ArticleType": [""]
}

numberOfElements = 0
elementsToScaleSmall = []
elementsToScaleLarge = []

function createArticles(variableToUse, elementID) {
    isEven = false
    if ((variableToUse.ArticleName.length % 2) == 0) {
        isEven = true
    }
    main = document.getElementById(elementID)
    template = document.getElementsByTagName("template")[0];
    rowToUse = ""
    for (i = 0; i < variableToUse.ArticleName.length; i++) {
        if ((i % 2) == 0) {
            rowToUse = document.createElement("div")
            rowToUse.id = i
            rowToUse.classList.add("NewsHeader")
        }
        clone = template.content.cloneNode(true);
        clone.getElementById("Title").innerHTML = variableToUse.ArticleName[i]
        clone.getElementById("Description").innerHTML = variableToUse.ArticleDescription[i]
        clone.getElementById("Date").innerHTML = variableToUse.ArticleDate[i]
        clone.getElementById("Link").href = "NewsPages/" + variableToUse.ArticleLink[i]
        switch (variableToUse.ArticleType[i]) {
            case "Normal":
                break;
            case "White":
                clone.getElementById("startImages").style.backgroundColor = "rgb(230,230,230)";
                clone.getElementById("Title").style.color = "rgb(0,0,0)"
                clone.getElementById("Description").style.color = "rgb(0,0,0)"
                clone.getElementById("Date").style.color = "rgb(0,0,0)"
                break;
            case "Black":
                clone.getElementById("startImages").style.backgroundColor = "rgb(0,0,0)";
                break;
        }
        if (window.innerWidth > 450) {
            if (variableToUse.ImageA[i] != "" && variableToUse.ImageA != "None") {
                clone.getElementById("ImageA").src = "../Images/" + variableToUse.ImageA[i]
            } else {
                clone.getElementById("ImageA").remove();
            }

            if (variableToUse.ImageB[i] != "" && variableToUse.ImageB != "None") {
                clone.getElementById("ImageB").src = "../Images/" + variableToUse.ImageB[i]
            } else {
                clone.getElementById("ImageB").remove();
            }

            if (variableToUse.ImageC[i] != "" && variableToUse.ImageC != "None") {
                clone.getElementById("ImageC").src = "../Images/" + variableToUse.ImageC[i]
            } else {
                clone.getElementById("ImageC").remove();
            }

            if (variableToUse.ImageD[i] != "" && variableToUse.ImageD != "None") {
                clone.getElementById("ImageD").src = "../Images/" + variableToUse.ImageD[i]
                clone.getElementById("ImageA").style.width = "20%"
                clone.getElementById("ImageB").style.width = "20%"
                clone.getElementById("ImageC").style.width = "20%"
                clone.getElementById("ImageD").style.width = "20%"
            } else {
                clone.getElementById("ImageD").remove();
            }
        } else {
            clone.getElementById("ImageA").remove();
            clone.getElementById("ImageB").remove();
            clone.getElementById("ImageC").remove();
            clone.getElementById("ImageD").remove();
        }

        if ((variableToUse.ArticleName.length % 2) == 0) {
            if ((i % 2) != 0) {

                clone.getElementById("Header").style.float = "left";
            } else {

                clone.getElementById("Header").style.float = "right";
            }
        } else {
            if (i == (variableToUse.ArticleName.length - 1)) {
                clone.getElementById("Header").style.width = "100%";
                clone.getElementById("Header").style.float = "position";
                clone.getElementById("Header").style.marginBottom = "50px"
            } else if ((i % 2) == 0) {
                clone.getElementById("Header").style.float = "right";
            } else {
                clone.getElementById("Header").style.float = "left";
            }
        }

        clone.getElementById("Header").id = "Element" + numberOfElements
        rowToUse.insertBefore(clone, rowToUse.children[0])

        main.insertBefore(rowToUse, main.children[0])
        if (document.getElementById("Element" + numberOfElements).style.float == "left") {
            if (document.getElementById("Element" + (numberOfElements - 1)).querySelector("#startImages").offsetHeight > document.getElementById("Element" + numberOfElements).querySelector("#startImages").offsetHeight) {
                console.log(document.getElementById("Element" + (numberOfElements - 1)).querySelector("#startImages").offsetHeight + " and " + document.getElementById("Element" + numberOfElements).offsetHeight)
                elementsToScaleSmall.push(document.getElementById("Element" + numberOfElements).querySelector("#startImages"))
                elementsToScaleLarge.push(document.getElementById("Element" + (numberOfElements - 1)).querySelector("#startImages"))
            } else {
                elementsToScaleLarge.push(document.getElementById("Element" + numberOfElements).querySelector("#startImages"))
                elementsToScaleSmall.push(document.getElementById("Element" + (numberOfElements - 1)).querySelector("#startImages"))
            }
        }

        numberOfElements += 1
    }
}


function onHover(elementToUse) {
    if (elementToUse.getElementsByTagName("div")[0].style.backgroundColor == "rgb(230, 230, 230)") {
        elementToUse.getElementsByTagName("h3")[0].classList.add("TitleHoverInverse")
        elementToUse.getElementsByTagName("p")[0].classList.add("TitleHoverInverse")
        elementToUse.getElementsByTagName("h5")[0].classList.add("TitleHoverInverse")
    } else {
        elementToUse.getElementsByTagName("h3")[0].classList.add("TitleHover")
        elementToUse.getElementsByTagName("p")[0].classList.add("TitleHover")
        elementToUse.getElementsByTagName("h5")[0].classList.add("TitleHover")
    }

}

function offHover(elementToUse) {
    elementToUse.getElementsByTagName("h3")[0].classList.remove("TitleHover")
    elementToUse.getElementsByTagName("p")[0].classList.remove("TitleHover")
    elementToUse.getElementsByTagName("h5")[0].classList.remove("TitleHover")
    elementToUse.getElementsByTagName("h3")[0].classList.remove("TitleHoverInverse")
    elementToUse.getElementsByTagName("p")[0].classList.remove("TitleHoverInverse")
    elementToUse.getElementsByTagName("h5")[0].classList.remove("TitleHoverInverse")
}

function scaleArticles() {
    if (window.innerWidth > 800) {
        for (i = 0; i < elementsToScaleSmall.length; i++) {
            elementsToScaleSmall[i].style.height = elementsToScaleLarge[i].offsetHeight + "px"
            elementsToScaleSmall[i].querySelector("#Description").style.height = elementsToScaleLarge[i].querySelector("#Description").offsetHeight + "px"
        }
    }
}
window.addEventListener('DOMContentLoaded', (event) => {
    scaleArticles()

});

$(window).resize(function () {
    scaleArticles()
});	