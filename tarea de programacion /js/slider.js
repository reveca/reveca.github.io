//almacenar slider en  una variable
var slider = $('#sleder');
//almacenar botones
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

//mover ultima imagen al primer lugar
$('#slider section:last').insetbefore('#slider section:first');
//mostrar la primera imagen  con un margen de -100%
slider.css('margin-left','-'+100+'%');

//moviento de los botones... Derecha e Izquierda
function moverD(){
	slider.animate({
          marginleft:'-'+200+'%'
	},700, function(){ 
		$('#slider selection:first'). insertAfter('#slider selection:last');
                slider.css('margin-left','-'+100+'%');
)};
}

function moverI(){
	slider.animate({
          marginleft:0
	},700, function(){ 
		$('#slider selection:last'). insertbefore('#slider selection:first');
                slider.css('margin-left','-'+100+'%');
)};
}

 siguiente.on('click,function'(){
	 
	 moverD();
 });
 anterior.on('click,function'(){
	 
	 moverI();
 });
 
 function autoplay(){
 	interval = setInterval(function(){
 		moverD();
 	},5000);
 }
 
