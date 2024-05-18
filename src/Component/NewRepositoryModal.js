import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewRepositoryModal = () => {
  const navigate = useNavigate();
  const [repoName, setRepoName] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateRepository = () => {
    // Logic to create repository using API (not implemented here)
    // After successful creation, navigate to the newly created repository
    // For demo, we'll navigate to a random repository
    const randomRepoId = Math.floor(Math.random() * 1000); // Generate random repo ID
    navigate(`/repository/${randomRepoId}`);
  };

  return (
    <div>
      <h2>Create New Repository</h2>
      <form onSubmit={handleCreateRepository}>
        <div>
          <label>Repository Name:</label>
          <input
            type="text"
            value={repoName}
            onChange={(e) => setRepoName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Create Repository</button>
      </form>
    </div>
  );
};

export default NewRepositoryModal;
