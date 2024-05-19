import '../App.css';
import React, { useState, useEffect } from 'react';
import { Container, Select, Heading, Flex, Button } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Center, Box } from '@chakra-ui/react';

const Main = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10); // Number of repositories per page

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/emdo2841/repos', {
          headers: {
            Authorization: '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'
          }
        });

        if (response.ok) {
          const data = await response.json();
          setRepositories(data);
          setLoading(false);
        } else {
          setError('Failed to fetch repositories');
          console.error('Failed to fetch repositories:', response.statusText);
        }
      } catch (error) {
        setError('Error fetching repositories');
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepositories();
  }, []);

  // Filter repositories based on searchQuery and languageFilter
  const filteredRepositories = repositories.filter(repo => {
    const matchSearch = repo.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchLanguage = languageFilter === '' || repo.language === languageFilter;
    return matchSearch && matchLanguage;
  });

  // Logic for pagination
  const totalItems = filteredRepositories.length;
  const totalPages = Math.ceil(totalItems / perPage);

  const indexOfLastRepo = Math.min(currentPage * perPage, totalItems);
  const indexOfFirstRepo = Math.max(indexOfLastRepo - perPage, 0);
  const currentRepos = filteredRepositories.slice(indexOfFirstRepo, indexOfLastRepo);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Center>
        <Heading mt="15px">My Github Repository</Heading>
      </Center>
      <Box>
        <Center>
          <Flex justify="center" align="center" spacing="4rem">
            <Input
              w="10rem"
              bg={'white'}
              mt="10px"
              className="input"
              type="text"
              placeholder="Search repositories"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <Select
              bg={'white'}
              w="10rem"
              mt="10px"
              className="select-option"
              value={languageFilter}
              onChange={e => setLanguageFilter(e.target.value)}
            >
              <option value="">All Languages</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="C">C</option>
              <option value="CSS">CSS</option>
              <option value="Shell">Shell</option>
              <option value="HTML">HTML</option>
              {/* Add more options for other languages */}
            </Select>
          </Flex>
        </Center>
      </Box>
      <Center>
        <Container>
          <ul className="unlist">
            {currentRepos.map(repo => (
              <li key={repo.id}>
                <Link to={`/repository/${repo.id}`} className="custom-link">
                  {repo.name}
                </Link>
              </li>
            ))}
          </ul>
          <div>
            {/* Pagination controls */}
            {totalPages > 1 && (
              <div>
                <Flex alignContent='center' justifyContent='space-evenly'>
                  <Button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                  </Button>
                  <Button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next
                  </Button>
                </Flex>
              </div>
            )}
          </div>
        </Container>
      </Center>
    </div>
  );
};

export default Main;

// import '../App.css';
// import React, { useState, useEffect } from 'react';
// import { Container, Select, Heading, Flex, Button } from '@chakra-ui/react';
// import { Input } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';
// import { Center, Box } from '@chakra-ui/react';

// const Main = () => {
//   const [repositories, setRepositories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [languageFilter, setLanguageFilter] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [perPage] = useState(10); // Number of repositories per page

//   useEffect(() => {
//     const fetchRepositories = async () => {
//       try {
//         const response = await fetch('https://api.github.com/users/emdo2841/repos', {
//           headers: {
//             Authorization: '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'
//           }
//         });

//         if (response.ok) {
//           const data = await response.json();
//           setRepositories(data);
//           setLoading(false);
//         } else {
//           setError('Failed to fetch repositories');
//           console.error('Failed to fetch repositories:', response.statusText);
//         }
//       } catch (error) {
//         setError('Error fetching repositories');
//         console.error('Error fetching repositories:', error);
//       }
//     };

//     fetchRepositories();
//   }, []);

//   // Filter repositories based on searchQuery and languageFilter
//   const filteredRepositories = repositories.filter(repo => {
//     const matchSearch = repo.name.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchLanguage = languageFilter === '' || repo.language === languageFilter;
//     return matchSearch && matchLanguage;
//   });

//   // Logic for pagination
//   const totalItems = filteredRepositories.length;
//   const totalPages = Math.ceil(totalItems / perPage);

//   const indexOfLastRepo = Math.min(currentPage * perPage, totalItems);
//   const indexOfFirstRepo = Math.max(indexOfLastRepo - perPage, 0);
//   const currentRepos = filteredRepositories.slice(indexOfFirstRepo, indexOfLastRepo);

//   const paginate = pageNumber => {
//     setCurrentPage(pageNumber);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <Center>
//         <Heading mt="15px">My Github Repository</Heading>
//       </Center>
//       <Box>
//         <Center>
//           <Flex justify="center" align="center" spacing="4rem">
//             <Input
//               w="10rem"
//               bg={'white'}
//               mt="10px"
//               className="input"
//               type="text"
//               placeholder="Search repositories"
//               value={searchQuery}
//               onChange={e => setSearchQuery(e.target.value)}
//             />
//             <Select
//               bg={'white'}
//               w="10rem"
//               mt="10px"
//               className="select-option"
//               value={languageFilter}
//               onChange={e => setLanguageFilter(e.target.value)}
//             >
//               <option value="">All Languages</option>
//               <option value="JavaScript">JavaScript</option>
//               <option value="Python">Python</option>
//               <option value="C">C</option>
//               <option value="CSS">CSS</option>
//               <option value="Shell">Shell</option>
//               <option value="HTML">HTML</option>
//               {/* Add more options for other languages */}
//             </Select>
//           </Flex>
//         </Center>
//       </Box>
//       <Center>
//         <Container>
//           <ul className="unlist">
//             {currentRepos.map(repo => (
//               <li key={repo.id}>
//                 <Link to={`/repository/${repo.id}`} className="custom-link">
//                   {repo.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//           <div>
//             {/* Pagination controls */}
//             {totalPages > 1 && (
//               <div>
//                 <Flex alignContent='center' justifyContent='space-evenly'>
//                   <Button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
//                     Previous
//                   </Button>
//                   <Button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
//                     Next
//                   </Button>
//                 </Flex>
//               </div>
//             )}
//           </div>
//         </Container>
//       </Center>
//     </div>
//   );
// };

// export default Main;
