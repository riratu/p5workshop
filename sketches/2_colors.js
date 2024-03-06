function setup() {
	createCanvas(windowWidth, windowHeight)
	colorMode(HSB, 255)
	textSize(80)
}

function draw() {

	background(0)
	
	fill(millis() * 0.1 % 255,255, 250)
	rect(400, 100, 100)
	
	fill(255, millis() * 0.1 % 255, 250)
	rect(400, 300, 100)
		
	fill(255, 255, millis() * 0.1 % 255)
	rect(400, 500, 100)
}

