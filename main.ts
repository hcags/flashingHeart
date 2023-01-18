input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    Play = !(Play)
    music.playMelody("C5 G F E A F A D ", 344)
})
let Play = false
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
let showLed = 1
Play = true
basic.forever(function () {
    if (!(Play)) {
    	
    } else if (showLed == 0) {
        led.enable(true)
        showLed = 1
    } else if (showLed == 1) {
        led.enable(false)
        showLed = 0
    }
    basic.pause(500)
})
