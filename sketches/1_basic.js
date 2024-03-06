function setup() {
	createCanvas(windowWidth, windowHeight)
	fill(255)
	textSize(39)
}

function draw() {
	background(0)
	ellipse(millis() % windowWidth, millis() * 0.1 % windowHeight, 200)
	text("Rüebli", windowWidth /2, windowHeight/2)
}
