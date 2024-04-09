sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.bubbles, 100)
    music.baDing.play()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    music.wawawawaa.play()
    info.changeLifeBy(-1)
})
let bee: Sprite = null
let clover: Sprite = null
scene.setBackgroundImage(assets.image`background`)
let hero = sprites.create(img`
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . e e e d d f d . . . . . . 
    . . e d e d d d f d d d . . . . 
    . . e d e e d d d f d d d . . . 
    . . e e d d d d f f f f . . . . 
    . . . . d d d d d d d . . . . . 
    . . . 7 7 2 7 7 7 7 . . . . . . 
    . . 7 7 7 2 7 7 2 7 7 7 . . . . 
    . 7 7 7 7 2 2 2 2 7 7 7 7 . . . 
    . d d 7 2 5 2 2 5 2 7 d d . . . 
    . d d d 2 2 2 2 2 2 d d d . . . 
    . d d 2 2 2 2 2 2 2 2 d d . . . 
    . . . 2 2 2 . . 2 2 2 . . . . . 
    . . e e e . . . . e e e . . . . 
    . e e e e . . . . e e e e . . . 
    `, SpriteKind.Player)
controller.moveSprite(hero)
hero.setStayInScreen(true)
game.onUpdateInterval(5000, function () {
    clover = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 9 . . . . . . . 
        . . . . . 6 9 6 . . . . . . . . 
        . . . 6 9 6 9 6 . . . . . . . . 
        . . 6 6 9 6 9 . . . 6 . . . . . 
        . 6 6 6 9 6 9 6 . 9 6 . . . . . 
        6 f 6 6 9 6 9 6 9 9 . . . . . . 
        6 6 6 6 f 6 f 6 9 9 . . . . . . 
        . 6 6 6 9 f 9 6 . 9 6 . . . . . 
        . . 6 6 9 6 9 . . . 6 . . . . . 
        . . . 6 9 6 9 6 . . . . . . . . 
        . . . . . 6 9 6 . . . . . . . . 
        . . . . . . . . 9 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
    bee = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . . e 7 7 7 7 e . . . . . 
        . . . . . 7 2 2 2 2 7 . . . . . 
        . . . . . 7 1 1 2 1 7 . . . . . 
        . . . . . 7 2 2 2 2 7 . . . . . 
        . . . . . e 7 7 7 7 e . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . . e e e e e e . . . . . 
        `, randint(-50, 50), randint(-50, 50))
    bee.setKind(SpriteKind.Enemy)
})
