input.onButtonPressed(Button.A, function () {
    PLAYER.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    PLAYER.change(LedSpriteProperty.X, 1)
})
let PLAYER: game.LedSprite = null
// create player
PLAYER = game.createSprite(0, 0)
// create player
let ENEMY = game.createSprite(5, 5)
basic.forever(function () {
    basic.pause(10)
    if (ENEMY.isTouching(PLAYER)) {
        images.createImage(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `).showImage(0, 0)
    } else {
        ENEMY.set(LedSpriteProperty.X, PLAYER.get(LedSpriteProperty.X) + randint(-2, 2))
        ENEMY.set(LedSpriteProperty.Y, PLAYER.get(LedSpriteProperty.Y) + randint(-2, 1))
    }
})
