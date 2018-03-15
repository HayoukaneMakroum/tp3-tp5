
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width=800;
canvas.height=600;

// Code temporaire pour tester le DnD
new DnD(canvas);
ctx.fillStyle = '#F0F0F0'; // set canvas' background color
ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas

// Code temporaire pour tester l'affiche de la vue
var rec = new Rectangle(10, 20, 50, 100, 5, '#00CCC0');
var ligne = new Line(10, 20, 350, 500, 5, 'red');
var ligne2 = new Line(30, 50, 520, 500, 7, 'blue');
console.log(ligne);
// tester également Dessin.

// Code final à utiliser pour manipuler Pencil.
var drawing = new Drawing();
var pencil = new Pencil(ctx, drawing, canvas);
drawing.paint(ctx, canvas);

function changeMode(id){
    pencil.currEditingMode = id;
}

function supprimer(id){
    drawing.forms.splice(id,1);
    pencil.updateList();
    drawing.paint(ctx, canvas);

}

