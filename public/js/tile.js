const Tile = function(x, y, w, h) {

    const tile = {
        x: x,
        y: y,
        w: w,
        h: h,
        color: '#000'
    };

    tile.draw = function(ctx) {
        ctx.strokeStyle = tile.color;
        ctx.fillStyle = tile.color;
        ctx.fillRect(tile.x * tile.w, tile.y * tile.h, tile.w, tile.h);
        ctx.strokeRect(tile.x * tile.w, tile.y * tile.h, tile.w, tile.h);
    }

    return tile;
};
