input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    changeSpeed(150, 5)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    working = !(working)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    changeSpeed(0, -5)
})
function changeSpeed (limit: number, speedStep: number) {
    if (speed != limit) {
        speed += speedStep
    }
}
let speed = 0
let working = false
let icon = 0
let brightness = 255
let steps = 10
working = true
basic.showIcon(IconNames.Heart)
basic.setLedColor(0x00ff00)
basic.forever(function () {
    if (!(working)) {
        basic.setLedColor(0xff0000)
        return
    } else if (brightness <= 0) {
        steps = 10
    } else if (brightness >= 255) {
        steps = -10
    }
    brightness += steps
    led.setBrightness(brightness)
    basic.setLedColor(0x00ff00)
    basic.pause(speed)
})
