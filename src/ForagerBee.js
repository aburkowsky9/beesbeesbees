var ForagerBee = function(age, color, food, job, canFly, treasureChest) {
	Bee.call(this, age || 10, color, food, job || 'find pollen')
	this.canFly = true;
	this.treasureChest = treasureChest || [];
};

ForagerBee.prototype = Object.create(HoneyMakerBee.prototype);

ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(treasure) {
	this.treasureChest.push(treasure);
}

