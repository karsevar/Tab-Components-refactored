let sectionsBoxes = document.querySelectorAll('.box');

class newSectionBox {
	constructor(props) {
		this.title = props.title;
		this.description = props.description;
		this.createBox(this);
	}

	createBox() {
		// html configuration 
		/* 
		<div class='box'>
			<div class='box-title'></div>
			<div class='box-description'></div>
		</div>
		*/

		const parentBox = document.createElement('div');
		parentBox.className = 'box';

		const boxHeader = document.createElement('div');
		boxHeader.className = 'box-title';
		boxHeader.textContent = this.title;

		const boxDescription = document.createElement('div');
		boxDescription.className = 'box-description';
		boxDescription.textContent = this.description;

		parentBox.appendChild(boxHeader);
		parentBox.appendChild(boxDescription);
		console.log(parentBox);

		const domElement = document.querySelector('.section');
		domElement.appendChild(parentBox); 
	}
}

const boxProps = [
	{
		title: 'Box Title 3',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce risus nibh, gravida nec felis quis, facilisis facilisis lectus. Nulla ac orci pretium, condimentum orci quis, accumsan nisi. Aliquam erat volutpat. Curabitur cursus mattis libero, at viverra risus hendrerit quis. Fusce imperdiet tristique tortor non tincidunt. Mauris accumsan urna nec augue feugiat porta. Proin vitae magna in ex malesuada laoreet eget a nulla. Aliquam tristique et elit at consequat. In hac habitasse platea dictumst.'
	},
	{
		title: 'Box Title 4',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce risus nibh, gravida nec felis quis, facilisis facilisis lectus. Nulla ac orci pretium, condimentum orci quis, accumsan nisi. Aliquam erat volutpat. Curabitur cursus mattis libero, at viverra risus hendrerit quis. Fusce imperdiet tristique tortor non tincidunt. Mauris accumsan urna nec augue feugiat porta. Proin vitae magna in ex malesuada laoreet eget a nulla. Aliquam tristique et elit at consequat. In hac habitasse platea dictumst.'
	},
	{
		title: 'Box Title 5',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce risus nibh, gravida nec felis quis, facilisis facilisis lectus. Nulla ac orci pretium, condimentum orci quis, accumsan nisi. Aliquam erat volutpat. Curabitur cursus mattis libero, at viverra risus hendrerit quis. Fusce imperdiet tristique tortor non tincidunt. Mauris accumsan urna nec augue feugiat porta. Proin vitae magna in ex malesuada laoreet eget a nulla. Aliquam tristique et elit at consequat. In hac habitasse platea dictumst.'
	}
]


boxProps.forEach(boxProp => new newSectionBox(boxProp));




