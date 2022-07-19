function doSomething () {
	
}
let column = 0
let row = 0
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        if (input.soundLevel() > 128) {
            row = randint(0, 4)
            column = randint(0, 4)
        }
        if (led.point(column, row)) {
            led.unplot(column, row)
            led.plot(column + 1, row)
        }
    }
})
