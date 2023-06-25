import React from 'react';

function ActivityEntry({ entry, onEdit, onDelete }) {
  const { serialNo, activityType, duration, distance, sets } = entry;

  const handleEdit = () => {
    onEdit(entry);
  };

  const handleDelete = () => {
    onDelete(entry);
  };

  return (
    <tr>
      <td>{serialNo}</td>
      <td>{activityType}</td>
      <td>{duration} minutes</td>
      <td>{distance} miles</td>
      <td>{sets}</td>
      <td>
        <button className="edit-button" onClick={handleEdit}>Edit</button>
        <button className="delete-button" onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default ActivityEntry;
