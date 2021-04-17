import react from 'react';

const ExpenseItem = (props) => {

//in progress
	return (
		<li class='list-group'>
			{props.name}
			<div>
				<span class='item'>£{props.cost}</span>
				<ItemDelete  onClick={} />
			</div>
		</li>
	);
};

export default ExpenseItem;