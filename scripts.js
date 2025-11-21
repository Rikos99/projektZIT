let today = new Date();
today.setUTCFullYear(today.getUTCFullYear() + 1);

function includeHTML(element)
{
    const body = document.querySelector("body");
    const actualElement = document.createElement(element);
    body.append(actualElement);

    // Element definitions
    const headerInnerHTML =
        "    <h1>Osobní stránky Richarda Dluhoše</h1>\n" +
        "    <nav>\n" +
        "        <div><a class='navLink' href=\"index.html\">Úvodní stránka</a></div>\n" +
        "        <div><a class='navLink' href=\"page1.html\">Osobní stránka</a></div>\n" +
        "        <div><a class='navLink' href=\"page2.html\">Projekty v rámci 1. semestru</a></div>\n" +
        "    <label for='CB_toggle' id='LBL_toggle'>Dark Mode</label>" +
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

function switchTheme()
{
    const label = document.getElementById("LBL_toggle");
    if(document.cookie.search("light") !== -1   ) // Dark mode
    {
        console.log("Switched to dark mode");
        label.innerText = "Light Mode";
        document.querySelector("html").setAttribute("data-theme", "dark");
        document.cookie = "theme=dark; expires=" + today.toUTCString();
    }
    else // Light mode
    {
        console.log("Switched to light mode");
        label.innerText = "Dark Mode";
        document.querySelector("html").setAttribute("data-theme", "light");
        document.cookie = "theme=light; expires=" + today.toUTCString();
    }
}

document.addEventListener("DOMContentLoaded", function()
{
    const toggle = document.getElementById("CB_toggle");
    toggle.addEventListener("change", function()
    {
        switchTheme(toggle.checked);
    });

    const label = document.getElementById("LBL_toggle");
    if(document.cookie.search("light") === -1   ) // Dark mode
    {
        console.log("Switched to dark mode");
        label.innerText = "Light Mode";
        document.querySelector("html").setAttribute("data-theme", "dark");
        document.cookie = "theme=dark; expires=" + today.toUTCString();
    }
    else // Light mode
    {
        console.log("Switched to light mode");
        label.innerText = "Dark Mode";
        document.querySelector("html").setAttribute("data-theme", "light");
        document.cookie = "theme=light; expires=" + today.toUTCString();
    }
    const navChildren = document.getElementsByClassName("navLink");

    console.log(navChildren.length)
    for (let i = 0; i < navChildren.length; i++)
    {
        console.log("Child ", i);
        if(navChildren[i].innerHTML === document.title.substring(0, document.title.length - 26))
        {

            navChildren[i].style.fontWeight = "bold";
            navChildren[i].style.color = "var(--ternary-color)"
        }
    }
});