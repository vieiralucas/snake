var W = window.innerWidth / 1.5,
    H = window.innerHeight / 1.5,
    horizontalTiles = 32,
    verticalTiles = 18,
    frames = 0,
    speed = 10,

    snake = new Snake(),
    tiles = new Tiles(),
    food = new Food(),

    restart = function() {
        snake = new Snake();
        food = new Food();
    };

window.onload = function() {
    var canvas = document.querySelector('canvas'),
        ctx = canvas.getContext('2d'),

        init = function() {
            canvas.width = W;
            canvas.height = H;
            canvas.style.position = 'absolute';
            canvas.style.top = (window.innerHeight - H) / 2 + 'px';
            canvas.style.left = (window.innerWidth - W) / 2 + 'px';
            document.addEventListener('keydown', KeyBoard.keyPressed);
            document.addEventListener('keyup', KeyBoard.keyReleased);
            run();
        },
        run = function() {
            draw();
            if (frames % speed === 0) {
                update();
            }
            frames++;
            window.requestAnimationFrame(run, canvas);
        },
        update = function() {
            KeyBoard.update();
            tiles.update();
            snake.update();
            food.update();
        },
        draw = function() {
            tiles.draw(ctx);
        };

    init();
}
