$(function() {

// color set by color input selector
let mainColor = $('#grid-color').val();


// sets up mouse for drawing event
let isDown = false;

$(document).mousedown(function() {
    isDown = true;
  })
.mouseup(function() {
    isDown = false;
});



// changes body background-color when color input value changes
$('#grid-color').change(function() {
	let backgroundColor = $(this).val();
	$('body').css('background-color', convertHex(backgroundColor, .18));
})

// creates grid when DRAW button is clicked
$('#start').on('click', makeGrid)



function makeGrid() {

	// wipes any previous drawings
	reset();

	// gets grid size
	let col = $("#col").val();
	let row = $("#row").val();

	// makes sure grid isn't too large or small
	if (col > 70 ||  col < 1) {
		col = 70;
		$("#col").val('70')
	}
	if (row > 70 ||  row < 1) {
		row = 70;
		$("#row").val('70')
	}

	// creates grid
	for (let c = 0; c <= col; c++) {
		let tr = $('<tr></tr>');

		for (let r = 0; r <= row; r++) {
	        tr.append('<td></td>');
	    }
	    $('table').append(tr);
	}

	//sets drawing color to color input valur
	mainColor = $('#grid-color').val()
}



// changes table color when clicked and dragged over
$('table').on('mouseover', 'td', function() {
	if (isDown) {
		$(this).css('background-color', mainColor)
	}
})


// removes entire grid when RESET button is clicked
$('#reset').click(function(){
	reset();
})

// deletes all children in table
function reset() {
	$('table').empty();

}


// converts hex color to rgba to allow change to body's background-color opacity
function convertHex(hex,opacity){
    hex = hex.replace('#','');
    let r = parseInt(hex.substring(0,2), 16);
    let g = parseInt(hex.substring(2,4), 16);
    let b = parseInt(hex.substring(4,6), 16);

    let result = 'rgba('+r+','+g+','+b+','+opacity+')';
    return result;
}

});
