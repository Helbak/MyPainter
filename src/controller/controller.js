function Controller() {
    // this.logic = new Logic();
    this.model = new Model();
};

Controller.prototype.init = function () {
    const red = document.getElementById('red');
    const yellow = document.getElementById('yellow');
    const green = document.getElementById('green');
    const blue = document.getElementById('blue');
    const horizontLine = document.getElementById('horizontLine');
    const verticalLine = document.getElementById('verticalLine');
    const justLine = document.getElementById('justLine');
    const square = document.getElementById('square');
    const flow = document.getElementById('flow');
    const del = document.getElementById('delete');
    red.addEventListener('click', function () {
        this.model.setColor('red');
    }.bind(this), false);
    yellow.addEventListener('click', function () {
        this.model.setColor('yellow');
    }.bind(this), false);
    green.addEventListener('click', function () {
        this.model.setColor('green');
    }.bind(this), false);
    blue.addEventListener('click', function () {
        this.model.setColor('blue');
    }.bind(this), false);

    horizontLine.addEventListener('click', function () {
        this.model.setAction('horizontLine');
    }.bind(this), false);
    verticalLine.addEventListener('click', function () {
        this.model.setAction('verticalLine');
    }.bind(this), false);
    justLine.addEventListener('click', function () {
        this.model.setAction('justLine');
    }.bind(this), false);
    square.addEventListener('click', function () {
        this.model.setAction('square');
    }.bind(this), false);
    flow.addEventListener('click', function () {
        this.model.setAction('flow');
    }.bind(this), false);
    del.addEventListener('click', function () {
        this.clearCanvas('delete');
    }.bind(this), false);
    const canvas = document.getElementById('c1');
    this.ctx = canvas.getContext('2d');
    canvas.onmousedown = function(event){
let x = event.offsetX;
let y = event.offsetY;
this.takeAction(x,y);
    }.bind(this);
    canvas.onmouseup = function (event) {
        let x = event.offsetX;
        let y = event.offsetY;
        this.takeAction(x,y);
    }.bind(this);
};
    Controller.prototype.takeAction = function (x,y) {

        let action = this.model.getAction();
        let color = this.model.getColor();
        switch (action) {
            case 'horizontLine':
                this.drawHorizontLine(y, color);
                return y;
            case 'verticalLine':
                this.drawVerticalLine(x, color);
                return x;
            case 'justLine':
                if (this.model.getDownX() === null) {
                    this.model.setDownX(x);
                    this.model.setDownY(y);
                    return;
                }
                if (this.model.getDownX() !== null) {
                    this.model.setOutX(x);
                    this.model.setOutY(y);
                    this.drawJustLine(this.model.getDownX(), this.model.getDownY(), this.model.getOutX(), this.model.getOutY(), this.model.getColor());
                    this.model.clearAllXY();
                    return;
                }
                return;
            case 'square':
                if (this.model.getDownX() === null) {
                    this.model.setDownX(x);
                    this.model.setDownY(y);
                    return;
                }
                if (this.model.getDownX() !== null) {
                    this.model.setOutX(x);
                    this.model.setOutY(y);
                    this.drawSquare(this.model.getDownX(), this.model.getDownY(), this.model.getOutX(), this.model.getOutY(), this.model.getColor());
                    this.model.clearAllXY();
                    return;
                }
                return;

        }
        ;
    };
Controller.prototype.drawHorizontLine = function (y, color) {
   console.log(" color is" +color);
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = color;
    // this.ctx.fillStyle = color;
    this.ctx.moveTo(0, y);
    this.ctx.lineTo(734, y);
    this.ctx.stroke();
};
Controller.prototype.drawVerticalLine = function (x, color) {
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = color;
    // this.ctx.fillStyle = color;
    this.ctx.moveTo(x, 0);
    this.ctx.lineTo(x, 351);
    this.ctx.stroke();
};
Controller.prototype.clearCanvas = function () {
    this.ctx.clearRect(0, 0, 734, 351);
    this.model.clearAll();
};
Controller.prototype.drawJustLine = function (downX, downY, outX, outY, color) {
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = color;
    // this.ctx.fillStyle = color;
    this.ctx.moveTo(downX, downY);
    this.ctx.lineTo(outX, outY);
    this.ctx.stroke();
};
Controller.prototype.drawSquare = function (downX, downY, outX, outY, color) {
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = color;
    // this.ctx.beginPath();
// здесь инструкции по созданию фигур
    this.ctx.moveTo(downX, downY);
    this.ctx.lineTo(outX, downY);

    this.ctx.moveTo(outX, downY);
    this.ctx.lineTo(outX, outY);

    this.ctx.moveTo(outX, outY);
    this.ctx.lineTo(downX, outY);

    this.ctx.moveTo(downX, downY);
    this.ctx.lineTo(downX, outY);
    this.ctx.stroke();
    // this.ctx.closePath();
};


