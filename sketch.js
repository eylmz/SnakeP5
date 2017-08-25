var snake = [];
var food;
var snakeWidth = 25;
var finish = false;
var length = 3;

function setup() {
	createCanvas(500, 500);
    frameRate(10);

	for(var i = length-1; i >= 0; i--) {
        var nSnake = new Snake();
    	nSnake.firstMove(i);
    	snake.push(nSnake);
	}
	food = new Food();

}

function draw() {
	background(211, 100, 100);

	foodControl();
    moveSnake();
    shiftSnake();

    food.show();
}

function foodControl(){
    if( food.control(snake[0]) ){
        food.newLocation();
        newSnake();
    }
}

function newSnake(){
    var nSnake = new Snake();
    var lastSnake = snake[snake.length-1];
    nSnake.direction(lastSnake.xspeed, lastSnake.yspeed);
    nSnake.location(lastSnake.x, lastSnake.y);
    nSnake.updateNew();
    snake.push(nSnake);
}

function moveSnake(){
    for(var i = snake.length - 1; i >= 0; i--) {
        if(finish === false) {
            if (dist(snake[0].x, snake[0].y, snake[i].x, snake[i].y) < 1 && i !== 0)
                return deathSnake();

            if (snake[i].move() === true)
                deathSnake();
        }
        snake[i].show();
    }
}

function deathSnake(){
    console.log("Game Over!");
    console.log("Your Score : " + (snake.length - length));

    finish = true;
}

function shiftSnake(){
    for(var j = snake.length - 1; j >= 1; j--){
        if(j < snake.length)
            snake[j].direction(snake[j-1].xspeed, snake[j-1].yspeed);
    }
}

function keyPressed(){
    var firstSnake = snake[0];
	if(keyCode === UP_ARROW && firstSnake.yspeed === 0)
        firstSnake.direction(0, -1);
	else if(keyCode === DOWN_ARROW  && firstSnake.yspeed === 0)
        firstSnake.direction(0, 1);
	else if(keyCode === LEFT_ARROW && firstSnake.xspeed === 0)
        firstSnake.direction(-1, 0);
	else if(keyCode === RIGHT_ARROW && firstSnake.xspeed === 0)
        firstSnake.direction(1, 0);
}

