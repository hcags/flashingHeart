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
input.onGesture(Gesture.Shake, function () {
    working = false
    basic.setLedColor(0xffff00)
    led.setBrightness(255)
    basic.showString("" + (speed))
    basic.showIcon(IconNames.Heart)
    working = true
})
let working = false
let speed = 0
let brightness = 255
speed = 0
working = true
let steps = 10
basic.showIcon(IconNames.Heart)
basic.setLedColor(0x00ff00)
basic.forever(function () {
    if (working) {
        basic.setLedColor(0x00ff00)
        if (brightness <= 0) {
            steps = 10
        } else if (brightness >= 255) {
            steps = -10
        }
        brightness += steps
        led.setBrightness(brightness)
    } else {
        basic.setLedColor(0xff0000)
    }
    basic.pause(speed)
})
