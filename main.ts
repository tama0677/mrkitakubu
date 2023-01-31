input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 5; index++) {
        music.playMelody("G F G - G F G - ", 300)
        music.playMelody("G F G - G F G - ", 300)
        basic.showLeds(`
            . # . . #
            . # . # .
            . # # . .
            . # . # .
            . # . . #
            `)
        basic.showLeds(`
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            . # . . #
            . # . # .
            . # # . .
            . # . # .
            . # . . #
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # . .
            . # . # .
            . # # # .
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
    }
})
