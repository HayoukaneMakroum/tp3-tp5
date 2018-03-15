



// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
    
    Form.prototype.paint = function(ctx) {
    ctx.beginPath();
    ctx.lineWidth=this.getEpaisseur();
    ctx.strokeStyle=this.getCouleur();
};  

    Rectangle.prototype.paint = function(ctx) {
    ctx.beginPath();
    ctx.lineWidth=this.getEpaisseur();
    ctx.strokeStyle=this.getCouleur();
    ctx.rect(this.getCoordX(), this.getCoordY(), this.getLargeur(), this.getHauteur());
    ctx.stroke();
    };

    Line.prototype.paint = function(ctx) {


        ctx.beginPath();
        ctx.lineWidth=this.getEpaisseur();
        ctx.strokeStyle=this.getCouleur();
       
        //ctx.rect(20, 30, 500, 200);

        ctx.moveTo(this.xdepart,this.ydepart);
      
        ctx.lineTo(this.xarrive,this.yarrive);
       
        ctx.stroke();
        };

    Drawing.prototype.paint = function(ctx,canvas) {
        console.log(this.forms);
        ctx.beginPath();
        ctx.fillStyle = '#F0F0F0'; // set canvas' background color
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.forms.forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);

            });
        };
 