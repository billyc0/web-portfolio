// JavaScript Document

"use strict";
function changeContent(content) {
	
	if (content === 1) {
		document.getElementById("about-content").innerHTML = "<span class='text-center'>" +
			"<center><img src='images/about-intro.jpg' alt='portrait' height='325px' class='img-responsive img-rounded' /></center>" +
			"<h2>BILLY CHANDLER</h2>" +
			"<h4><a href='mailto:billychandlerjr@gmail.com' style='text-decoration: none'>EMAIL</a> | " +
			"<a href='http://www.linkedin.com/in/billychandlerjr' target='_blank' style='text-decoration: none'>" +
			"LINKEDIN</a> | " +
			"<a href='http://www.github.com/billyc0' target='_blank' style='text-decoration: none'>" +
			"GITHUB</a> | " +
			"<a href='http://www.facebook.com/billychandlerwebs' target='_blank' style='text-decoration: none'>" +
			"FACEBOOK</a>" +
			"</h4>" +
			"</span>" +
			"<hr>" +
			"<h3>INTRODUCTION</h3>" +
			"<p>Hello, world!</p>" +
			"<p>I am a creative person who finds technology amazing. I been exposed to it for pretty much the majority of my life. I am a web developer both professionally and as a hobbyist. I started building websites ever since I was a middle-school student. I continue to learn new web technologies and be innovative with my ideas for web pages and applications. As both an artist and technologist, I believe it is crucial to make a visually appealing website that is functional enough for an acceptable user experience. I am excited about actively being productive on projects allowing me to develop for the web.</p>" + 
			"<h4>COMPUTER SKILLS &amp; EXPERIENCES</h4>" +
			"<ul>" +
			"<li><b>Programming languages:</b> Java, C#</li>" +
			"<li><b>Web languages &amp; scripts:</b> HTML, XHTML, CSS, JavaScript, XML, XSLT, PHP</li>" +
			"<li><b>Web frameworks:</b> Vue.js, Bootstrap</li>" +
			"<li><b>Content management system:</b> WordPress</li>" +
			"<li><b>Database:</b> Oracle SQL, MySQL</li>" +
			"<li><b>Software:</b> Eclipse, Visual Studio, Dreamweaver, Photoshop, Flash, Microsoft Office</li>" +
			"</ul>" +
			"<hr>";
	}
	if (content === 2) {
		document.getElementById("about-content").innerHTML = "<h3>EDUCATION</h3>" + 
			"<hr>" + 
			"<h2>BS, Information Science &amp; Systems<br>" + 
			"<small><b>Concentration:</b> Web Development<br>" +
			"<b>Minor:</b> Business Administration</small></h2>" +
			"<h3><a href='http://www.radford.edu' target='_blank' style='text-decoration:none'>RADFORD UNIVERSITY</a><br>" +
			"<small>Radford, Virginia<br>" +
			"Fall 2014&mdash;Spring 2017</small></h3>" +
			"<p><b>Projects</b></p>" +
			"<ul>" +
			"<li>Community Service Portal (User Registration/Login)</li>" +
			"<li>Digital Imaging Portfolio (Photoshop Exercises)</li>" +
			"<li>Teacher's Companion (User Registration/Login)</li>" +
			"<li>Tyler's Tiles (Interactive Video Game)</li>" +
			"<li>WordPress ePortfolio (CMS Exercise)</li>" +
			"</ul>" +
			"<hr>" +
			"<h2>AA&S, General Studies<br>" +
			"<small><b>Certificate:</b> General Education<br>" +
			"<b>Career Studies Certificate:</b> Web Design &amp; Office Applications</small></h2>" +
			"<h3><a href='http://www.wcc.vccs.edu' target='_blank' style='text-decoration:none'>WYTHEVILLE COMMUNITY COLLEGE</a><br>" +
			"<small>Wytheville, Virginia<br>" +
			"Fall 2012&mdash;Spring 2014</small></h3>" +
			"<hr>" +
			"<h2>Certifications</h2>" +
			"<h4>" +
			"<ul>" +
			"<li>APO LEADS Launch (<em>Alpha Phi Omega</em>)</li>" + 
			"<li>CCNA Routing & Switching: Introduction to Networks (<em>Cisco</em>)</li>" +
			"<li>Competency Assessment in Business Processing (<em>NOCTI</em>)</li>" +
			"</ul>" +
			"</h4>" +
			"<hr>";
	}
	else if (content === 3) {
		document.getElementById("about-content").innerHTML = "<h3>EXPERIENCE</h3>" +
			"<hr>" +
			"<h2>Web Experience</h2>" +
			"<h3>" +
			"Dealman<br>" +
			"<small>" +
			"March 2017&mdash;present<br>" +
			"Role: Digital Media Designer" +
			"</small>" +
			"</h3>" +
			"<p>I provide the web design and content for a freelance website assignment. I produce a website built on WordPress. The website runs on several plugins and theme customizations in order to include functioning web applications and to be visually appealing.</p>" +
			"<p><b>Projects</b></p>" +
			"<ul>" +
			"<li>Bluefield Arts Center (Website)</li>" +
			"</ul>" +
			"<h3>" +
			"<a href='http://www.radford.edu/itec' target='_blank' style='text-decoration:none'>Radford University Department of Information Technology</a><br>" +
			"<small>" + 
			"September 2016&mdash;March 2017<br>" + 
			"Role: Research Project Team Member</small>" +
			"</h3>" + 
			"<p>I particapted within a team of other students producing software for research. I provided web programming for the project.</p>" +
			"<hr>" +
			"<h2>Work Experience</h2>" +
			"<h3>" +
			"<a href='http://www.foodlion.com' target='_blank' style='text-decoration:none'>Food Lion</a><br>" +
			"<small>" +
			"May 2013&mdash;March 2017<br>" +
			"Role: Quaity/Assurance Associate" +
			"</small>" +
			"</h3>" +
			"<h3>" +
			"<a href='http://www.stage.com' target='_blank' style='text-decoration:none'>Stage Stores</a><br>" +
			"<small>" +
			"May 2016&mdash;January 2017<br>" +
			"Role: Custodian/Freight Associate" +
			"</small>" +
			"</h3>" +
			"<h3>" +
			"<a href='http://www.bsa-brmc.org/reservation' target='_blank' style='text-decoration:none'>Blue Ridge Scout Reservation</a><br>" +
			"<small>" +
			"Winter 2016&ndash;17, Summers 2010&ndash;12<br>" +
			"Role: Camp Staff" +
			"</small>" +
			"</h3>" + 
			"<hr>" +
			"<h2>Volunteer Experience</h2>" + 
			"<h3>" +
			"<a href='http://www.scouting.org' target='_blank' style='text-decoration:none'>Boy Scouts of America</a><br>" +
			"<small>" + 
			"October 2013&mdash;present<br>" + 
			"Roles: Assistant Scoutmaster, Merit Badge Counselor</small>" +
			"</h3>" +
			"<h3>" +
			"<a href='http://www.apo.org' target='_blank' style='text-decoration:none'>Alpha Phi Omega: National Service Fraternity</a><br>" +
			"<small>" +
			"September 2014&mdash;May 2017<br>" +
			"Roles: Chapter Officer, Member" + 
			"</small>" +
			"</h3>" +
			"<h3>" +
			"<a href='http://www.mountaincap.org' target='_blank' style='text-decoration:none'>Mountain Community Action Program</a><br>" +
			"<small>" + 
			"August 2012&mdash;May 2013<br>" + 
			"Role: Head Start Classroom Assistance" + 
			"</small>" +
			"</h3>" +
		"<hr>";
	}
	else if (content === 4) {
		document.getElementById("about-content").innerHTML = "<h3>ORGANIZATIONS</h3>" +
			"<hr>" +
			"<h2>" +
			"<a href='http://www.apo.org' target='_blank' style='text-decoration:none'>Alpha Phi Omega: National Service Fraternity</a><br>" +
			"<small>" +
			"Radford University Chapter<br>" +
			"September 2014&mdash;May 2017" +
			"</small>" +
			"</h2>" +
			"<p>As a member of Alpha Phi Omega, I provided volunteer community service to several organizations within the New River Valley. I also held a few leadership positions, particiapted in committees, and attended conferences.</p>" +
			"<hr>" +
			"<h2>" +
			"<a href='http://upe.acm.org' target='_blank' style='text-decoration:none'>Upsilon Pi Epsilon: International Honor Society for the Computing &amp; Information Sciences</a><br>" +
			"<small>" +
			"Radford University Chapter<br>" +
			"March 2017&mdash;May 2017" +
			"</small>" +
			"</h2>" +
			"<p>I obtained membership in Upsilon Pi Epilson for obtaining both cumulative and in-major grade-point averages of at least a 3.0.</p>" +
			"<hr>";
	}
	else if (content === 5) {
		document.getElementById("about-content").innerHTML = "<h3>VOLUNTEERISM</h3>" +
		"<hr>" +
		"<h2>" +
		"<a href='http://www.mountaincap.org' target='_blank' style='text-decoration:none'>Mountain Community Action Program</a><br>" +
		"<small>Role: Head Start Classroom Assistance</small>" +
		"</h2>" +
		"<p>I assisted the teachers in a preschool classroom for children with parents who have financial difficulties. I assisted with teaching, read children's books, and monitored the children in the classroom, playground, and on bus rides.</p>" +
		"<hr>" +
		"<h2>" +
		"<a href='http://www.radford.edu/itec' target='_blank' style='text-decoration:none'>Radford University Department of Information Technology</a><br>" +
		"<small>Role: Research Project Team Member</small>" +
		"</h2>" + 
		"<p>I particapted within a team of other students producing software for research. I provided web programming for the project.</p>" +
		"<hr>";
	}
	else if (content === 6) {
		document.getElementById("about-content").innerHTML = "<h3>AWARDS &amp; ENGAGEMENT</h3>" +
			"<hr>" +
			"<h2>Honor Societies</h2>" +
			"<h4>" + 
			"<ul>" +
			"<li><a href='http://upe.acm.org' target='_blank' style='text-decoration:none'>Upsilon Pi Epsilon: International Honor Society for the Computing &amp; Information Disciplines</a></li>" +
			"<li><a href='http://www.nesa.org' target='_blank' style='text-decoration:none'>National Eagle Scout Association</a></li>" +
			"<li><a href='http://www.oa-bsa.org' target='_blank' style='text-decoration:none'>Order of the Arrow: Scouting's National Honor Society</a></li>" +
			"</ul>" +
			"</h4>" + 
			"<hr>" +
			"<h2>Awards</h2>" + 
			"<h4>" +
			"<ul>" +
			"<li>Vigil Honor, Order of the Arrow (<em>Boy Scouts of America</em>, October 2016)</li>" +
			"<li>Chapter Friendship Award (<em>Alpha Phi Omega</em>, April 2016)</li>" +
			"<li>District Boy Scouter of the Year (<em>Boy Scouts of America</em>, June 2015)</li>" + 
			"<li>Chapter Service Award (<em>Alpha Phi Omega</em>, April 2015)</li>" +
			"<li>Best Alpha (Pledge) (<em>Alpha Phi Omega</em>, November 2014)</li>" +
			"<li>First Place in Website Design (Regional) (<em>Future Business Leaders of America</em>, March 2012)</li>" +
			"<li>Eagle Scout (<em>Boy Scouts of America</em>, June 2011)</li>" +
			"<li>Den Chief Service Award (<em>Boy Scouts of America</em>, May 2010)</li>" +
			"</ul>" +
			"</h4>" +
			"<hr>" +
			"<h2>Organizations</h2>" +
			"<h4>" +
			"<ul>" +
			"<li><a href='http://www.apo.org' target='_blank' style='text-decoration:none'>Alpha Phi Omega</a></li>" +
			"<li><a href='http://www.scouting.org' target='_blank' style='text-decoration:none'>Boy Scouts of America</a></li>" +
			"<li><a href='http://www.fbla-pbl.org' target='_blank' style='text-decoration:none'>Future Business Leaders of America</a></li>" +
			"</ul>" +
			"</h4>" +
			"<hr>";
	}
	else if (content === 7) {
		document.getElementById("about-content").innerHTML = "<h3>PROJECTS</h3>" +
			"<hr>" +
			"<h2>" +
			"<a href='http://www.billychandler.org/wordpress1' target='_blank' style='text-decoration:none'>Custom Theme</a><br>" +
			"<small>WordPress, PHP</small>" +
			"</h2>" +
			"<p>An example csutom WordPress theme</p>" +
			"<hr>" +
			"<h2>" +
			"<a href='http://www.radford.edu/~bchandler3/projects/itec226/' target='_blank' style='text-decoration:none'>Digital Imaging Portfolio</a><br>" +
			"<small>Photoshop media</small>" +
			"</h2>" +
			"<p>A collection of images and animations created in Adobe Photoshop</p>" +
			"<hr>" +
			"<h2>" +
			"<a href='projects/colors.html' target='_blank' style='text-decoration:none'>HTML Rainbow</a><br>" +
			"<small>jQuery application</small>" +
			"</h2>" +
			"<p>Everytime the page is clicked, it changes color (<b>WARNING: May be sensitive to those with photosensitive epilepsy.</b>)</p>" +
			"<hr>" +
			"<h2>" +
			"<a href='http://www.radford.edu/~bchandler3/projects/xml/disney.xml' target='_blank' style='text-decoration:none'>List of Animated Disney Films</a><br>" +
			"<small>XML/XSLT database</small>" +
			"</h2>" +
			"<p>A list of the animated feature films produced by Disney Animation created with an XML database</p>" +
			"<hr>" +
			"<h2>" +
			"<a href='https://php.radford.edu/~bchandler3/project-penguin/tmp-quizzes/' target='_blank' style='text-decoration:none'>Math Quizzes</a><br>" +
			"<small>PHP application</small>" +
			"</h2>" +
			"<p>Interactive math quizzes dealing with several areas in mathematics</p>" +
			"<hr>" +
			"<h2>" +
			"<a href='http://www.radford.edu/~bchandler3/projects/js/1/mystery.html' target='_blank' style='text-decoration:none'>Mystery Web Page</a><br>" +
			"<small>JavaScript application</small>" +
			"</h2>" +
			"<p>A mystery (surprise) web page is generated based on user input</p>" +
			"<hr>" +
			"<h2>" +
			"<a href='projects/places.html' target='_blank' style='text-decoration:none'>United States Populated Place Search</a><br>" +
			"<small>jQuery application, XML Parsing</small>" +
			"</h2>" +
			"<p>Allows the user to search for the populated places within a given county in the United States</p>" +
			"<hr>";
	}
}