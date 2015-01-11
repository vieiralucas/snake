var moveKeys = {
        '37': 'left',
        '38' : 'up',
        '39': 'right',
        '40': 'down'
    },
    keys = {
        '27': 'esc'
    },
    buffer = [],
    KeyBoard = {};

KeyBoard.keyPressed = function(key) {
    if (keys[key.which] === 'esc') {
        buffer = [];
    }else if (snake.canGo(moveKeys[key.which]) && buffer[0] !== moveKeys[key.which]) {
        buffer.unshift(moveKeys[key.which]);
    }
}

KeyBoard.update = function() {
    var next = buffer.pop();
    if (next) {
        snake.setDirection(next);
    }
}
