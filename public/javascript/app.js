var timerSecs = 5; timerSecsSave = 5; breakSecs = 3; breakSecsSave = 3;
var timer, timer2;
var stopDecA = 0; stopDecB = 0;
var gtg = true;

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
  if (timerSecsSave > 1){
  timerSecs -= 1;
  timerSecsSave -= 1;
  setUp();
  } else {
    stopDecA++;
    if (stopDecA > 4){
      alert("You can't go lower than 1, idiot.");
    }
  }
}

function addOneBreak(){
  breakSecs += 1;
  breakSecsSave += 1;
  setUp();
}

function subOneBreak(){
  if (breakSecsSave > 1){
  breakSecs -= 1;
  breakSecsSave -= 1;
  setUp();
  } else {
    stopDecB++;
    if (stopDecB > 4){
      alert("You can't go lower than 1 here either, idiot.");
    }
  }
}

function countDown() {
  if (gtg) {
  	document.getElementById('status').innerHTML = "<strong>"+timerSecs+"</strong>";
  	if(timerSecs < 0) {
  		clearTimeout(timer);
      breakSecs = breakSecsSave;
      runBreak();
      return
  	}
  	timerSecs--;
  	var timer = setTimeout('countDown()',1000);
  } else { return }
}

function runBreak(){
  if (gtg) {
    document.getElementById('status').innerHTML = "<strong>"+breakSecs+"</strong>";
    if(breakSecs < 0) {
      clearTimeout(timer2);
      timerSecs = timerSecsSave;
      countDown();
      return
    }
    breakSecs--;
    var timer2 = setTimeout('runBreak()',1000);
  } else { return }
}

function setTrue(){
  gtg = true;
}

function resetTimer(){
  gtg = false; timerSecs = 5; timerSecsSave = 5; breakSecs = 3; breakSecsSave = 3;
  setUp();
}
