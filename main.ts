input.onButtonPressed(Button.A, function () {
    basic.showString("ANDREA")
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            # . . . #
            # . # . #
            . # . # .
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            . # . # .
            # . # . #
            # . . . #
            `)
    }
    basic.clearScreen()
    basic.showString("ANDREA")
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            # . . . #
            # . # . #
            . # . # .
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            . # . # .
            # . # . #
            # . . . #
            `)
    }
    basic.clearScreen()
})
basic.forever(function () {
	
})
