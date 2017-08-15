//Global Variables
var canvas = document.getElementById('cirlces');
var ctx = canvas.getContext('2d');

var  firstCircle = {
	x: canvas.width/2,
	y: canvas.height-50,
	r: 10,
	vx: 2,
	vy: 2,
	color: 5 //rojo hsl(5, 92%, 38%)
};

var secondCircle = {
	x: canvas.width/6,
	y: canvas.height-50,
	r: 10,
	vx: 2,
	vy: 2,
	color: 237 // azul hsl(237, 92%, 38%)
};

function drawCanvas() {

	/************* First Circle ************/
	ctx.beginPath();
	ctx.arc(firstCircle.x, firstCircle.y, firstCircle.r, 0, Math.PI * 2);
	ctx.fillStyle =  'hsl(' + firstCircle.color++ + ',92%, 38%)';
	// ctx.fillStyle = '#3eefe3';
	ctx.fill();
	ctx.closePath();

	/************* Second Circle ************/
	ctx.beginPath();
	ctx.arc(secondCircle.x, secondCircle.y, secondCircle.r, 0, Math.PI * 2);
	ctx.fillStyle =  'hsl(' + firstCircle.color++ + ',92%, 38%)';
	// ctx.fillStyle = '#eded28'
	ctx.fill();
	ctx.closePath();
}

function animate() {
	ctx.clearRect(0,0, canvas.width, canvas.height);
	drawCanvas();

	/************* First Circle ************/
	if (firstCircle.x + firstCircle.vx > canvas.width-firstCircle.r || firstCircle.x + firstCircle.vx < firstCircle.r) {
		firstCircle.vx =-firstCircle.vx;
	}
	if (firstCircle.y + firstCircle.vy > canvas.height-firstCircle.r || firstCircle.y + firstCircle.vy < firstCircle.r) {
		firstCircle.vy =-firstCircle.vy;
	}

	firstCircle.x += firstCircle.vx;
	firstCircle.y += firstCircle.vy;

	/************* Second Circle ************/
	if (secondCircle.x + secondCircle.vx > canvas.width-secondCircle.r || secondCircle.x + secondCircle.vx < secondCircle.r) {
		secondCircle.vx =- secondCircle.vx;
	}
	if (secondCircle.y + secondCircle.vy > canvas.height-secondCircle.r || secondCircle.y + secondCircle.vy < secondCircle.r) {
		secondCircle.vy =- secondCircle.vy;
	}

	secondCircle.x += secondCircle.vx;
	secondCircle.y += secondCircle.vy;

	/**************** Collison Detection ****************/
	if (secondCircle.x + secondCircle.vx == firstCircle.x + firstCircle.vx) {
		firstCircle.vx =- firstCircle.vx;
		secondCircle.vx =- secondCircle.vx;
	}

}
setInterval(animate, 10);