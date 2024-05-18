// // RepositoryDetails.js

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const RepositoryDetails = () => {
//   const { id } = useParams();
//   const [repository, setRepository] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchRepository = async () => {
//       try {
//         const response = await fetch('https://api.github.com/repos/emdo2841/' + id, {
//           headers: {
//             Authorization: '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'
//           }
//         });
//     //     if (response.ok) {
//     //       const data = await response.json();
//     //       // Iterate over the repositories and log details for each
//     //       data.forEach(repo => {
//     //         console.log("Repository Name:", repo.name);
//     //         console.log("Description:", repo.description);
//     //         console.log("Language:", repo.language);
//     //         // Add more details as needed
//     //       });
//     //     } else {
//     //       console.error('Failed to fetch repositories:', response.statusText);
//     //     }""
//     //   } catch (error) {
//     //     console.error('Error fetching repositories:', error);
//     //   }
//     // };
//         console.log('response',response)
//         if (response.ok) {
//           const data = await response.json();
//           console.log('Repository Data:', data);
//           setRepository(data);
//           setLoading(false);
//         } else {
//           setError('Failed to fetch repository');
//           console.error('Failed to fetch repository:', response.statusText);
//         }
//       } catch (error) {
//         setError('Error fetching repository');
//         console.error('Error fetching repository:', error);
//       }
//     };
    

//     fetchRepository();
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2>Repository Details</h2>
//       <div>
//         <h3> {repository.name}</h3>
//         <p>Description: {repository.description}</p>
//         <p>Language: {repository.language}</p>
//         {/* Add more details as needed */}
//       </div>
//     </div>
//   );
// };

// export default RepositoryDetails;

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const RepositoryDetails = () => {
//   const { id } = useParams();
//   const [repository, setRepository] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchRepository = async () => {
//       try {
//         const response = await fetch(`https://api.github.com/repos/:emdo2841/:${id}`, {
//           headers: {
//             Authorization: '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'
//           }
//         });

//         if (response.ok) {
//           const data = await response.json();
//           console.log(data)
//           setRepository(data);
//           setLoading(false);
//         } else {
//           setError('Failed to fetch repository');
//           console.error('Failed to fetch repository:', response.statusText);
//         }
//       } catch (error) {
//         setError('Error fetching repository');
//         console.log('Error fetching repository:', error);
//       }
//     };

//     fetchRepository();
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2>Repository Details</h2>
//       <div>
//         <h3>{repository.name}</h3>
//         <p>Description: {repository.description}</p>
//         <p>Language: {repository.language}</p>
//         {/* Add more details as needed */}
//       </div>
//     </div>
//   );
// };

// export default RepositoryDetails;


// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const RepositoryDetails = () => {
//   const { customIdentifier } = useParams(); // Assuming you have a custom identifier
//   const [repository, setRepository] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchRepository = async () => {
//       try {
//         const response = await fetch(`https://api.github.com/repos/emdo2841/${customIdentifier}`, {
//           headers: {
//             Authorization: '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'
//           }
//         });

//         if (response.ok) {
//           const data = await response.json();
//           setRepository(data);
//           setLoading(false);
//         } else {
//           setError('Failed to fetch repository');
//           console.error('Failed to fetch repository:', response.statusText);
//         }
//       } catch (error) {
//         setError('Error fetching repository');
//         console.error('Error fetching repository:', error);
//       }
//     };

//     fetchRepository();
//   }, [customIdentifier]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2>Repository Details</h2>
//       <div>
//         <h3>{repository.name}</h3>
//         <p>Description: {repository.description}</p>
//         <p>Language: {repository.language}</p>
//         {/* Add more details as needed */}
//       </div>
//     </div>
//   );
// };

// export default RepositoryDetails;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RepositoryDetails = () => {
  const { fullName } = useParams(); // Assuming the fullName is used as the custom identifier
  const [repository, setRepository] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepository = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/emdo2841/${fullName}`, {
          headers: {
            Authorization: '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'
          }
        });

        if (response.ok) {
          const data = await response.json();
          setRepository(data);
          setLoading(false);
        } else {
          setError('Failed to fetch repository');
          console.error('Failed to fetch repository:', response.statusText);
        }
      } catch (error) {
        setError('Error fetching repository');
        console.error('Error fetching repository:', error);
      }
    };

    fetchRepository();
  }, [fullName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Repository Details</h2>
      <div>
        <h3>{repository.name}</h3>
        <p>Description: {repository.description}</p>
        <p>Language: {repository.language}</p>
        {/* Display all properties of the repository */}
        <pre>{JSON.stringify(repository, null, 2)}</pre>
      </div>
    </div>
  );
};

export default RepositoryDetails;
