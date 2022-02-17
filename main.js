var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL('BirthdayImage.jpg',function(Img){
        player_me=Img;
        player_me.scaleToWidth(800);
        player_me.scaleToHeight(700);
        player_me.set({top:0,left:0});
    canvas.add( player_me);
    });
    
}
	

function playSound(){
	x.play();
}
