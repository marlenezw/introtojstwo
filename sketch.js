
var floorPos_y;
var gameChar_x;
var gameChar_y;
var isLeft; 
var isRight; 
var isJumping;
var isFalling;

function setup()
{
	createCanvas(1024, 695);
    floorPos_y = height * 3/4;
    gameChar_x = 300;
    gameChar_y = floorPos_y;
    isLeft = false; 
    isRight = false; 
    isJumping = false;
    isPlummeting = false;
    
}

function draw()
{
    background(255,215,0); // fill the sky with gold
    
    // draw some yellowish ground
    noStroke();
	fill(240,230,140);
	rect(0, floorPos_y, width, height/4); 
    
	// Draw clouds.
    
    noStroke();
    fill(255);
    
    noStroke();
    fill(255, 80);
    rect(320, 122 - 80 / 3, 80, 40, 100);
    rect(320, 122, 160, 40, 100);

	// Draw trees.
    
    stroke(0);
        //trunk
        fill(205,133,63);
        rect(730,floorPos_y * 6/10 -50,20, 260);

        //leaves

        fill(0,128,0);
        noStroke();
        ellipse(710,(floorPos_y * 6.7/10) -70,90,90);

        ellipse(760,(floorPos_y * 6.7/10) -70,100,120);

	// Draw canyons.

    noStroke();
    fill(color('#666699'));
    rect(10, 520, 100, 186);
    fill(color('#cce6ff'));
    rect(10 + 20, 550, 100 - 40, 190);
    fill(255,215,0);
    rect(10 + 20, 482, 100 - 40, 68);
    
    //game character
    
    if(isLeft)
    {
        // add your walking left code
        fill(0, 204, 102);
        rect(gameChar_x-5, gameChar_y-50, 18, 40)
        fill(153, 76, 0);
        ellipse(gameChar_x +6, gameChar_y - 60 , 20, 25);
        fill(0);
        rect(gameChar_x + 2, gameChar_y -10, 7, 10);
        rect(gameChar_x - 8, gameChar_y-10, 6, 10);
        gameChar_x -= 5;
    }
    
    else if(isRight)
    {
        gameChar_x += 5;
        fill(0, 204, 102);
        rect(gameChar_x-15, gameChar_y-50, 18, 40)
        fill(153, 76, 0);
        ellipse(gameChar_x - 8, gameChar_y - 60 , 20, 25);
        fill(0);
        rect(gameChar_x , gameChar_y -10, 6, 10);
        rect(gameChar_x - 10, gameChar_y-10, 7, 10);
    }
    
    else if(isJumping && gameChar_y == floorPos_y)
    {
        gameChar_y -= 100;
        fill(0, 204, 102);
        rect(gameChar_x-15, gameChar_y-50, 30, 30)
        fill(153, 76, 0);
        ellipse(gameChar_x, gameChar_y - 60 , 25, 25);
        fill(0);
        rect(gameChar_x + 5, gameChar_y -20, 10, 10);
        rect(gameChar_x - 15, gameChar_y-20, 10, 10);
    }
    
    else if(gameChar_y < floorPos_y)
    {
        gameChar_y += 5;
        fill(0, 204, 102);
        rect(gameChar_x-15, gameChar_y-50, 30, 30)
        fill(153, 76, 0);
        ellipse(gameChar_x, gameChar_y - 60 , 25, 25);
        fill(0);
        rect(gameChar_x + 5, gameChar_y -20, 10, 10);
        rect(gameChar_x - 15, gameChar_y-20, 10, 10);
    }
    
    
    else
    {
        // add your standing front facing code
        fill(0, 204, 102);
        rect(gameChar_x-15, gameChar_y-50, 30, 40);
        fill(153, 76, 0);
        ellipse(gameChar_x, gameChar_y - 60 , 25, 25);
        fill(0);
        rect(gameChar_x + 5, gameChar_y -10, 10, 10);
        rect(gameChar_x - 15, gameChar_y-10, 10, 10);

    }

} 

function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
    console.log("keyReleased: " + key);
    console.log("keyPressed: " + keyCode);
    
    if(keyCode == LEFT_ARROW)
    {
        console.log('left arrow');
        isLeft = true;
    }
    
    else if(keyCode == RIGHT_ARROW)
    {
        console.log('right arrow');
        isRight = true;
    }
    
    else if(keyCode == 32)
    {
        console.log('space-bar');
        isJumping = true;
    }
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
    
    if(keyCode == LEFT_ARROW)
    {
        console.log('left arrow');
        isLeft = false;
    }
    
    else if(keyCode == RIGHT_ARROW)
    {
        console.log('right arrow');
        isRight = false;
    }
    
    else if(keyCode == 32)
        {
            console.log('space-bar');
            isJumping = false;
        }
}

                    




 
