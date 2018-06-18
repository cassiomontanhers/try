

$(document).ready(function(){

	writeDivs();
	prepareBackplane();

	$("#btnReset").on({
		click:function(){
			$(".square").attr('style', '');
			$(".innersquare").attr('style', '');
			prepareBackplane();
		}
	});

	$("#map").on({
		mouseenter:function(){
			$("#menu").hide();
		}
	});

	$("#accessMenu").on({
		mouseenter:function(){
			$("#menu").show();
		}
	});



	$("div .square").on({
	    mouseenter: function(){
	        $(this).css("border", "2px solid lightgray ");
	    }, 
	    mouseleave: function(){
	        $(this).css("border", "none");
	    }, 
	    click: function(){
	        $(this).children( '.innersquare' ).css("border", "2px solid green");
	        $(this).children( '.innersquare' ).css("border-radius", "5px");
	    },

	    dblclick: function(){
	        
	        $(this).children( '.innersquare' ).css("border", "2px solid green");
	        $(this).children( '.innersquare' ).css("border-radius", "5px");


	        var varId = $(this).attr('id');

	        var row;
	        var column;

	        if(varId[7] == '-'){
				row = varId[6];        	
				if(varId[9] != null){
					column = varId.substr(8,2);
				}else{
					column = varId[8];
				}
	        }else{
				row = varId.substr(6,2);
				if(varId[10] != null){
					column = varId.substr(9,2);
				}else{
					column = varId[9];
				}
	        }

			for (var i = (parseInt(row) - 1); i <= (parseInt(row) + 1); i++) {
				for (var j = (parseInt(column) - 1); j <= (parseInt(column) + 1); j++) {
	        		$("#square"+i+"-"+j).children( '.innersquare' ).css("border", "3px dashed red");
	        		$("#square"+i+"-"+j).children( '.innersquare' ).css("border-radius", "5px");
		        }        
	        }        
	    }
	});

});



function prepareBackplane(){

	
	for (var i = 1; i <= 20; i++) {

		for (var j = 1; j <= 20; j++) {

			var div = document.getElementById('square'+i+'-'+j);

			var rand = Math.floor(Math.random() * 3) + 1;  

			switch(rand){
				case 1:
					div.style.backgroundColor = "yellow";
					break;			
				case 2:
					div.style.backgroundColor = "orange";				
					break;			
				case 3:
					div.style.backgroundColor = "gold";				
					break;			
				default:
			}

		}

	}

}


function writeCss(){

	document.write("<pre>");

	for (var i = 1; i <= 10; i++) {

		for (var j = 1; j <= 16; j++) {

			document.writeln("#square"+i+"-"+j+"{");
			document.writeln("grid-row:"+i+"/"+(i+1)+";");
			document.writeln("grid-column:"+j+"/"+(j+1)+";");
			document.writeln("}");
			document.write("");

		}
	}

}

function writeDivs(){


	for (var i = 1; i <= 20; i++) {

		for (var j = 1; j <= 20; j++) {

			$("#map").append("<div class=\"square\" id=\"square"+i+"-"+j+"\"><div class=\"innersquare\"></div></div>");

		}
	}

}

