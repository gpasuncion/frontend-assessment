/**
 * Template Scripts	
 */

 // get json from github
fetch("https://raw.githubusercontent.com/mindarc/frontend-assessment/master/data.json")
	.then(function(resp){
		return resp.json();
	})
	.then(function(data) {
		generateTemplate(data);
	}); 

// generate tabs & accordion
function generateTemplate(data) {
	let tabs_menu = '';
	let content_template = '';
	
	for (let i=0; i<data.length; i++) {	
		if (i > 0) {
			tabs_menu += '<button class="btn-tab" onclick=\'showContent(event, "content-'+ i +'", '+ i +')\'>' + data[i].title + '</button>';
			content_template += '<button class="btn-accordion" onclick=\'showContent(event,"content-'+ i +'", '+ i +')\'>' + data[i].title + '</button>';
			content_template +=	'<div class="content" id="content-' + i + '" style="display: none;">' + data[i].content + '</div>';
		} else {
			tabs_menu += '<button class="btn-tab active" onclick=\'showContent(event,"content-'+ i +'", '+ i +')\'>' + data[i].title + '</button>';
			content_template += '<button class="btn-accordion active" onclick=\'showContent(event,"content-'+ i +'", '+ i +')\'>' + data[i].title + '</button>';
			content_template +=	'<div class="content show" id="content-' + i + '">' + data[i].content + '</div>';
		}
	}
	
	document.getElementById("tab_bar").innerHTML = tabs_menu;
	document.getElementById("content_wrapper").innerHTML = content_template;
}

// show accordion tab contents (event, content selector, current element index)
function showContent(evt, content, elem_index) {
	let i, tabcontent, tab_links, accordion_links;

	// hide contents
	tabcontent = document.getElementsByClassName("content");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	  tabcontent[i].className = tabcontent[i].className.replace(" show", "");
	}
  
	// enable/disable accordion link/tab
	tab_links = document.getElementsByClassName("btn-tab");
	for (i = 0; i < tab_links.length; i++) {
		tab_links[i].className = tab_links[i].className.replace(" active", "");
	}

	tab_links[elem_index].className += " active";

	accordion_links = document.getElementsByClassName("btn-accordion");
	for (i = 0; i < accordion_links.length; i++) {
		accordion_links[i].className = accordion_links[i].className.replace(" active", "");
	}

	accordion_links[elem_index].className += " active";
  
	// show content
	document.getElementById(content).style.display = "block";

	setTimeout(() => {
		tabcontent[elem_index].className += " show";	
	}, 15);
}