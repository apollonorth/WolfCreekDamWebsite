/* 
Filename: wolfcreek.js
Name: Apollo Schaefer
Date: 2023-10-28 SAT T 23:59:00 Z-04:00

Requires: HTML pages that link to this JavaScript file and use its functions.

Description: Provides functions that are used in the Wolf Creek Dam webspages, giving functionality to the webpages
*/

/* Part 04 */

function print_stars() {
    console.log("**********");
}

function showhide_table(elt) {
    //Debugging statements
    print_stars();
    console.log("DEBUG - Before: " + elt.innerHTML);
    console.log("DEBUG - ID: " + elt.id);

    //References
    const btn = elt.id;
    const div = elt.nextElementSibling;
    const table = div.querySelector('table');
    const label = elt.innerHTML;

    //Toggle table to be visible or invisible depending on innerHTML
    if(label == "Show Table") {
        elt.innerHTML = "Hide Table";
        table.style.visibility = "visible";
    }
    else {
        elt.innerHTML = "Show Table";
        table.style.visibility = "hidden";
    }

    //Debugging statements
    print_stars();
    console.log("DEBUG - After: " + elt.innerHTML);
}

function showhide_nav_menu(elt) {
    //Debug Statements
    print_stars();
    console.log("DEBUG - Before: " + elt.innerHTML);
    console.log("DEBUG - ID: " + elt.id);

    //References
    const btn = elt;
    const navbar = elt.nextElementSibling;
    const label = elt.innerHTML;
    const btn_parent = document.getElementById("navmenu_div");
  
    //Toggle menu on/off depending on innerHTML (whether button shows "show" or "hide")
    if (label == "Show Menu") {
        btn.innerHTML = "Hide Menu";
        navbar.style.visibility = "visible";
        btn_parent.style.backgroundColor = "#989A98";//#navmenu_div
        btn_parent.style.opacity = .9;//#navmenu_div
        btn_parent.style.border = "1px solid grey";//#navmenu_div
        btn.style.backgroundColor = "#a07574 ";
        btn.style.border = "1px solid #3f3f3f";
    } else {
        btn.innerHTML = "Show Menu";
        navbar.style.visibility = "hidden";
        btn_parent.style.backgroundColor = "transparent";
        btn_parent.style.border = "0";//#navmenu_div
        btn_parent.style.opacity = 1;//#navmenu_div
        btn.style.backgroundColor = "#5f8a8b";//Steel Teal
    }

    //Debug Statements
    print_stars();
    console.log("DEBUG - After: " + elt.innerHTML);
}

/* End of Part 04 */
