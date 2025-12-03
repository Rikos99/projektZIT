if(localStorage.getItem("theme") === null)
{
    localStorage.setItem("theme", "light");
}

updateTheme();

window.addEventListener("resize", resizeWindow);

function includeHTML(element)
{
    const body = document.querySelector("body");
    const actualElement = document.createElement(element);
    body.append(actualElement);
    let lblText;
    if(localStorage.getItem("theme") === "dark")
    {
        lblText = "Light Mode";
    }
    else
    {
        lblText = "Dark Mode";
    }

    // Element definitions
    const headerInnerHTML =
        "    <h1>Osobní stránky Richarda Dluhoše</h1>\n" +
        "    <nav>\n" +
        "        <div><a class='navLink' href=\"index.html\">Úvodní stránka</a></div>\n" +
        "        <div><a class='navLink' href=\"page1.html\">Osobní stránka</a></div>\n" +
        "        <div><a class='navLink' href=\"page2.html\">Projekty v rámci 1. semestru</a></div>\n" +
        "    <label for='CB_toggle' id='LBL_toggle'>" + lblText + "</label>" +
        "    <input type='checkbox' id='CB_toggle' value='checked'>" +
        "    </nav>\n"
    const footerInnerHTML =
        "<p>&#169;2025 Richard Dluhoš (DLU0048)</p>\n";

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
    if(localStorage.getItem("theme") === "dark") // Dark mode
    {
        document.querySelector("html").setAttribute("data-theme", "dark");
    }
    else // Light mode
    {
        document.querySelector("html").setAttribute("data-theme", "light");
    }
}

function updateThemeLabel()
{
    if(localStorage.getItem("theme") === "dark") // Dark mode
    {
        document.getElementById("LBL_toggle").innerText = "Light Mode";
    }
    else // Light mode
    {
        document.getElementById("LBL_toggle").innerText = "Dark Mode";
    }
}

document.addEventListener("DOMContentLoaded", function()
{
    const toggle = document.getElementById("CB_toggle");
    toggle.addEventListener("change",function()
    {
        localStorage.getItem("theme") === "dark" ? localStorage.setItem("theme", "light") : localStorage.setItem("theme", "dark");
        updateTheme();
        updateThemeLabel();
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
    if(window.innerHeight > window.innerWidth)
    {
        for(let i = 0; i < document.querySelector("nav").children.length; i++)
        {
            const elem = document.querySelector("nav").children[i];
            elem.style.display = "block";
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

        for (let i = 0; i < document.getElementsByClassName("modelDIV").length; i++)
        {
            const modelDIV = document.getElementsByClassName("modelDIV")[i];
            modelDIV.style.width = "95vw";
            modelDIV.style.display = "block";
            modelDIV.children[0].style.width = "90vw";
            modelDIV.children[0].style.height = "65vw";
        }
    }
    else
    {
        for(let i = 0; i < document.querySelector("nav").children.length; i++)
        {
            const elem = document.querySelector("nav").children[i];
            elem.style.display = "inline-block";
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

        for (let i = 0; i < document.getElementsByClassName("modelDIV").length; i++)
        {
            const modelDIV = document.getElementsByClassName("modelDIV")[i];
            modelDIV.style.width = "49vw";
            modelDIV.style.display = "inline-block";
            modelDIV.children[0].style.width = "45vw";
            modelDIV.children[0].style.height = "30vw";
        }
    }
}

