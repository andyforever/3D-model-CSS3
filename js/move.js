
var _startX = 0;
var _startY = 0;
var _endX = 0;
var _endY = 0;
var moveObj = null;
var moveFlag = false;
var stageRotation;
var focusedObj = focusedObj || {};

var touch = ("createTouch" in document);
console.log(touch);
var startEvent = this.touch ? "touchstart" : "mousedown";
var moveEvent = this.touch ? "touchmove" : "mousemove";
var endEvent = this.touch ? "touchend" : "mouseup";

function addMoveListener() {
	$("body").bind(startEvent, moveStart);
	$("body").bind(endEvent, moveEnd);
}

function moveStart() {
	// console.log(event.target.parentElement.id);
	event = event || window.event;
	event.preventDefault();
	
	stageRotation = $("#house").css("webkitTransform");//({"webkitTransform" : "rotateY(45deg)"});
	// stageRotation = getRotationDegrees($("#house"));
	// console.log(stageRotation);
	
	//获取焦点元素属性
	var target = event.target;
	if(target.parentElement.id.substring(0,4) ==  "cube" && !document.getElementById("targetPositionPosObj")) {//判断是否为创建3D物体模型
		console.log("createEle");
		getElementAttr(event.target);
		//createTargetPosObj();
	}
	//取得父级移动元素
	moveObj =  event.target.parentElement;
	ox = parseInt(moveObj.style.left);
	oy = parseInt(moveObj.style.top);
	_startX = touch ? event.touches[0].pageX : event.pageX;
	_startY = touch ? event.touches[0].pageY : event.pageY;
	$("body").bind(moveEvent, moveOn);
	
	moveFlag = true;
}

function moveOn() {
	event.preventDefault();
	if(moveFlag) {
		var _moveX = touch ? event.touches[0].pageX : event.pageX;
		var _moveY = touch ? event.touches[0].pageY : event.pageY;
		var offsetX = _moveX - _startX;
		var offsetY = _moveY - _startY;
		if(isNaN(ox) || isNaN(oy) && document.getElementById("targetPositionPosObj")) {
			$("#" + moveObj.id).css({
				"left":  offsetX ,
				"top": offsetY
			});
			$("#targetPositionPosObj").css({
                "left":  offsetX ,
                "top": offsetY
            });
		} else {
			$("#" + moveObj.id).css({
				"left":  ox + offsetX ,
				"top": oy + offsetY
			});
		}
	}
}

function moveEnd() {
	event.preventDefault();
	_endX = touch ? event.touches[0].pageX : event.pageX;
	_endY = touch ? event.touches[0].pageY : event.pageY;

	moveFlag = false;
}

function getElementAttr(obj) {
	focusedObj.id = obj.id;
	focusedObj.w = obj.style.width;
	focusedObj.h =  obj.style.height;
	focusedObj.parent = obj.parentElement;
	focusedObj.x =  focusedObj.parent.style.left;
	focusedObj.y =  focusedObj.parent.style.top;
	
	console.log(focusedObj);
}

function createTargetPosObj() {
	targetPosObj = document.createElement("div");
	targetPosObj.id = "targetPositionPosObj";
	$("#ground").append(targetPosObj);
	console.log(focusedObj.y); 
	targetPosObj.style.position = "absolute";
	targetPosObj.style.width = focusedObj.w;
	targetPosObj.style.height =  (parseInt(focusedObj.h) -1) + "px" ;
	targetPosObj.style.border = "2px solid red";
	$("#targetPositionPosObj").css({"webkitTransform":"translateY(" + 550 +"px)"});
	// targetPosObj.style.webkitTransform = "translateZ(100px)";
	// targetPosObj.style.left =  focusedObj.x;
	//targetPosObj.style.top =  1200 - focusedObj.y - focusedObj.h;
	targetPosObj.style.backgroundColor = "rgba(80, 80, 80, 0.6)";
}

function getRotationDegrees(obj) {
    var matrix = obj.css("webkitTransform");
    if(matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    } else { var angle = 0; }
        return angle;
}


