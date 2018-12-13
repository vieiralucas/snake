const Tail = function(x, y, toFolow, color) {

    const tail = {
        x: x,
        y: y,
        nextX: toFolow.x,
        nextY: toFolow.y,
        color: color,
        following: toFolow
    };

    tail.update = function() {
        tail.x = tail.nextX;
        tail.y = tail.nextY;
        tail.nextX = tail.following.x;
        tail.nextY = tail.following.y;
        tiles.getTile(tail.x, tail.y).color = tail.color;
    }

    return tail;
};
