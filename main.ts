input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
	
})
basic.showLeds(`
    . . . . .
    . . # . .
    . . # . .
    # # # # .
    # # # # #
    `)
let ShowLed = 1
basic.forever(function () {
    if (true) {
        led.enable(true)
        ShowLed = 1
    } else if (ShowLed == 0) {
        led.enable(false)
        ShowLed = 0
    } else if (false) {
    	
    }
    basic.pause(500)
})
