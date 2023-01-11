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
function checkPins () {
    pinReturn = false
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showIcon(IconNames.Happy)
        pinReturn = true
    } else if (input.pinIsPressed(TouchPin.P1)) {
        basic.showIcon(IconNames.Sad)
        pinReturn = true
    } else if (input.pinIsPressed(TouchPin.P2)) {
        basic.showIcon(IconNames.Confused)
        pinReturn = true
    } else if (input.pinIsPressed(TouchPin.P3)) {
        basic.showIcon(IconNames.Angry)
        pinReturn = true
    }
    return pinReturn
}
let pinReturn = false
let speed = 0
let working = false
let icon = 0
let brightness = 255
let steps = 10
working = true
speed = 0
basic.showIcon(IconNames.Heart)
basic.setLedColor(0x00ff00)
basic.forever(function () {
    if (checkPins()) {
        led.setBrightness(255)
        return
    }
    basic.showIcon(IconNames.Heart)
    if (!(working)) {
        basic.setLedColor(0xff0000)
        return
    } else if (brightness <= 0) {
        steps = 50
    } else if (brightness >= 255) {
        steps = -50
    }
    brightness += steps
    led.setBrightness(brightness)
    basic.setLedColor(0x00ff00)
    basic.pause(speed)
})
