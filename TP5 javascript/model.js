
// Implémenter ici les 4 classes du modèle.
function Drawing(){
this.forms=new Array ();

this.add = function(el){
    this.forms.push(el);
} 
}

function Form(epaisseur,couleur){
this.epaisseur=epaisseur;
this.couleur= couleur;

this.getEpaisseur=function(){
    return this.epaisseur;
}
this.getCouleur=function(){
    return this.couleur;
}
}

function Rectangle(coordX,coordY,largeur,hauteur,epaisseur,couleur){
Form.call(this,epaisseur,couleur)
this.coordX=coordX;
this.coordY=coordY;
this.largeur=largeur;
this.hauteur=hauteur;

this.getCoordX=function(){
    return this.coordX;
}.bind(this);
 this.getCoordY=function(){
        return this.coordY;
    }.bind(this);
this.getLargeur=function(){
        return this.largeur;
    }.bind(this);
this.getHauteur=function(){
        return this.hauteur;
    }.bind(this);
};
Rectangle.prototype=new Form();


function Line(xdepart,ydepart,xarrive,yarrive ,epaisseur,couleur){
    Form.call(this,epaisseur,couleur)
this.xdepart=xdepart;
this.ydepart=ydepart;
this.xarrive=xarrive;
this.yarrive=yarrive;
console.log("la ligne");
console.log(this);

this.getXdepart=function(){
    return this.xdepart;
}.bind(this);
 this.getXarrive=function(){
    return this.xarrive;
    }.bind(this);
this.getYdepart=function(){
    return this.ydepart;
    }.bind(this);
this.getYarrive=function(){
    return this.yarrive;
    }.bind(this);
};
Line.prototype=new Form();


// N'oubliez pas l'héritage !
