var RetiredForagerBee = function(age, color, food, job, canFly, treasureChest) {
	ForagerBee.call(this, age || 40, color || 'grey', food, job || 'gamble');
	this.canFly = false;
	this.treasureChest = treasureChest || [];
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);

RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function(treasure) {
	return "I am too old, let me play cards instead";
}

RetiredForagerBee.prototype.gamble = function(hasWon, treasure) {
	treasure = treasure || 'treasure';
	
	if (hasWon === undefined) {
		hasWon = true;
	}

	if (hasWon) {
		this.treasureChest.push(treasure);
	}
}