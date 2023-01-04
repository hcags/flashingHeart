input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
	
})
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    `)
let ShowLed = 1
basic.forever(function () {
    let Play = 0
    if (Play) {
    	
    } else if (ShowLed == 0) {
        ShowLed = 1
        led.enable(true)
    } else {
        led.enable(false)
        ShowLed = 0
    }
    basic.pause(500)
})
