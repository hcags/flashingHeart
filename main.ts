input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
	
})
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
let showLed = 1
basic.forever(function () {
    if (true) {
    	
    } else if (showLed == 0) {
        led.enable(true)
        showLed = 1
    } else {
        led.enable(false)
        showLed = 0
    }
    basic.pause(500)
})
