
if (2<20){
var circle = function(x, y, xs, ys){
    this.x = x;
    this.y = y;
    this.xs = xs;
    this.ys = ys;
    this.draw = function() {
        noStroke();
        fill (0, 255, 0);
        ellipse(this.x, this.y, 20, 20);            
        this.x+=this.xs;
        this.y+=this.ys;
        if (this.x>390 || this.x<10) {
            this.xs = -this.xs;
        }
        if (this.y>390 || this.y<10) {
            this.ys = -this.ys;
        }
    };
};

//An array for our circles
var circleArray = [];
//Push a few circles into an array (Don't forget to use "new")
for(var cir = 0; cir < 10; cir ++){
    circleArray.push(new circle(200, 200, random(-2, 2), random(-2, 2)));
}

//frameRate of 100
frameRate(100);

var draw = function() {
    fill (0, 0, 0, 25);
    rect(-1, -1, 401, 401);
    
    //Draw circles using object data stored in "this"
    for (var i in circleArray) {
        circleArray[i].draw();
    }
};

//Add new circles when mouse is clicked
var mouseClicked = function(){
    circleArray.push(new circle(mouseX, mouseY, random(-2, 2), random(-2, 2)));
};
}
