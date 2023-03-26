input.onButtonPressed(Button.A, function () {
    radio.sendNumber(300)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(500)
})
let Ay = 0
radio.setGroup(1)
basic.forever(function () {
    Ay = input.acceleration(Dimension.Y)
    radio.sendValue("Ay", Ay)
})
