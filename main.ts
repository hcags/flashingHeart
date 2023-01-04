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
        led.enable(true)
        ShowLed = 1
    } else {
        led.enable(false)
        ShowLed = 0
    }
    basic.pause(500)
})
