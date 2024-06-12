input.onButtonPressed(Button.A, function () {
    radio.sendString("You are Secured")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
basic.showString("Ready! Press A")
radio.setGroup(150)
