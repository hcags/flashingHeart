input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
	
})
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
let ShowLed = 0
basic.forever(function () {
    if (true) {
    	
    } else if (0 == 0) {
        ShowLed = 1
        led.enable(true)
    } else {
        ShowLed = 0
        led.enable(false)
    }
    basic.pause(500)
})
