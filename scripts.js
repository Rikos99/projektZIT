let theme = (document.cookie.search("theme=light") === -1) ? "dark" : "light";
updateTheme();

let nextYear = new Date();
nextYear.setUTCFullYear(new Date().getUTCFullYear() + 1);

/*
if(localStorage.getItem("theme") === null)
{
    localStorage.setItem("theme", "light");
}
*/

window.addEventListener("resize", resizeWindow);

function includeHTML(element)
{
    const body = document.querySelector("body");
    const actualElement = document.createElement(element);
    body.append(actualElement);
    let lblText, filter;
    if(theme === "dark")
    {
        lblText = "Light Mode";
        filter = 1;
    }
    else
    {
        lblText = "Dark Mode";
        filter = 0;
    }

    // Element definitions
    const headerInnerHTML =
        "    <div id='logoAndSiteName'><img alt='logo' src='img/logo.png' style='filter: invert(" + filter +")'>" +
        "    <h1>Osobní stránky Richarda Dluhoše</h1></div>\n" +
        "    <nav>\n" +
        "        <div><a class='navLink' href=\"index.html\">Úvodní stránka</a></div>\n" +
        "        <div><a class='navLink' href=\"page1.html\">Osobní stránka</a></div>\n" +
        "        <div><a class='navLink' href=\"page2.html\">Projekty v rámci 1. semestru</a></div>\n" +
        "    <label for='CB_toggle' id='LBL_toggle'>" + lblText + "</label>" +
        "    <input type='checkbox' id='CB_toggle' value='checked'>" +
        "    </nav>"
    const footerInnerHTML =
        "<p>&#169;2025 Richard Dluhoš (DLU0048)</p>";

    // Adding element definitions to actual elements
    switch(element)
    {
        case "header":
        {
            actualElement.innerHTML = headerInnerHTML;
            break;
        }
        case "footer":
        {
            actualElement.innerHTML = footerInnerHTML;
            break;
        }
    }
}

function updateTheme()
{
    document.querySelector("html").setAttribute("data-theme", theme);
}
document.addEventListener("DOMContentLoaded", function()
{
    // Dark/Light mode switch
    document.getElementById("CB_toggle").addEventListener("change",function()
    {
        // Switch proměnné
        theme = (theme === "dark") ? "light" : "dark";
        // Nastavení stránky na nový theme
        updateTheme();
        document.getElementById("LBL_toggle").innerText = (theme === "dark") ? "Light Mode" : "Dark Mode";
        document.getElementById("logoAndSiteName").children[0].style.filter = (theme === "dark") ? "invert(1)": "invert(0)";
        document.cookie = "theme=" + theme + "; expires=" + nextYear.toUTCString();
    });

    resizeWindow();

    const navChildren = document.getElementsByClassName("navLink");
    for (let i = 0; i < navChildren.length; i++)
    {
        if(navChildren[i].innerHTML === document.title.substring(0, document.title.length - 26))
        {
            navChildren[i].style.fontWeight = "bold";
            navChildren[i].style.color = "var(--ternary-color)"
        }
    }
});

function resizeWindow()
{
    const logo = document.getElementById("logoAndSiteName").children[0].style;
    const title = document.getElementById("logoAndSiteName").children[1].style;
    const main = document.querySelector("main").style;
    const gallery = document.getElementsByClassName("galleryGRID");
    const galleryItems = document.getElementsByClassName("galleryImg");

    // Zobrazení pro mobily (výška je větší než šířka)
    if(window.innerHeight > window.innerWidth)
    {
        // Nastavení pro tlačítka navigace
        for(let i = 0; i < document.querySelector("nav").children.length; i++)
        {
            const elem = document.querySelector("nav").children[i];
            elem.style.display = "block";
            elem.style.fontSize = "4vw";
            // Theme switch "tlačítko"
            if(elem.id === "LBL_toggle")
            {
                elem.style.marginLeft = "0";
                elem.style.float = "none";
            }
            else
            {
                elem.style.borderWidth = "0";
            }
        }
        // Nastavení pro modely na osobní stránce
        for (let i = 0; i < document.getElementsByClassName("modelDIV").length; i++)
        {
            const modelDIV = document.getElementsByClassName("modelDIV")[i];
            modelDIV.style.width = "95vw";
            modelDIV.style.display = "block";
            modelDIV.children[0].style.width = "90vw";
            modelDIV.children[0].style.height = "65vw";
        }

        for (let i = 0; i < gallery.length; i++)
        {
            gallery[i].style.display = "inline";
        }

        for(let j = 0; j < galleryItems.length; j++)
        {
            galleryItems[j].style.width = "70vw";
        }

        logo.width = "25vw";
        logo.height = "25vw";
        logo.margin = "0";
        logo.display = "inline";
        title.fontSize = "7vw";
        title.margin = "2vw 0 0 5px";
        title.display = "inline-flex";
        title.verticalAlign = "center";
        title.textAlign = "center";
        main.fontSize = "14pt"
    }
    // Zobrazení pro PC (šířka je větší než výška)
    else
    {
        // Nastavení pro tlačítka navigace
        for(let i = 0; i < document.querySelector("nav").children.length; i++)
        {
            const elem = document.querySelector("nav").children[i];
            elem.style.display = "inline-block";
            elem.style.fontSize = "1.75vw";
            // Theme switch "tlačítko"
            if(elem.id === "LBL_toggle")
            {
                elem.style.marginLeft = "auto";
                elem.style.float = "right";
            }
            else
            {
                elem.style.borderWidth = "initial";
            }
        }
        // Nastavení pro modely na osobní stránce
        for (let i = 0; i < document.getElementsByClassName("modelDIV").length; i++)
        {
            const modelDIV = document.getElementsByClassName("modelDIV")[i];
            modelDIV.style.width = "49vw";
            modelDIV.style.display = "inline-block";
            modelDIV.children[0].style.width = "45vw";
            modelDIV.children[0].style.height = "30vw";
        }
        // Galerie
        for (let i = 0; i < gallery.length; i++)
        {
            gallery[i].style.display = "grid";
        }
        for(let i = 0; i < galleryItems.length; i++)
        {
            galleryItems[i].style.width = "45vw";
        }


        logo.width = "10vw";
        logo.height = "10vw";
        logo.margin = "initial";
        logo.display = "inline-block";
        title.fontSize = "4vw";
        title.margin = "20px 0 20px 10px";
        title.display = "inline-block";
        title.verticalAlign = "center";
        title.textAlign = "left";
    }
}

