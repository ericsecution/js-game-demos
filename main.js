kaboom({
    global: true,
    scale: 3,
    clearColor: [0,0,0,1],
    canvas: document.getElementById('game'),
    width: 180,
    height: 180
});

loadSprite('player', 'hero.png');
loadSprite('wall', 'wall2.png');
loadSprite('door', 'opendoor.png');
loadSprite('item', 'item.png');

window.onload = function() {

    const gameData = require('./game_map.json');

    scene('game', () => {
        const rooms = JSON.parse(JSON.stringify(gameData));

        const roomDetails = rooms[0];

        // Map characters of the room layout into the sprites
        const roomConfig = {
            width: roomDetails.layout[0].length,
            height: roomDetails.layout.length,
            pos: vec2(20,20),
            '=': [
                sprite('wall'),
                solid(),
                'wall'
            ],
            '@': [
                sprite('player'),
                'player'
            ],
           i: [
            sprite('item'),
            solid(),
            'item'
           ],
           '1': [
            sprite('door'),
            solid(),
            'door'
           ]
        }

        addLevel(roomDetails.layout, roomConfig);
        
        const player = get('player')[0];

        const directions = {
            'left': vec2(-1, 0),
            'right': vec2(1, 0),
            'up': vec2(0, -1),
            'down': vec2(0, 1)
        }; 

        // Map key keypress to character movement
        for(const direction in directions) {
            keyDown(direction, () => {
                player.move(directions[direction].scale(60));
            })
        }

        player.overlaps('item', (i) => {
            destroy(i);
        })


        player.overlaps('door', () => {
            go('end');
        })

        player.action(() => {
            player.resolve();
        });
    })
    
    scene('end', () => {
        add([
            text('You have finished this Scene!', 6), 
            pos(width()/2, height()/2),
            origin('center')
        ]);
    })

    scene('main', () => {
        // display text
        add([
            text('Press the Spacebar to Begin!', 6),
            pos(width()/2, height()/2),
            origin('center')
        ]);

        keyPress('space', () => {
            go('game');
        });

        add([
            sprite("player"), // renders as a sprite
            pos(90, 65)
        ]);
    })



    start('main');
}