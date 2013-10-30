$(document).ready(function() {
	// console.log("============tools.js============");
	$(".tool").bind("click", function() {
		// console.log(this.id);
		var obj;
		setClickEffect(this.id);
		switch(this.id) {
			case "tool1":
				obj = createUnit();
				break;
			case  "tool2":
				createCube2();
				break;
			case "tool3":
			     createCube3();
				break;
			case "tool4":
				createCube4();
				break;
			case "tool5":
			     createCube5();
				break;
			case "tool6":
			     createCube6();
				break;
			case "tool7":
			     createCube7();
				break;
			case "tool8":
			     createCube8();
				break;
			case "tool9":
			     createCube9();
				break;
			case "tool10":
				break;
			case "tool11":
				break;
			case "tool12":
				break;
			case "tool13":
				break;
			case "tool14":
				break;
			default:
				break;
		}
	});

	function setClickEffect(id) {
		$("#" + id).css({
			"webkitTransform" : "scale(1.2)",
			"backgroundColor" : "#f28d01"
		});
		$(".tool").not("#" + id).css({
			"webkitTransform" : "scale(1)",
			"backgroundColor" : "#00a08b"
		});
	}

	function createUnit() {
		return new Cube("cube" + new Date().getTime(), 50, 50, 50, 0, 0, 0);
	}

	function createCube2() {
        return new Cube("cube" + new Date().getTime(), 100, 50, 50, 300, 0, 0);
	}

	function createCube3() {
          return new Cube("cube" + new Date().getTime(), 50, 600, 100, 0, 300, 0);
	}
	
	function createCube4() {
        new Cube("cube" + new Date().getTime(), 50, 50, 200, 200, 100, 0);
    }
	
    function createCube5() {
      return new Cube("bed" + new Date().getTime(), 300, 300, 100, 500, 200, 0);
    }

	function createCube6() {
       var obj1 = new Cube("cube" + new Date().getTime(), 50, 50, 50, 600, 50, 0);
       var obj2 = new Cube("cube" + new Date().getTime() + 1, 50, 50, 50, 700, 50, 0); 
       var obj3 = new Cube("cube" + new Date().getTime() + 2, 150, 50, 50, 600, 0, 0);
	}

	function createCube7() {
       new Cube("cube" + new Date().getTime(), 50, 50, 50, 450, 50, 0);
       new Cube("cube" + new Date().getTime(), 150, 50, 50, 400, 0, 0); 
       new Cube("cube" + new Date().getTime() + 4, 50, 50, 50, 450, 100, 0); 
	}

	function createCube8() {
       var obj1 = new Cube("cube" + new Date().getTime(), 50, 50, 50, 200, 0, 200);
       var obj2 = new Cube("cube" + new Date().getTime() + 1, 50, 50, 50, 250, 0, 200); 
       var obj3 = new Cube("cube" + new Date().getTime() + 2, 50, 50, 50, 300, 0, 200);
       var obj4 = new Cube("cube" + new Date().getTime() + 3, 50, 50, 50, 200, 50, 200);
       var obj5 = new Cube("cube" + new Date().getTime() + 4, 50, 50, 50, 250, 50, 200);
       var obj6 = new Cube("cube" + new Date().getTime() + 5, 50, 50, 50, 300, 50, 200);
       var obj7 = new Cube("cube" + new Date().getTime() + 6, 50, 50, 50, 200, 100, 200);
       var obj8 = new Cube("cube" + new Date().getTime() + 7, 50, 50, 50, 250, 100, 200);
       var obj9 = new Cube("cube" + new Date().getTime() + 8, 50, 50, 50, 300, 100, 200);
	}

	function createCube9() {
	}

});
