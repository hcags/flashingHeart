input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
	
})
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
let ShowLed = 1
basic.forever(function () {
    if (true) {

    } else if (ShowLed == 0) {
        led.enable(true)
        ShowLed = 1
    } else if (ShowLed == 1) {
        led.enable(false)
        ShowLed = 0
    }
    basic.pause(500)
})
