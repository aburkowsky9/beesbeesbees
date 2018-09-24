var Bee = function(age, color, food, job) {
	//age = age || 'yellow'
	Grub.call(this, age || 5, color ||'yellow', food);
	this.job = job || 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;