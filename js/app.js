// size of the display
let w = screen.width;
let h = screen.height;

//global variables that will store the toolbox colour palette and the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;
let stencils = null;



function setup() {
    // We are still calling createCanvas like in the past, but now 
    // we are storing the result as a variable. This way we can 
    // call methods of the element, to set the position for instance.
    let canvas = createCanvas(w, h);

    // Here we call methods of each element to set the position 
    // and id, try changing these values.
    // Use the inspector to look at the HTML generated from this 
    // code when you load the sketch in your browser.
    canvas.position(0, 0);
    canvas.id("canvas2d")
    canvas.class("lemon");





}

function draw() {
    background(255, 255, 255);

    

    FreehandTool();




}






function HelperFunctions() {

	//Jquery click events. Notice that there is no this. at the
	//start we don't need to do that here because the event will
	//be added to the button and doesn't 'belong' to the object

	//event handler for the clear button event. Clears the screen
	select("#clearButton").mouseClicked(function() {
		background(255, 255, 255);
		//call loadPixels to update the drawing state
		//this is needed for the mirror tool
		loadPixels();
	});

	//event handler for the save image button. saves the canvsa to the
	//local file system.
	select("#saveImageButton").mouseClicked(function() {
		saveCanvas("myPicture", "jpg");
	});

	this.loadStencils = function() {
		return loadJSON('data/stencils.json');
	}
}





// function setup() {

// 	//create a canvas to fill the content div from index.html
// 	canvasContainer = select('#content');
// 	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
// 	c.parent("content");

// 	//create helper functions and the colour palette
// 	helpers = new HelperFunctions();
// 	stencils = helpers.loadStencils();
// 	// colourP = new ColourPalette();

// 	//create a toolbox for storing the tools
// 	toolbox = new Toolbox();

// 	//add the tools to the toolbox.
// 	toolbox.addTool(new FreehandTool());
// 	toolbox.addTool(new AutoDrawTool(stencils));
// 	toolbox.addTool(new LineToTool());
// 	toolbox.addTool(new SprayCanTool());
// 	toolbox.addTool(new mirrorDrawTool());
// 	toolbox.addTool(new BucketTool(colourP));
// 	toolbox.addTool(new ShapeTool());
// 	toolbox.addTool(new EraserTool());
// 	background(255);

// }

// function draw() {
// 	//call the draw function from the selected tool.
// 	//hasOwnProperty is a javascript function that tests
// 	//if an object contains a particular method or property
// 	//if there isn't a draw method the app will alert the user
// 	if (toolbox.selectedTool.hasOwnProperty("draw")) {
// 		toolbox.selectedTool.draw();
// 	} else {
// 		alert("it doesn't look like your tool has a draw method!");
// 	}
// }