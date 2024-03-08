$(document).ready(function() {
	let starterBlock = "start";
	showLayout(starterBlock);
});


function deb(argument) {
	console.log(argument)
}

$('*[gtl]').click(function() {
	let thisLayout = $(this).closest('div[layout]').attr('layout');
	let nextLayout = $(this).attr('gtl');	
	gtl(thisLayout, nextLayout);
})


function gtl(thisLayout, nextLayout) {
	$('div[layout=' + thisLayout + ']').hide();
	$('div[layout=' + nextLayout + ']').show();
}



function showLayout(layout) {
	$('body div[layout]').each(function() {
		$(this).hide();
	});
	$('body div[layout=' + layout + ']').show();
}