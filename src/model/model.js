function Model() {
    this.color = null;
    this.action = null;
    this.downX = null;
    this.outX = null;
    this.downY = null;
    this.outY = null;
};
Model.prototype.setColor = function (color) {
    this.color = color;
};
Model.prototype.getColor = function () {
    return this.color;
};
Model.prototype.setAction = function (action) {
    this.action = action;
};
Model.prototype.getAction = function () {
    return this.action;
};
Model.prototype.clearAll = function () {
    this.color = null;
    this.action = null;
};

Model.prototype.setDownX = function (downX) {
    this.downX = downX;
};
Model.prototype.getDownX = function () {
    return this.downX;
    };
Model.prototype.setOutX = function (outX) {
    this.outX = outX;
};
Model.prototype.getOutX = function () {
    return this.outX;
};

Model.prototype.setDownY = function (downY) {
    this.downY = downY;
};
Model.prototype.getDownY = function () {
    return this.downY;
};
Model.prototype.setOutY = function (outY) {
    this.outY = outY;
};
Model.prototype.getOutY = function () {
    return this.outY;
};
Model.prototype.clearAllXY = function () {
    this.downX = null;
    this.downY = null;
    this.outX = null;
    this.outY = null;
}