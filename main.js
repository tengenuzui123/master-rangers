// Create a variable canvas


block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 480;

var block_image_object= "";

// Complete the function new_image() to add new image
function new_image(get_image)
{
	fabric.Image.fromURL('BirthdayImage.jpg',function(Img){
		block_image_object = Img;
		block_image_object.scaleToWidth(700);
		block_image_object.scaleToHeight(510);
		block_image_object.set({top:block_y,left:block_x})
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
	// Use appropriate keycode to add red image
	if(keyPressed == '82' ) 
	{
block_x = 10;
new_image('red.jpg')
console.log('r');

	}
	// Use appropriate keycode to add green image
	if(keyPressed == '71' ) 
	{
block_x = 310;
new_image('green.png')
console.log('g');

	}
	if(keyPressed == '89' ) 
	{
block_x = 560;
new_image('yellow.png')
console.log('y');

	}
	if(keyPressed == '80' ) 
	{
block_x = 880;
new_image('pink.jpg')
console.log('p');

	}
	if(keyPressed == '66' ) 
	{
block_x = 1040;
new_image('blue.jpg')
console.log('b');

	}
	
}

