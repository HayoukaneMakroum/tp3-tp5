
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
  this.xDepart=0;
  this.yDepart=0;
  this.xfinal=0;
  this.yfinal=0;
  this.press=false;

  //console.log(interactor);

	// Developper les 3 fonctions gérant les événements
  this.pression = function(evt) {
   var position= getMousePosition(canvas, evt) ;
   this.xDepart=position.x;
   this.yDepart=position.y;
   this.press=true;

   pencil.onInteractionStart(this);
   //console.log(interactor);

   //console.log( "x debut "+this.xDepart);
    //console.log("y debut "+this.yDepart);
  }.bind(this) ;


  this.deplasser= function(evt) {
    if(this.press){
    var position= getMousePosition(canvas, evt) ;
    this.xfinal=position.x;
    this.yfinal=position.y;
    pencil.onInteractionUpdate(this);
    }
    
   }.bind(this) ;
   

   this.relacher= function(evt) {
    if(this.press){
    var position= getMousePosition(canvas, evt) ;
    this.press=false;
    pencil.onInteractionEnd(this);
    
    }
   }.bind(this) ;
  
  
  canvas.addEventListener('mousedown', this.pression, false);
  canvas.addEventListener('mousemove', this.deplasser, false);
  canvas.addEventListener('mouseup', this.relacher, false);
};



function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



