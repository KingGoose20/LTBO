function header(location) {
    const template = document.createElement('template');

    template.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <div class="Whole" id="Whole">
        <div class="w-container">
        <a href="replacerindex.html" class="heading w--current" style="padding:8px;">
            <h1 class="title animate-character"><img src="" style="" class="headingImage"><span class="heading-hide">   Lunch Time Basketballers</span><span class="inverseheading-hide">   LTBO</span></h1>
        </a>
        <nav class="navbar heading-links w-nav-menu">
            <ul class="nav-menu">
            <li class="nav-item">
            <a href="replacerDocumentsAndIco/Holidays.html" class="navigation-link w-nav-link">Holidays Series</a>
        </li>
            <li class="nav-item">
                <a href="replacerDocumentsAndIco/Draft.html" class="navigation-link w-nav-link">The Draft</a>
            </li>
            <li class="nav-item">
                <a href="replacerDocumentsAndIco/Ladder.html" class="navigation-link w-nav-link">Ladder</a>
            </li>
            <li class="nav-item">
                <a href="replacerDocumentsAndIco/Results.html" class="navigation-link w-nav-link">Results</a>
            </li>
            <div class="dropdown nav-item dropdownHide">
                <span class="navigation-link w-nav-link">Stats</span>
                <div class="dropdown-content">
                    <a href="replacerDocumentsAndIco/Stats.html" class="dropDown-link">Stats Home</a>
                    <a href="replacerDocumentsAndIco/Comparer.html" class="dropDown-link">Player Comparer</a>
                </div>
            </div>
            <div class="dropdown nav-item dropdownHide">
                <span class="navigation-link w-nav-link">More</span>
                <div class="dropdown-content">
                    <a href="replacerDocumentsAndIco/Contact.html" class="dropDown-link">Contact Us</a>
                    <a href="replacerDocumentsAndIco/LeagueHome.html?Team=LTBO" class="dropDown-link">League Home</a>
                    <a href="replacerDocumentsAndIco/TeamHome.html?Team=CT" class="dropDown-link">Choc-Tops Home</a>
                    <a href="replacerDocumentsAndIco/TeamHome.html?Team=TC" class="dropDown-link">Traffic Controllers Home</a>
                    <a href="replacerDocumentsAndIco/TeamHome.html?Team=GM" class="dropDown-link">Gentle, Men Home</a>
                    <a href="replacerDocumentsAndIco/OfficialGame.html" class="dropDown-link">Official Game</a>
                    <a href="https://365asas-my.sharepoint.com/:f:/g/personal/011445_asas_qld_edu_au/Enw3biOiY2xAo3nd_oihdAEBjsB7F500EKl6UYgd5-ONqQ?e=1KAlm2" class="dropDown-link" target="_blank">Visual Database</a>
                </div>
            </div>
            <li class="nav-item dropdownShow">
                <a href="replacerDocumentsAndIco/Stats.html" class="navigation-link w-nav-link">Stats Home</a>
            </li>
            <li class="nav-item dropdownShow">
                <a href="replacerDocumentsAndIco/Comparer.html" class="navigation-link w-nav-link">Player Comparer</a>
            </li>
            <li class="nav-item dropdownShow">
                <a href="replacerDocumentsAndIco/Contact.html" class="navigation-link w-nav-link">Contact Us</a>
            </li>
            <li class="nav-item dropdownShow">
                <a href="replacerDocumentsAndIco/LeagueHome?Team=LTBO" class="navigation-link w-nav-link">League Home</a>
            </li>
            <li class="nav-item dropdownShow">
                <a href="replacerDocumentsAndIco/TeamHome.html?Team=CT" class="navigation-link w-nav-link">Choc-Tops Home</a>
            </li>
            <li class="nav-item dropdownShow">
                <a href="replacerDocumentsAndIco/TeamHome.html?Team=TC" class="navigation-link w-nav-link">Traffic Controllers Home</a>
            </li>
            <li class="nav-item dropdownShow">
                <a href="replacerDocumentsAndIco/TeamHome.html?Team=GM" class="navigation-link w-nav-link">Gentle, Men Home</a>
            </li>
            <li class="nav-item dropdownShow">
                <a href="replacerDocumentsAndIco/OfficialGame.html" class="navigation-link w-nav-link">Official Game</a>
            </li>
            <li class="nav-item dropdownShow">
            <a href="https://365asas-my.sharepoint.com/:f:/g/personal/011445_asas_qld_edu_au/Enw3biOiY2xAo3nd_oihdAEBjsB7F500EKl6UYgd5-ONqQ?e=1KAlm2" class="navigation-link w-nav-link" target="_blank">Visual Database</a>
        </li>

            </ul>
            <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            </div>
        </nav>
        </div>
        </div>
    `;

    if (location == "news") {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "../../");
        template.innerHTML = template.innerHTML.replace('w-nav-link">News</a>', 'w-nav-link w--current">News</a>')
    } else if (location == "index") {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "")
    } else if (location == "docs" || location == "admin") {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "../")
    }

    currentLocation = window.location
    myKeyValues = currentLocation.search
    urlParams = new URLSearchParams(myKeyValues)
    SelectedTeam = urlParams.get("Team")

    if (SelectedTeam == "CT") {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "../");
        template.innerHTML = template.innerHTML.replace('Images/Logo.png" style="width:0.75em"', 'Images/CT_Final.png" style="width: 1.5em"')
        template.innerHTML = template.innerHTML.replace('animate-character', 'animate-characterCT')
    }

    if (SelectedTeam == "GM") {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "../");
        template.innerHTML = template.innerHTML.replace('Images/Logo.png" style="width:0.75em"', 'Images/GM_Final.png" style="width: 1.5em"')
        template.innerHTML = template.innerHTML.replace('animate-character', 'animate-characterGM')
    }

    if (SelectedTeam == "TC") {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "../");
        template.innerHTML = template.innerHTML.replace('Images/Logo.png" style="width:0.75em"', 'Images/TC_Final.png" style="width: 0.75em"')
        template.innerHTML = template.innerHTML.replace('animate-character', 'animate-characterTC')
    }



    switch (document.title.slice(0, -7)) {
        case "Ladder":
            template.innerHTML = template.innerHTML.replace('w-nav-link">Ladder</a>', 'w-nav-link w--current">Ladder</a>')
            break;
        case "Results":
            template.innerHTML = template.innerHTML.replace('w-nav-link">Results</a>', 'w-nav-link w--current">Results</a>')
            break;
        case "News":
            template.innerHTML = template.innerHTML.replace('w-nav-link">News</a>', 'w-nav-link w--current">News</a>')
            break;
        case "Stat Machine":
            template.innerHTML = template.innerHTML.replace('">Stat Machine', ' w-nav-link w--current">Stat Machine')
            template.innerHTML = template.innerHTML.replace('class="navigation-link w-nav-link">Stat Machine</a>', 'class="navigation-link w-nav-link w--current">Stat Machine</a>')
            template.innerHTML = template.innerHTML.replace('<span class="navigation-link w-nav-link">Stats</span>', '<span class="navigation-link w-nav-link w--current">Stats</span>')
            break;
        case "Stats":
            template.innerHTML = template.innerHTML.replace('">Stats Home', ' w-nav-link w--current">Stats Home')
            template.innerHTML = template.innerHTML.replace('class="navigation-link w-nav-link">Stats Home</a>', 'class="navigation-link w-nav-link w--current">Stats Home</a>')
            template.innerHTML = template.innerHTML.replace('<span class="navigation-link w-nav-link">Stats</span>', '<span class="navigation-link w-nav-link w--current">Stats</span>')
            break;
        case "Player Comparer":
            template.innerHTML = template.innerHTML.replace('">Player Comparer', ' w-nav-link w--current">Player Comparer')
            template.innerHTML = template.innerHTML.replace('class="navigation-link w-nav-link">Player Comparer</a>', 'class="navigation-link w-nav-link w--current">Player Comparer</a>')
            template.innerHTML = template.innerHTML.replace('<span class="navigation-link w-nav-link">Stats</span>', '<span class="navigation-link w-nav-link w--current">Stats</span>')
            break;
        case "Contact":
            template.innerHTML = template.innerHTML.replace('">Contact Us', ' w-nav-link w--current">Contact Us')
            template.innerHTML = template.innerHTML.replace('class="navigation-link w-nav-link">Contact Us</a>', 'class="navigation-link w-nav-link w--current">Contact Us</a>')
            template.innerHTML = template.innerHTML.replace('<span class="navigation-link w-nav-link">More</span>', '<span class="navigation-link w-nav-link w--current">More</span>')
            break;
        case "League Home":
            template.innerHTML = template.innerHTML.replace('">League Home', ' w-nav-link w--current">League Home')
            template.innerHTML = template.innerHTML.replace('class="navigation-link w-nav-link">League Home</a>', 'class="navigation-link w-nav-link w--current">League Home</a>')
            template.innerHTML = template.innerHTML.replace('<span class="navigation-link w-nav-link">More</span>', '<span class="navigation-link w-nav-link w--current">More</span>')
            break;
        case "Choc-Tops":
            template.innerHTML = template.innerHTML.replace('">Choc-Tops Home', ' w-nav-link w--current">Choc-Tops Home')
            template.innerHTML = template.innerHTML.replace('class="navigation-link w-nav-link">Choc-Tops Home</a>', 'class="navigation-link w-nav-link w--current">Choc-Tops Home</a>')
            template.innerHTML = template.innerHTML.replace('<span class="navigation-link w-nav-link">More</span>', '<span class="navigation-link w-nav-link w--current">More</span>')
            break;
        case "Traffic Controllers":
            template.innerHTML = template.innerHTML.replace('">Traffic Controllers Home', ' w-nav-link w--current">Traffic Controllers Home')
            template.innerHTML = template.innerHTML.replace('class="navigation-link w-nav-link">Traffic Controllers Home</a>', 'class="navigation-link w-nav-link w--current">Traffic Controllers Home</a>')
            template.innerHTML = template.innerHTML.replace('<span class="navigation-link w-nav-link">More</span>', '<span class="navigation-link w-nav-link w--current">More</span>')
            break;
        case "Gentle, Men":
            template.innerHTML = template.innerHTML.replace('">Gentle, Men Home', ' w-nav-link w--current">Gentle, Men Home')
            template.innerHTML = template.innerHTML.replace('class="navigation-link w-nav-link">Gentle, Men Home</a>', 'class="navigation-link w-nav-link w--current">Gentle, Men Home</a>')
            template.innerHTML = template.innerHTML.replace('<span class="navigation-link w-nav-link">More</span>', '<span class="navigation-link w-nav-link w--current">More</span>')
            break;
        case "Official Game":
            template.innerHTML = template.innerHTML.replace('">Official Game', ' w-nav-link w--current">Official Game')
            template.innerHTML = template.innerHTML.replace('class="navigation-link w-nav-link">Official Game</a>', 'class="navigation-link w-nav-link w--current">Official Game</a>')
            template.innerHTML = template.innerHTML.replace('<span class="navigation-link w-nav-link">More</span>', '<span class="navigation-link w-nav-link w--current">More</span>')
            break;
        case "App":
            template.innerHTML = template.innerHTML.replace('w-nav-link">Stats</a>', 'w-nav-link w--current">Stats</a>')
            break;
        case "Draft":
            template.innerHTML = template.innerHTML.replace('w-nav-link">The Draft</a>', 'w-nav-link w--current">The Draft</a>')
            break;
        case "Holidays Series":
            template.innerHTML = template.innerHTML.replace('w-nav-link">Holidays Series</a>', 'w-nav-link w--current">Holidays Series</a>')
            break;

    }
    if (location == "admin") {
        template.innerHTML = template.innerHTML.replace('Lunch Time Basketballers', 'Lunch Time Basketballers | Admin')
        template.innerHTML = template.innerHTML.replace('animate-character', 'animate-character-admin')
    }

    document.getElementById("header").appendChild(template.content);

}







function footer(location) {
    const template = document.createElement('template');

    template.innerHTML = `
        <div class="section accent">
        <div class="w-container">
            <div class="footer">
            <div class="w-container">
                <div class="w-row">
                <div class="spc w-col w-col-6">
                    <h5>About the Lunch Time Basketball Organisation</h5>
                    <p>This website contains all official content relating to the LTBO (Lunch Time Basketball Organisation).</p>
                    <br><br>
                    <a href="https://www.instagram.com/LTBO_official/" style="text-decoration: none;"><p>Official Instagram - <span class="fa fa-instagram" style="position: relative; top: 2px; font-size: 20px;"></span></p></a>
                </div>
                <div class="spc w-col w-col-6">
                    <h5>useful links</h5>
                    <a href="replacerDocumentsAndIco/Ladder.html" class="footer-link">Ladder</a>
                    <a href="replacerDocumentsAndIco/Results.html" class="footer-link">Results</a>
                    <a href="replacerDocumentsAndIco/Stats.html" class="footer-link">Stats</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div class="footer center">
        <div class="w-container">
            <div class="footer-text">© 2023 The Lunchtime Basketball Organisation</a>
            <br>
            <br>
            <a href="replacerImages/Cool Sam.jpg"><img src="replacerImages/Logo.png" style="height: 20%; width:20%;"></a>
            </div>
        </div>
        </div>
    `;


    currentLocation = window.location
    myKeyValues = currentLocation.search
    urlParams = new URLSearchParams(myKeyValues)
    SelectedTeam = urlParams.get("Team")

    if (SelectedTeam == "CT") {
        template.innerHTML = template.innerHTML.replace('<a href="replacerImages/Cool Sam.jpg"><img src="replacerImages/Logo.png" style="height: 20%; width:20%;"></a>', '<a href="replacerImages/Cool Sam.jpg"><img src="replacerImages/Logo.png" style="height: 20%; width:20%;"></a><a href="replacerDocumentsAndIco/CT_Hacks.html"><img src="replacerImages/CT_Final.png" style="height: 30%; width:30%; margin-left: 60px;"></a>')
    }
    if (SelectedTeam == "TC") {
        template.innerHTML = template.innerHTML.replace('<a href="replacerImages/Cool Sam.jpg"><img src="replacerImages/Logo.png" style="height: 20%; width:20%;"></a>', '<a href="replacerImages/Cool Sam.jpg"><img src="replacerImages/Logo.png" style="height: 20%; width:20%;"></a><img src="replacerImages/TC_Final.png" style="height: 24%; width:24%; margin-left: 60px;">')
    }
    if (SelectedTeam == "GM") {
        template.innerHTML = template.innerHTML.replace('<a href="replacerImages/Cool Sam.jpg"><img src="replacerImages/Logo.png" style="height: 20%; width:20%;"></a>', '<a href="replacerImages/Cool Sam.jpg"><img src="replacerImages/Logo.png" style="height: 20%; width:20%;"></a><img src="replacerImages/GM_Final.png" style="height: 30%; width:30%; margin-left: 60px;">')
    }

    if (location == "finals") {
        template.innerHTML = template.innerHTML.replace('<a href="replacerImages/Cool Sam.jpg"><img src="replacerImages/Logo.png" style="height: 20%; width:20%;"></a>', '<a href="replacerImages/Cool Sam.jpg"><img src="replacerImages/Logo.png" style="height: 20%; width:20%;"></a><img src="replacerImages/Finals_Logo.png" style="height: 25%; width:25%; margin-left: 60px;">')
    }
    if (location == "news") {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "../../");
    } else if (location == "index") {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "")
    } else {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "../")
    }

    if (location == "stats") {
        x = `
        accent">
        <div>
            <a href="../Admin/AdminHome.html" class="button fade-inHeading statButton">Click here to go to admin!</a>
            <a href="../Admin/StatTracker.html" class="button fade-inHeading statButton">Click here to go to score tracking app</a>
        </div>
        `;

        template.innerHTML = template.innerHTML.replace('accent">', x)
    }
    if (location == "results" || location == "stats") {
        template.innerHTML = template.innerHTML.replace('accent', "")
    }

    document.getElementById("footer").appendChild(template.content);

}



imageURL = ["mvp", "rules", "champions", "lebron", "ja", "curry", "dwade", "kyrie"]