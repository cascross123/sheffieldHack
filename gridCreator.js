//Code http://jsfiddle.net/6qkdP/2/
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
            console.log("this is the cells:",cell);
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