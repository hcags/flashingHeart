input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
	
})
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
let ShaowLed = 1
basic.forever(function () {
    if (true) {
    	
    } else if (ShaowLed == 0) {
        led.enable(true)
        ShaowLed = 1
    } else {
        led.enable(false)
        ShaowLed = 0
    }
    basic.pause(600)
})
