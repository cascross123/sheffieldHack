//Code http://jsfiddle.net/6qkdP/2/

// array of images
var images = [];
    
function loadImages(){
    // Image factory
var createImage = function(src, title) {
  var img   = new Image();
  img.src   = src;
  img.alt   = title;
  img.title = title;
    
  
  return img; 
    
};


// push two images to the array
images.push(createImage("background.png", "foo title"));
images.push(createImage("wall.png", "bar title"));

// output
console.log(images);
    for (var i =0; i < images.length; i++){
        
        images[i].src
        
        console.log(JSON.stringify(images[i].src));
        
        
    }

//function newTileset(){
    
    
    {
   var tables= document.getElementsByTagName('tileset');
while (tables.length>0)
    tables[0].parentNode.removeChild(tables[0]);
var lastClicked;
var grid = clickableGrid(10,2,function(el,row,col,i){
    console.log("You clicked on element:",el);
    console.log("You clicked on row:",row);
    console.log("You clicked on col:",col);
    console.log("You clicked on item #:",i);
    
    el.className='clicked';
    if (lastClicked) lastClicked.className='';
    lastClicked = el;
   
});

document.body.appendChild(grid);
     
function clickableGrid( rows, cols, callback ){
    var i=0;
    console.log("this is the length:", images.length);
    
    var grid = document.createElement('tileset');
    grid.className = 'grid';
    for (var r=0;r<rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;++c){
            var cell = tr.appendChild(document.createElement('td'));
             
            if (images[i] != null) {
            cell.innerHTML = "<img src=\""+images[i].src+"\" alt=\"image\">";
                
            }
            i++;
             var alt = (images[i].alt);
                console.log("DATA MOTHER FUCKER", alt);
            
//             var testdata= document.getElementById('innerHTML').alt;
//            console.log("this is the INFORMATION YOU NEED", testdata);
            cell.addEventListener('click',(function(el,r,c,i){
                return function(){
                    
                    callback(el,r,c,i);
                }
            })(cell,r,c,i),false);
        }
    }
    
    
    return grid;
    }
    
}
}
function createGrid(){
    
    
    
   var tables= document.getElementsByTagName('table');
while (tables.length>0)
    tables[0].parentNode.removeChild(tables[0]);
    
var lastClicked;
    
    var gridWidth = document.getElementById('rows').value;
    var gridHeight = document.getElementById('columns').value;
    console.log("this is the width:",gridWidth);
    console.log("this is the height:",gridHeight);

    var gridW = parseInt(gridWidth);
    var gridH = parseInt(gridHeight);
    console.log("this is the figure",gridW);
    console.log("this is the figure",gridH);
    
var grid = clickableGrid(gridW,gridH,function(el,row,col,i){
    
    
    console.log("You clicked on element:",el);
    console.log("You clicked on row:",row);
    console.log("You clicked on col:",col);
    console.log("You clicked on item #:",i);
    

    el.className='clicked';
    if (lastClicked) lastClicked.className='';
    lastClicked = el;
});
console.log("this is the grid values", grid);
document.body.appendChild(grid);
     
function clickableGrid( rows, cols, callback ){
    console.log("row",rows);
    console.log("columns", cols);
    var i=0;
    var grid = document.createElement('table');
    grid.className = 'grid';
    for (var r=0;r<rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;++c){
            var cell = tr.appendChild(document.createElement('td'));
            {
             cell.innerHTML = "A plethera of peni";
            }
            console.log("this is the cells:",cell);
            
            cell.addEventListener('click',(function(el,r,c,i){
                return function(){
                    callback(el,r,c,i);
                }
            })(cell,r,c,i),false);
            console.log(JSON.stringify(cell.innerHTML));
        }
    /*console.log("i'm a little teapot")
    el.className='clicked';
    if (lastClicked) lastClicked.className='';
    lastClicked = el;
    console.log("hey good looking ;)")
    */
      //cell.innerHTML = "<img src=\""+images[i].src+"\" alt=\"image\">";  
        }
    
        
        

    
    return grid;
}
    
}
//
//function exportMap()
//    {
//        
//        
//    }
//

