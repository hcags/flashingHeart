basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
let ShowLed = 1
basic.forever(function () {
    if (ShowLed == 0) {
        led.enable(true)
        ShowLed = 1
    } else {
        led.enable(false)
        ShowLed = 0
    }
    basic.pause(500)
})
