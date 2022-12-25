basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            # # . . .
            . # # . .
            . . # # .
            # . . # .
            # # # # #
            `)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Heart)
    } else if (input.buttonIsPressed(Button.A)) {
        basic.showString("Hello!")
    }
})
