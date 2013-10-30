$(document).ready(function() {
	// console.log("============keyboard.js============");
	// event.preventDefault();	var xAngle = 0, yAngle = 0, zAngle = 0, perspective = 1600;
	var _xAngle = 0, _yAngle = 0, _zAngle = 0;
	var xRotate = 0, zRotate = 0, yTranslate = 0;
	var originX = 50, originY = 200;
	var closed = true;
	var doorOpen = false;
	var translateZ = 0;
	addMoveListener();
	document.addEventListener('keydown', function(e) {
		// console.log(e.keyCode);
		e.preventDefault();		switch(e.keyCode) {
			case 116:
				//F5  	iMac 浏览器刷新
				window.location.reload();
			case 37:
				// left
				yAngle -= 5;
				break;
			case 38:
				// up
				xAngle += 5;
				break;
			case 39:
				// right
				yAngle += 5;
				break;
			case 40:
				// down
				xAngle -= 5;
				break;
			case 65:
				//A
				_yAngle -= 5;
				caseMove();
				break;
			case 87:
				//W
				// _xAngle += 5;
				break;
			case 68:
				//D
				// _yAngle += 5;
				// caseMove();
				break;
			case 83:
				//S
				_xAngle -= 5;
				caseMove();
				break;
			case 74:
				if (perspective <= 2500 && perspective > 400) {
					perspective -= 100;
				} else if (perspective <= 400 && perspective > 5) {
					perspective -= 5;
				}
				break;
			case 75:
				if (perspective < 2400) {
					perspective += 100;
				}
				break;
			case 80:
				//P
				playVideo();
				break;
			case 49:
				//1
				var bed2 = new Cube("bed2", 300, 300, 100, 201, 500, 399);
				break;
			case 50:
				//2
				var bed1 = new Cube("bed1", 200, 300, 100, 1300, 500, 201);
				console.log(bed1.face[0].id);
				// var cube = new Cube("sofa", 200, 100, 100, 600, 1400, 200);
				break;
			case 51:
				//3
				var table = new Cube("table", 100, 250, 50, 800, 550, 199);
				var sofa = new Cube("sofa", 100, 350, 40, 1000, 550, 199);
				var sofa2 = new Cube("sofa2", 10, 350, 60, 1090, 500, 199);
				break;
			case 188:
				//<
				originX -= 5;
				break;
			case 190:
				//>
				originX += 5;
				break;
		};

		$('#view').css({
			"webkitPerspectiveOrigin" : originX + "% 200px",
			"webkitPerspective" : perspective
		});
		$('#view').css({
			"mozPerspective" : perspective
		});

		$('#house').css({
			"webkitTransform" : "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)"
		});
		$('#house').css({
			"mozTransform" : "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)"
		});
		// $('#model').style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";

	}, false);
	
});
