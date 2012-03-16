/**
 * @author Kyle Reden
 */

window.onload = function() 
{
	var kin = new Kinetic_2d("myCanvas");
	var canvas = kin.getCanvas();
	var context = kin.getContext();
	
	var ball = {
		x: canvas.width / 2,
		y: canvas.height * 0.5,
		vx: 0,
		vy: 0,
		radius: 20
	};
	
	var bin = {
		x: canvas.width /2,
		y: canvas.height * 0.2,
		vx: 0,
		vy: 0,
		radius: 20
	};
	
	var bin2 = {
		x: canvas.width / 6,
		y: canvas.height * 0.2,
		vx: 0,
		vy: 0,
		radius: 20
	};
	
	var bin3 = {
		x: canvas.width / 1.2,
		y: canvas.height * 0.2,
		vx: 0,
		vy: 0,
		radius: 20
	};
	
	//Mouse Cpntrols
	var dragDrop = {
		mouseX: 0,
		mouseY: 0,
		mouaseOffsetX: 0,
		mouseOffsetY: 0,
		lastMouseX: 0,
		lastMouseY: 0,
		offsetX: 0,
		offsetY: 0,
		/*Touch Controls
		touchX: 0,
		touchY: 0,
		touchOffsetX: 0,
		touchOffsetY: 0,
		lastTouchX: 0,
		lastTouchY: 0,*/
		//bool
		isDragging: false
	};
	
	canvas.addEventListener("mouseup", function(){
		dragDrop.isDragging = false;
		dragDrop.mouseOffsetX = 0;
		dragDrop.mouseOffsetY = 0;
	}, false);
	
	
	  /*Touch Controls
	 canvas.addEventListener("touchend", function(){
		dragDrop.isDragging = false;
		dragDrop.touchOffsetX = 0;
		dragDrop.touchOffsetY = 0;
	}, false);
	/*canvas.addEventListener("touchstart", function(){
		var touchPos = this.getTouchPos();
			var touchX = touchPos.x;
			var touchY = touchPos.y;
			
			dragDrop.isDragging = true;
			dragDrop.offsetX = touchX - ball.x;
			dragDrop.offsetY = touchY - ball.y;
			ball.vx = 0;
			ball.vy = 0;
			
			console.log('start')
	}, false);*/
	kin.setDrawStage(function(){
		//update puck
		updateBall (kin, ball, bin, bin2, bin3, dragDrop)
		
		//clear cnavas
		this.clear();
		
		//draw puck
		kin.beginRegion();
		
		context.beginPath();
		context.arc(bin.x, bin.y, bin.radius, 0, 2 * Math.PI, false);
		context.fillStyle = "green";
		context.fill();
		context.strokeStyle = "white";
		context.stroke();
		
		context.beginPath();
		context.arc(bin2.x, bin2.y, bin2.radius, 0, 2 * Math.PI, false);
		context.fillStyle = "green";
		context.fill();
		context.strokeStyle = "white";
		context.stroke();
		
		context.beginPath();
		context.arc(bin3.x, bin3.y, bin3.radius, 0, 2 * Math.PI, false);
		context.fillStyle = "green";
		context.fill();
		context.strokeStyle = "white";
		context.stroke();
		
		context.beginPath();
		context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI, false);
		context.fillStyle = "red";
		context.fill();
		
		/*kin.addRegionEventListener("touchdown", function(){
			var touchPos = kin.getTouchPos();
			
				var touchX = touchPos.x;
				var touchY = touchPos.y;
				dragDrop.isDragging = true;
				dragDrop.offsetX = touchX - ball.x;
				dragDrop.offsetY = touchY - ball.y;
				ball.vx = 0;
				ball.vy = 0;
			
		});
		
		kin.addRegionEventListener("touchmove", function(){
			var touchPos = canvas.getTouchPos();
			var touchX = touchPos.x - 20;
			var touchY = touchPos.y - 50;
			
			dragDrop.isDragging = true;
			dragDrop.offsetX = touchX - ball.x;
			dragDrop.offsetY = touchY - ball.y;
			ball.vx = 0;
			ball.vy = 0;
			
			console.log('move');
		});*/
		
		this.addRegionEventListener("mousedown", function(){
			var mousePos = kin.getMousePos();
			var mouseX = mousePos.x;
			var mouseY = mousePos.y;
			dragDrop.isDragging = true;
			dragDrop.offsetX = mouseX - ball.x;
			dragDrop.offsetY = mouseY - ball.y;
			ball.vx = 0;
			ball.vy = 0;
		});
		kin.closeRegion();
	});
	kin.startAnimation();
};

function updateBall(kin, ball, bin, bin2, bin3, dragDrop)
{
	var canvas = kin.getCanvas();
	
	//physics variables
	var gravity = 20; // px / second^2
	var speedIncrementFromGravityEachFrame = gravity * kin.getTimeInterval() / 1000;
	var collisionDamper = 0.2; // 20% energy loss
	var floorFriction = 5; 
	var floorFrictiontionSpeedReduction = floorFriction * kin.getTimeInterval() / 1000;
	
	if(dragDrop.isDragging)
	{
		var mousePos = kin.getMousePos();
		var touchPos = kin.getTouchPos();
		
		var ballVec = ball.x - ball.y;
		var binVec = bin.x - bin.y;
		
		if(mousePos != null)
		{
			var mouseX = mousePos.x;
			var mouseY = mousePos.y
			
			var c = 0.06 * kin.getTimeInterval();
			ball.vx = c * (mouseX - dragDrop.lastMouseX);
			ball.vy = c * (mouseY - dragDrop.lastMouseY);
			dragDrop.lastMouseX = mouseX;
			dragDrop.lastMouseY = mouseY;
			dragDrop.mouseOffsetX = mouseX - dragDrop.offsetX;
			dragDrop.mouseOffsetY = mouseY - dragDrop.offsetY;
			ball.x = mouseX - dragDrop.offsetX;
			ball.y = mouseY - dragDrop.offsetY;
		}
		if (touchPos != null)
		{
			var touchX = touchPos.x;
			var touchY = touchPos.y;
			
			var c = 0.06 * kin.getTimeInterval();
			ball.vx = c*(touchX - dragDrop.lastTouchX);
			ball.vy = c*(touchY - dragDrop.lastTouchY);
			dragDrop.lastTouchX = touchX;
			dragDrop.lastTouchY = touchY;
			dragDrop.touchOffsetX = touchX - dragDrop.offsetX;
			dragDrop.touchOffsetY = touchY - dragDrop.offsetY;
			ball.x = touchX - dragDrop.offsetX;
			ball.y = touchY - dragDrop.offsetY;
		}
	}
	else
	{
		ball.vy += speedIncrementFromGravityEachFrame;
		ball.y += ball.vy;
		ball.x += ball.vx;
		
		if(ball.y < ball.radius)
		{
			ball.y = ball.radius;
			ball.vy *= -1;
			ball.vy *= (1 - collisionDamper);
		}
		
		if(ball.y > (canvas.height - ball.radius))
		{
			ball.y = canvas.height - ball.radius;
			ball.vy *= -1;
			ball.vy *= (1-collisionDamper);
		}
		
		if(ball.y == canvas.height - ball.radius)
		{
			if(ball.vx > 0.1)
			{
				ball.vx -= floorFrictiontionSpeedReduction;
			}
			else if (ball.vx < -0.1)
			{
				ball.vx += floorFrictiontionSpeedReduction;
			}
			else
			{
				ball.vx = 0;
			}
		}
		
		if(ball.x > (canvas.width - ball.radius))
		{
			ball.x = canvas.width - ball.radius;
			ball.vx *= -1;
			ball.vx *= (1 - collisionDamper);
		}
		if(ball.x < (ball.radius))
		{
			ball.x = ball.radius;
			ball.vx *= -1;
			ball.vx *= (1 - collisionDamper);
		}
		if (!(ball.x + (ball.radius + 20) < bin.x)&&
				!(bin.x + (bin.radius + 20) < ball.x) &&
				!(ball.y + (ball.radius + 20) < bin.y) &&
				!(bin.y + (bin.radius + 20) < ball.y))
				{
					ball.y = canvas.height * 0.5;
				}
		if (!(ball.x + (ball.radius + 20) < bin2.x)&&
				!(bin2.x + (bin2.radius + 20) < ball.x) &&
				!(ball.y + (ball.radius + 20) < bin2.y) &&
				!(bin2.y + (bin2.radius + 20) < ball.y))
				{
					console.log('Bin2');
				}
		if (!(ball.x + (ball.radius + 20) < bin3.x)&&
				!(bin3.x + (bin3.radius + 20) < ball.x) &&
				!(ball.y + (ball.radius + 20) < bin3.y) &&
				!(bin3.y + (bin3.radius + 20) < ball.y))
				{
					console.log('Bin3');
				}
	}
}