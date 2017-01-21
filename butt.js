function Butt(height, width, text, icon, container, color, font, vis, eventMethod) {
	this.height = height;
	this.width = width;
	this.text = text;
	this.icon = icon;
	this.container = container;
	this.color = color;
	this.font = font;
	this.vis = vis;
	this.eventMethod = eventMethod;
	this.createButt();
	this.button = document.getElementById(this.text);
	this.buttonIcon = document.getElementById(this.text + "_buttIcon");
	this.buttonText = document.getElementById(this.text + "_buttText");
}

Butt.prototype.createButt = function () {
    var currentButt = document.createElement("BUTTON");
    currentButt.setAttribute("id", this.text);
    currentButt.addEventListener("click", this.eventMethod, false);
	 if(this.vis === "hidden"){
		currentButt.style.visibility = this.vis;
	 }
    document.getElementById(this.container).appendChild(currentButt);
    currentButt.style.height = this.height;
    currentButt.style.width = this.width;
    currentButt.style.backgroundColor = this.color;
    var iconObj = document.createElement("I");
    iconObj.setAttribute("id", this.text + "_buttIcon");
    iconObj.setAttribute("class", "material-icons md-light");
    iconObj.style.fontSize = "55px";
    iconObj.innerHTML = this.icon;
    currentButt.appendChild(iconObj);
	var placeText = document.createElement("P");
	placeText.setAttribute("id", this.text + "_buttText");
	placeText.innerHTML = this.text;
	placeText.style.fontFamily = this.font;
	currentButt.appendChild(placeText);
};

Butt.prototype.setButtonAttribute = function(attribute, value){
    this.button.setAttribute(attribute,value);
};

Butt.prototype.setIconAttribute = function(attribute, value) {
    this.buttonIcon.setAttribute(attribute, value);
};

Butt.prototype.setTextAttribute = function (attribute, value) {
    this.buttonText.setAttribute(attribute, value);
};

Butt.prototype.getButtonAttribute = function (attribute) {
    return this.button.getAttribute(attribute);
};

Butt.prototype.getIconAttribute = function (attribute) {
    return this.buttonIcon.getAttribute(attribute);
};

Butt.prototype.getTextAttribute = function (attribute) {
    return this.buttonText.getAttribute(attribute);
};

Butt.prototype.setButtonColor = function(newColor){
	this.button.style.backgroundColor = newColor;
};

Butt.prototype.setText = function(newText){
	this.buttonText.innerHTML = newText;
};

Butt.prototype.setTextSize = function(size) {
    this.buttonText.style.fontSize = size;
};

Butt.prototype.setVisible = function(){
    this.button.style.visibility = "visible";
};

Butt.prototype.setNotVisible = function(){
    this.button.style.visibility = "hidden";
};

Butt.prototype.setBorderRadius = function(value) {
    this.button.style.borderRadius = value;
};

Butt.prototype.setIconSize = function(value){
    this.buttonIcon.style.fontSize = value;
};