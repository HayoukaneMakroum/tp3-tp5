
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = 'red';
	this.currentShape = 0;


	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.


	new DnD(canvas, this);

	this.updateList = function () {
		var list = document.getElementById("liste");
		list.innerHTML = "";
		drawing.forms.forEach(function (form) {
			var id = drawing.forms.indexOf(form);
		  if (form.coordX) {  
			list.innerHTML += "<li onclick='supprimer("+id+")' class='list-group-item' style='color:" + form.getCouleur() + ";'> " +
			  "rectangle : (" + form.coordX + "," + form.coordY + "), larg:" + form.getLargeur() + ", haut:" + form.getHauteur() + ", epai:" + form.getEpaisseur()
			  + " <button type='button' class='btn btn-default'><span class='glyphicon glyphicon-remove-sign'></span></button>" +
	
			  "</li>";
		  } else if (form.xdepart) {
			list.innerHTML += "<li onclick='supprimer("+id+")' class='list-group-item' style='color:" + form.getCouleur() + ";'>" +
			  "ligne : (" + form.xdepart + "," + form.ydepart + "), (" + form.xarrive + "," + form.yarrive + "), epai:" + form.getEpaisseur()
			  + "<button type='button' class='btn btn-default' ><span class='glyphicon glyphicon-remove-sign'></span></button>" +
			  "</li>";
		  }
		});
	  };
	  
	this.onInteractionStart = function(DnD) {
		var butRect = document.getElementById('butRect');
		var butLine = document.getElementById('butLine');
		var spinnerWidth = document.getElementById('spinnerWidth');
		var colour = document.getElementById('colour');

		this.currLineWidth = document.getElementById("spinnerWidth").value;
		this.currColour =  document.getElementById("colour").value;
		
		if (butRect.checked) {
			this.currEditingMode = editingMode.rect;
		} else if (butLine.checked) {
			this.currEditingMode = editingMode.line;
		}

		switch (this.currEditingMode) {

		// rectangle
		case editingMode.rect: {
			console.log("rect ");

			
			break;
		}
		case editingMode.line: {
			console.log("line ");
			
			break;
		}
		}
	}.bind(this);

	this.onInteractionUpdate = function(DnD) {

		if (this.currEditingMode == 0) {
			var largeur = DnD.xfinal - DnD.xDepart;
			var hauteur = DnD.yfinal - DnD.yDepart;
			console.log(DnD.xDepart+", "+DnD.yDepart+", "+DnD.xfinal+", "+DnD
		.yfinal);
			this.currentShape = new Rectangle(DnD.xDepart, DnD.yDepart,largeur, hauteur, this.currLineWidth, this.currColour);
			
		} else {
			
			
			this.currentShape = new Line(DnD.xDepart, DnD.yDepart,DnD.xfinal, DnD.yfinal, this.currLineWidth, this.currColour);

			
		}
		
		drawing.paint(ctx, canvas);
		this.currentShape.paint(ctx);

	}.bind(this);

	this.onInteractionEnd = function(DnD) {

		console.log("current shape "+typeof(this.currentShape));
		console.log(this.currentShape);
		drawing.add(this.currentShape);
		drawing.paint(ctx, canvas);
		this.updateList();

	}.bind(this);

};


