// Ball constructor function
class Ball {
    constructor(x, y, radius, dx, dy, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
    }

    // Draw the ball on canvas
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    // Update the ball's position
    update(canvas) {
        // Check for collision with left or right walls
        if (this.x + this.dx > canvas.width - this.radius || this.x + this.dx < this.radius) {
            this.dx = -this.dx;
        }
    
    // Check for collision with top or bottom walls
    if (this.y + this.dy > canvas.height - this.radius || this.y + this.dy < this.radius) {
        this.dy = -this.dy;
    }
    // Update the ball's position
    this.x += this.dx;
    this.y += this.dy;
    }
}

// Create a canvas element
const canvas = document.getElementById(`animationCanvas`);
const ctx = canvas.getContext(`2d`);

// Initialize the ball with given properties
const ball = new Ball(200, 160, 20, 2, 2, `red`);

// Animate the ball
function animate() {
    // Clear the canvas 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw and update the ball
    ball.draw(ctx);
    ball.update(canvas);
}

// Use setInterval to create an animation loop
setInterval(animate, 20);
