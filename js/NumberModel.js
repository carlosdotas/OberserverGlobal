class NumberModel extends Observers {
	constructor() {
		super();
		this.number = 0;
		this.color= 'red';
		this.observers = [];
	}

	increment() {
		const colors = ['orange','red','green','blue'];

		this.number++;
		this.color = colors[Math.floor(Math.random()* colors.length)];

		this.notifyObservers();
	}


}