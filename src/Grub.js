var Grub = function(age, color, food) {
	this.age = age || 0;
	this.color = color || 'pink';
	this.food = food || 'jelly';
};

Grub.prototype.eat = function() {
	let meal = this.food;
	this.food = undefined;
	return meal;
}