basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        basic.showArrow(ArrowNames.West)
    }
    if (input.isGesture(Gesture.TiltRight)) {
        basic.showArrow(ArrowNames.East)
    }
    if (input.isGesture(Gesture.LogoUp)) {
        basic.showArrow(ArrowNames.North)
    }
    if (input.isGesture(Gesture.LogoDown)) {
        basic.showArrow(ArrowNames.South)
    }
})
