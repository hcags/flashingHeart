input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
	
})
let ShowLed = 0
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
basic.forever(function () {
    if (true) {
    	
    } else if (ShowLed == 0) {
        led.enable(true)
        ShowLed = 1
    } else {
        led.enable(false)
    }
    basic.pause(600)
    ShowLed = 0
})
