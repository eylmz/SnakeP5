function Snake(){
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.color = 51;

    this.move = function(){
        var flag = false;

        this.x += this.xspeed*snakeWidth;
        this.y += this.yspeed*snakeWidth;

        if(this.x < 0 || this.y < 0 || this.x > width - snakeWidth || this.y > height-snakeWidth)
            flag = true;

        this.x = constrain(this.x, 0, width-snakeWidth);
        this.y = constrain(this.y, 0, height-snakeWidth);

        return flag;
    };

    this.updateNew = function(){
        this.x -= this.xspeed * snakeWidth;
        this.y -= this.yspeed * snakeWidth;
    };

    this.firstMove = function(i){
        this.x = i * snakeWidth;
    };

    this.direction = function(x, y){
        this.xspeed = x;
        this.yspeed = y;
    };

    this.location  = function(x, y){
        this.x = x;
        this.y = y;
    };

    this.show = function(){
        fill(this.color);
        rect(this.x, this.y, snakeWidth, snakeWidth);
    }
}