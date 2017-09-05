// JavaScript Document

var urlParam = window.location.search.substring(1);

$(document).ready(function() {
	if (urlParam === "education") {
		$("#about-content").load("files/about/education.html");
	}
	else if (urlParam === "experience") {
		$("#about-content").load("files/about/experience.html");
	}
	else if (urlParam === "awards") {
		$("#about-content").load("files/about/awards.html");
	}
	else if (urlParam === "projects") {
		$("#about-content").load("files/about/projects.html");
	}
	else {
		$("#about-content").load("files/about/introduction.html");
	}
});