function Food(){
    this.x = Math.floor(random(width / snakeWidth)) * snakeWidth;
    this.y = Math.floor(random(height / snakeWidth)) * snakeWidth;

    this.control = function(snake){
        if (dist(this.x, this.y, snake.x, snake.y) < 1)
            return true;
        return false;
    };

    this.newLocation = function(){
        this.x = Math.floor(random(width / snakeWidth))* snakeWidth;
        this.y = Math.floor(random(height / snakeWidth)) * snakeWidth;
    };

    this.show = function(){
        fill(255, 0, 0);
        rect(this.x, this.y, snakeWidth, snakeWidth);
    };
}