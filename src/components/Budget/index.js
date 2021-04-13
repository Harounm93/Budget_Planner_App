import react, { useState } from 'react';

function Budget() {
    const [ total, setTotal] = useState() 
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
		setIsEditing(true);
    }
  return (
    <div className = " budget">
      <span> Budget {total}</span>
    </div>
  );
}
export default Budget
