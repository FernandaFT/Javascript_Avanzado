var canvas = document.getElementById('squares');
var ctx = canvas.getContext('2d');

var firstSquare ={
	x: canvas.width/2,
	y: canvas.height-50,
	h: 50,
	w: 50,
	vx: 2,
	vy: 2,
	// color: 5
}

var secondSquare ={
	x: canvas.width/20,
	y: canvas.height-70,
	h: 50,
	w: 50,
	vx: 2,
	vy: 2,
	// color: 237
}


function drawCanvas() {
	ctx.beginPath();
	ctx.rect(firstSquare.x, firstSquare.y,firstSquare.h, firstSquare.w);
	ctx.fillStyle = '#3eefe3';
	// ctx.fillStyle = 'hsl(' + firstSquare.color++ + ',92%, 38%)';
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.rect(secondSquare.x, secondSquare.y,secondSquare.h,secondSquare.w);
	ctx.fillStyle = '#eded28';
	// ctx.fillStyle = 'hsl(' + secondSquare.color++ + ',92%, 38%)';
	ctx.fill();
	ctx.closePath();
}

function animate() {
	ctx.clearRect(0,0, canvas.width, canvas.height);
	drawCanvas();
	/*************** Fist Square ********************/
	if (firstSquare.x > canvas.width -50 || firstSquare.x + firstSquare.vx < 0) {
		firstSquare.vx =- firstSquare.vx;
	}
	if (firstSquare.y > canvas.height -50 || firstSquare.y + firstSquare.vy < 0) {
		firstSquare.vy =- firstSquare.vy;
	}
	firstSquare.x += firstSquare.vx;
	firstSquare.y += firstSquare.vy;

	/*********************** second Square********************/
	if (secondSquare.x > canvas.width -50 || secondSquare.x + secondSquare.vx < 0) {
		secondSquare.vx =- secondSquare.vx;
	}
	if (secondSquare.y > canvas.height -50 || secondSquare.y + secondSquare.vy < 0) {
		secondSquare.vy =- secondSquare.vy;
	}
	secondSquare.x += secondSquare.vx;
	secondSquare.y += secondSquare.vy;

	/******************** Collition detection ***************************/
	 if (secondSquare.x < firstSquare.x + 50 && firstSquare.x < secondSquare.x || firstSquare.x < secondSquare.x + 50 && secondSquare.x < firstSquare.x) {
        		firstSquare.vx = -firstSquare.vx;
        		secondSquare.vx =- secondSquare.vx;
   	 }

    	if (secondSquare.y > firstSquare.y + 50 && firstSquare.y < secondSquare.y) {
    	    firstSquare.vy =- firstSquare.vy;
    	}
}
setInterval(animate, 10);