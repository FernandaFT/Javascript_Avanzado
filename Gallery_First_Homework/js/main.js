var Gallery = (function() {
	var imgArray = [ 'img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg','img/5.jpg'];
	var imageNumber = 0;
	var imageLength = imgArray.length - 1;

	var n = document.getElementById('btnNext');
	var p = document.getElementById('btnPrev');
	
	Gallery = function(next, prev) {
		this.n = next;
		this.p = prev;

		var _this = this;

		this.n.addEventListener('click', function() {
			return _this.changeImage(-1);
		});
		this.p.addEventListener('click', function() {
			return _this.changeImage(1);
		});
		
		Gallery.prototype.changeImage = function (x) {
			imageNumber += x;
			if (imageNumber > imageLength) { imageNumber = 0;}
			if (imageNumber < 0) { imageNumber = imageLength;}

			document.getElementById('images').src = imgArray[imageNumber];
		
			return false
		};
		return Gallery;
	}
	var g = new Gallery(n,p);
	console.log(g);
})();