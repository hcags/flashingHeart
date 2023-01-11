input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    Play = false
})
let Play = false
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
let ShowLed = 1
Play = true
basic.forever(function () {
    if (!(Play)) {
    	
    } else if (ShowLed == 0) {
        led.enable(true)
        ShowLed = 1
    } else if (ShowLed == 1) {
        led.enable(false)
        ShowLed = 0
    }
    basic.pause(500)
})
