input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    Play = !(Play)
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playMelody("C5 B A G F E D C ", 120)
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
