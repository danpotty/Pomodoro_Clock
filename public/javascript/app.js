var timerSecs = 5;
var timerSecsSave = 5;
var breakSecs = 3;
var breakSecsSave = 3;
var timer, timer2;

function setUp(){
  document.getElementById('status').innerHTML = "<strong>"+0+"</strong>";
  document.getElementById('numSecsTimer').innerHTML = "<p>Main timer duration: <strong>" +timerSecs+ "</strong> seconds</p>";
  document.getElementById('numSecsBreak').innerHTML = "<p>Break timer duration: <strong>" +breakSecs+ "</strong> seconds</p>";
}

setUp();

function addOne(){
  timerSecs += 1;
  timerSecsSave += 1;
  setUp();
}

function subOne(){
  timerSecs -= 1;
  timerSecsSave -= 1;
  setUp();
}

function addOneBreak(){
  breakSecs += 1;
  breakSecsSave += 1;
  setUp();
}

function subOneBreak(){
  breakSecs -= 1;
  breakSecsSave -= 1;
  setUp();
}

function countDown() {
	document.getElementById('status').innerHTML = "<strong>"+timerSecs+"</strong>";
	if(timerSecs < 0) {
		clearTimeout(timer);
    breakSecs = breakSecsSave;
    runBreak();
    return
	}
	timerSecs--;
	var timer = setTimeout('countDown()',1000);
}

function runBreak(){
  document.getElementById('status').innerHTML = "<strong>"+breakSecs+"</strong>";
  if(breakSecs < 0) {
    clearTimeout(timer2);
    timerSecs = timerSecsSave;
    countDown();
    return
  }
  breakSecs--;
  var timer2 = setTimeout('runBreak()',1000);
}

function stopTimer(){

}
