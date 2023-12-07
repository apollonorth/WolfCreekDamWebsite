/*
Name: Apollo Schaefer

Date: 2023-12-05 TUE T 23:59:00 Z-05:00

Requires: 2019_01.html - 2019_12.html and wolfcreek.css

Description: adds functionality for the navigation menu being hidden and show, and 
functionality for the data tables being hidden and shown.
*/

/* Functions added for Lab 04, Part 04 */



function print_stars() {
	console.log("**********");
}



function showhide_table(elt) {
	print_stars();
	console.log("DEBUG - Before: " + elt.innerHTML);
	console.log("DEBUG - ID: " + elt.id);

	btn = document.getElementById(elt.id);
	div = document.getElementById(btn.nextElementSibling.id);
	table = div.children[1];
	label = btn.innerHTML;
	
	if ( label == "Show Table" ) {
		btn.innerHTML = "Hide Table";
		table.style.visibility = "visible";
	}
	else {
		btn.innerHTML = "Show Table";
		table.style.visibility = "hidden";
	}
		
	console.log("DEBUG - After: " + elt.innerHTML);
	print_stars();
}



function showhide_nav_menu(elt) {
	print_stars();
	console.log("DEBUG - Before: " + elt.innerHTML);
	console.log("DEBUG - ID: " + elt.id);
	
	btn = document.getElementById(elt.id);
	div = document.getElementById(btn.nextElementSibling.id);
	navbar = div;
	label = btn.innerHTML;
	btn_parent = document.getElementById(elt.parentElement.id);
	
	
	if ( label == "Show Menu" ) {
		btn.innerHTML = "Hide Menu";
		navbar.style.visibility = "visible";
		btn_parent.style.backgroundColor = "#989A98";	//#navmenu_div
		btn_parent.style.opacity = .9;					//#navmenu_div
		btn_parent.style.border = "1px solid grey";		//#navmenu_div
		btn.style.backgroundColor = "#a07574 ";			//#
		btn.style.border = "1px solid #3f3f3f";		//
	}
	else {
		btn.innerHTML = "Show Menu";
		navbar.style.visibility = "hidden";
		btn_parent.style.backgroundColor = "transparent";//#navmenu_div
		btn_parent.style.border = "0";					//#navmenu_div
		btn_parent.style.opacity = 1;					//#navmenu_div
		btn.style.backgroundColor = "#5f8a8b"; // Steel Teal //"blue";
	}

	console.log("DEBUG - After: " + elt.innerHTML);
	print_stars();
}

