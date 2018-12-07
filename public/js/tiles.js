let Tiles = function() {

    let actualTiles = [],
        tiles = {};

    for (let h = 0; h < horizontalTiles; h++) {
        for (let v = 0; v < verticalTiles; v++) {
            actualTiles.push(new Tile(h, v, W / horizontalTiles, H / verticalTiles));
        }
    }

    tiles.draw = function(ctx) {
        for (let i = 0; i < actualTiles.length; i++) {
            actualTiles[i].draw(ctx);
        }
    };

    tiles.update = function() {
        for (let i = 0; i < actualTiles.length; i++) {
            actualTiles[i].color = '#000';
        }
    };

    tiles.getTile = function(x, y) {
        for (let i = 0; i < actualTiles.length; i++) {
            if (actualTiles[i].x === x && actualTiles[i].y === y) {
                return actualTiles[i];
            }
        }
    };

    return tiles;
}
