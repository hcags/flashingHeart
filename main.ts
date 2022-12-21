basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
let ShaowLed = 1
basic.forever(function () {
    if (ShaowLed == 0) {
        led.enable(true)
        ShaowLed = 1
    } else {
        led.enable(false)
        ShaowLed = 0
    }
    basic.pause(500)
})
