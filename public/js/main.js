const W = window.innerWidth * 0.95,
    H = window.innerHeight * 0.95,
    horizontalTiles = 32,
    verticalTiles = 18,
    speed = 6,
    canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    tiles = new Tiles(),
    controls = new Controls(),
    restart = function() {
        snake = new Snake();
        food = new Food();
    };
let frames = 0,
    snake = new Snake(),
    food = new Food();

window.onload = function() {
    const init = function() {
            canvas.width = W;
            canvas.height = H;
            document.addEventListener('keydown', KeyBoard.keyPressed);
            document.addEventListener('keyup', KeyBoard.keyReleased);
            document.addEventListener('touchstart', KeyBoard.touchStart);
            document.addEventListener('click', KeyBoard.click);
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
            food.update();
            snake.update();
        },
        draw = function() {
            tiles.draw(ctx);
            controls.draw(ctx);
        };

    init();
}
