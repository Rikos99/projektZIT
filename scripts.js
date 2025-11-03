function includeHTML(element)
{
    const body = document.querySelector("body");
    const actualElement = document.createElement(element);
    actualElement.classList.add("disable-select");
    const title = document.title;

    body.append(actualElement);

    // Element definitions
    const headerInnerHTML =
        "    <h1>ZIT Projekt Richarda Dluhoše</h1>\n" +
        "    <nav>\n" +
        "        <a href=\"index.html\">Úvodní stránka</a>\n" +
        "        <a href=\"page1.html\">Osobní stránka</a>\n" +
        "        <a href=\"page2.html\">Projekty v rámci 1. ročníku</a>\n" +
        "    <label for='CB_toggle' id='LBL_toggle'>Dark Mode</label>" +
        "    <input type='checkbox' id='CB_toggle' value='checked'>" +
        "    </nav>\n" +
        "<h2>" + title.substring(0, title.length - 26) + "</h2>";

    const footerInnerHTML =
        "<p>&#169;Richard Dluhoš (DLU0048), 2025</p>\n";

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

function switchTheme(checked)
{
    const label = document.getElementById("LBL_toggle");
    if(checked === true) // Dark mode
    {
        console.log("Switched to dark mode");
        label.innerText = "Light Mode";
        label.style.backgroundColor = "#000000";
        label.style.color = "#FFFFFF";
    }
    else // Light mode
    {
        console.log("Switched to light mode");
        label.innerText = "Dark Mode";
        label.style.backgroundColor = "#FFFFFF";
        label.style.color = "#000000"
    }
}

document.addEventListener("DOMContentLoaded", function()
{
    const toggle = document.getElementById("CB_toggle");
    toggle.addEventListener("change", function()
    {
        switchTheme(toggle.checked);
    });
});