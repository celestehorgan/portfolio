//DivPeek - Custom jQuery CSS3 Animation Trigger Script by David Halford
//(see https://github.com/davidhalford/DivPeek)
//===============================================================================
//CONFIG: 
var elementsToTrack = ["#project-douglas", "#project-molepatrol", "#project-student-life", "#project-wil", "#navigation","#main-comp","#douglas-navigation-widget","#douglas-navigation-overlay", "#pg-image", "#journey", "#landing-page-images", 
"#douglas-outcomes-1","#douglas-outcomes-2", "#douglas-outcomes-3", "#douglas-outcomes-4", "#douglas-outcomes-5", "#douglas-outcomes-6", "#douglas-outcomes-7",
"#wireframes-row-one", "#wireframes-row-two", "#wireframes-row-three", "#components", "#ia", "#events-calendar-flow", 
"#events-calendar", "#student-life-outcome-1", "#student-life-outcome-2", "#molepatrol-wireframes-1", "#molepatrol-wireframes-2", "#molepatrol-outcome-1",
"#molepatrol-outcome-2", "#molepatrol-outcome-3", "#molepatrol-outcome-4", "#wil-redesign-1", "#wil-redesign-2"];

var pixelOffset = -200;
var inClassName = "inViewPort";
var outClassName = "outViewPort";
//===============================================================================

//add function to see of elements exist (otherwise removing an elemnet from DOM but not from array breaks everything)
jQuery.fn.exists = function(){return this.length>0;}

//define vars out of scope
var viewPortHeight = $(window).height();
var scrollFromTop = $(window).scrollTop();
var scrollFromBottom = (parseInt(scrollFromTop)+parseInt(viewPortHeight));

//function for recalculating all positioning vars in scroll/resize
function recalcVars(){
	viewPortHeight = $(window).height();
	scrollFromTop = $(window).scrollTop();
	scrollFromBottom = (parseInt(scrollFromTop)+parseInt(viewPortHeight));
	for (var i = 0; i < elementsToTrack.length; i++) {
		if ($(elementsToTrack[i]).exists()) {
			checkInViewport(scrollFromBottom, elementsToTrack[i]);
		}
   	}
}

//catch window events
$(window).resize(function(e){recalcVars();});
document.addEventListener("touchmove", ScrollStart, false);
document.addEventListener("scroll", Scroll, false);
function ScrollStart(){recalcVars();}
function Scroll(){recalcVars();}

//function that handles if an element is in the viewport or not 
function checkInViewport(scrollBottom, domElement){
	var elementPos = $(domElement).offset().top;
	if((parseInt(scrollBottom)+parseInt(pixelOffset)) > elementPos){
		$(domElement).addClass(inClassName).removeClass(outClassName);
	} else {
		$(domElement).removeClass(inClassName).addClass(outClassName);
	}
}