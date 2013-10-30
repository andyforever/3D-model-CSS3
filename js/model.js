/**
 * Cube construction
 * @param var id		object id
 * @param var 	length
 * @param var width
 * @param var height
 * @param var x
 * @param var y
 * @param var z
 */

var Cube = function(id, length, width, height, x, y, z) {

	this.id = id;
	// object ID
	this.l = length;
	this.w = width;
	this.h = height;
	this.x = x;
	this.y = y;
	this.z = z;

	this.cube = document.createElement('div');
	this.face = new Array(6);
	this.cube.id = id;
	$('#house').append(this.cube);
	$('#' + id).addClass('cube');
	

	//创建6个面，添加通用样式
	for (var i = 0; i < 6; i++) {
		this.face[i] = document.createElement('div');
		this.face[i].id = id + "-face-" + i;
		$('#' + this.cube.id).append(this.face[i]);
		$('#' + this.face[i].id).addClass('face');
		// console.log(this.face[i].id);
	}

	setCubeStyle(this.face, length, width, height, x, y, z);

	return this;
}
/**
 * 创建Cube
 */
function createCube(obj) {
	obj.cube = document.createElement('div');
	obj.cube.face = new Array(6);
	obj.cube.id = id;
	$('#' + id).addClass('cube');
	$('#house').append(obj.cube);

	//创建6个面，添加通用样式
	for (var i = 0; i < 6; i++) {
		obj.cube.face[i] = document.createElement('div');
		obj.cube.face[i].id = id + "-face-" + i;
		$('#' + obj.cube.id).append(obj.cube.face[i]);
		$('#' + obj.cube.face[i].id).addClass('face');
	}

	return obj.cube;
}

/**
 * 设置立方体各个面CSS样式
 * 计算设置各个面 lwh，xyz 坐标
 *
 */
function setCubeStyle(face, l, w, h, x, y, z) {
	//top face
	$('#' + face[0].id).css({
		"width" : l + 'px',
		"height" : w + 'px',
		"backgroundColor" : "#63B8FF",
		"webkitTransform" : "rotateX(90deg) translateX(" + x + "px)" + " translateZ(" + (w / 2 - y) + "px) " + "translateY(" + z + "px)",
	});
	//front face
	$('#' + face[1].id).css({
		"width" : l + 'px',
		"height" : h + 'px',
		"backgroundColor" : "#63B8FF",
		"webkitTransform" : "translateX(" + x + "px)  " + "translateY(" + y + "px) " + "translateZ(" + (w / 2 + z) + "px)"
	});
	//right face
	$('#' + face[2].id).css({
		"width" : w + 'px',
		"height" : h + 'px',
		"webkitTransform" : "rotateY(90deg) translateZ(" + (l - w / 2 + x) + "px) " + "translateX(-" + z + "px)" + "translateY(" + y + "px) "
	});
	//back face
	$('#' + face[3].id).css({
		"width" : l + 'px',
		"height" : h + 'px',
		"backgroundColor" : "#63B8FF",
		"webkitTransform" : "rotateY(180deg) translateX(-" + x + "px)" + "translateY(" + y + "px) " + " translateZ(" + (w / 2 - z) + "px)",
	});
	//left face
	$('#' + face[4].id).css({
		"width" : w + 'px',
		"height" : h + 'px',
		"backgroundColor" : "#63B8FF",
		"webkitTransform" : "rotateY(-90deg) translateZ(" + (w / 2 - x) + "px) " + "translateX(" + z + "px)" + "translateY(" + y + "px) ",
	});
	//bottom face
	$('#' + face[5].id).css({
		"width" : l + 'px',
		"height" : w + 'px',
		"backgroundColor" : "#63B8FF",
		"webkitTransform" : "rotateX(-90deg) rotate(180deg) translateX(-" + x + "px)" + "translateZ(" + (-w / 2 + y + h) + "px) " + "translateY(" + z + "px)",
	});

	return face;
}
